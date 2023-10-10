import { UserService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config/index.js";

export const UserController = {
  getAll: async (req, res) => {
    try {
      const data = await UserService.getAll();
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getById: async (req, res) => {
    try {
      const data = await UserService.getById(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  delete: async (req, res) => {
    try {
      const data = await UserService.delete(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  update: async (req, res) => {
    try {
      const data = await UserService.delete(req.params.id, req.body);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  add: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(req.body.password, salt);
      req.body.password = passwordHash;
      const data = await UserService.add(req.body);
      return httpResponse.CREATED(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  loginUser: async (req, res) => {
    try {
      const user = await UserService.login(req.body);
      if (!user) {
        return httpResponse.NOT_FOUND(
          res,
          "user not found",
          "check your email"
        );
      }
      const check = await bcrypt.compare(req.body.password, user.password);
      if (check) {
        const accessToken = jwt.sign({ user: user }, config.env.jwtSecret);
        return httpResponse.SUCCESS(res, accessToken);
      } else {
        return httpResponse.FORBIDDEN(res, "enter correct password");
      }
    } catch (error) {
      return httpResponse.NOT_FOUND(res, "No user exist");
    }
  },
  userStream: async (req, res) => {
    try {
      console.log(req.params.id);
      const data = await UserService.userStream(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getUSid: async (req, res) => {
    try {
      const data = await UserService.getUSid(
        req.params.userId,
        req.params.streamId
      );

      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },
  deleteUSid: async (req, res) => {
    try {
      const data = await UserService.deleteUSid(
        req.params.userId,
        req.params.streamId
      );
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
};
