import path from "path";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import env from "../tooling/env";
import Layout from "./components/Layout";
import html from "./utils/html";

const staticPath = path.resolve("dist");
const server = express();

server.use("/public", express.static(staticPath, { index: false }));

server.get("*", (req, res) => {
  const app = renderToString(<Layout />);
  res.send(html(app));
});

server.listen(env.PORT, () => {
  console.log(`server is available @ port ${env.PORT}`);
});
