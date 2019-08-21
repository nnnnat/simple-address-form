import React from "react";
import { hydrate } from "react-dom";
import Layout from "./components/Layout";

const ROOT_ELEMENT = document.querySelector("#root");
const app = <Layout />;

hydrate(app, ROOT_ELEMENT);
