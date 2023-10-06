import expressLoader from "./express.js";
import mongooseLoader from "./mongoose.js";

const loader = async (app) => {
  await mongooseLoader();
  await expressLoader(app);
};
export default loader;
