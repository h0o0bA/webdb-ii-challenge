const server = require("./api/server");
// const server = express();

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Api is running on port ${port}`));
