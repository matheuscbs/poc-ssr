import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

const app = express();

app.get("*", (req, res) => {
  const html = ReactDOMServer.renderToString(
    <div>Minha App SSR com React</div>
  );
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR com React</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => console.log(`Server is listening on port: 3000`));
