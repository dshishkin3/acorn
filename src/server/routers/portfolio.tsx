import React from "react";
import express, { Request, Response } from 'express';
import serialize from "serialize-javascript";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";

import Portfolio from "../../pages/portfolio/Portfolio";

const router = express.Router();

router.get("/portfolio", (req:Request, res:Response) => {
  let cond = true;
  const congrats = renderToString(
      <StaticRouter>
            <Portfolio />
      </StaticRouter>
  );

  res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>Portfolio</title>
                   <link rel="stylesheet" type="text/css" href="./styles/portfolio.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundle.js' defer></script>
                       <script>window.__INITIAL_STATE__ = ${serialize(
                         cond
                       )}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`);
});
export default router;
