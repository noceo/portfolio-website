const PROJECT_DATA_DIR = process.env.PROJECT_DATA_DIR || "";

const data = require(`./${PROJECT_DATA_DIR}/index`);

export default data.projects;
