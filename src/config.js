const PROJECT_DATA_DIR = process.env.PROJECT_DATA_DIR || "";

const projects = require(`./${PROJECT_DATA_DIR}/index`);

export default projects;
