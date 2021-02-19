const Server = require("./server/server");

require("dotenv").config();

const app = new Server();
app.listen();
