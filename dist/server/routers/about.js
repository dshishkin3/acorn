import React from "react";
import express from 'express';
import serialize from "serialize-javascript";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import About from "../../pages/about/About";
const router = express.Router();
router.get("/about", (req, res) => {
    let cond = true;
    const congrats = renderToString(React.createElement(StaticRouter, null,
        React.createElement(About, null)));
    res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>About</title>
                   <link rel="stylesheet" type="text/css" href="./styles/about.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundle.js' defer></script>
                       <script>window.__INITIAL_STATE__ = ${serialize(cond)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`);
});
export default router;
