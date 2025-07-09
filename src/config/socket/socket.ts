import app from "../../routes/app";

import { Server } from "socket.io";
import { createServer } from "http";

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});


export { io, httpServer };



