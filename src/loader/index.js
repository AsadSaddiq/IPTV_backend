import expressLoader from "./express.js";

const loader = async (app) => {
  await expressLoader(app);
};
export default loader;
