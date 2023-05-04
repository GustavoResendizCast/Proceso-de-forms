import http from "http";
import path from "path";
import app from './app.js';

global["__dirname"] = path.dirname(new URL(import.meta.url).pathname);

const server = http.createServer(app );

server.listen(3000, "0.0.0.0", () => {
  console.log("👩‍🍳 Servidor escuchando en http://localhost:3000"); 
});