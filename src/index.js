import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { assets } from "./assets/index";
import { Helmet } from "react-helmet";
import quotes from "./quotes-tr.json";

const imG = assets[`a${Math.floor(Math.random() * 8)}`];

const soz = quotes[Math.floor(Math.random() * 121)];

ReactDOM.render(
  <div>
    <Helmet>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="og:url" content="https://ataturk.netlify.app/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Atatürk'ten Özdeyişler" />
      <meta property="og:description" content={soz} />
      <meta property="og:image" content={imG} />

      <meta name="twitter:card" content="summary" />
      <meta property="twitter:title" content="Atatürk'ten Özdeyişler" />
      <meta property="twitter:description" content={soz} />
      <meta property="twitter:url" content="https://ataturk.netlify.app/" />
      <meta property="twitter:image" content={imG} />

      <title>Atatürk</title>
      <style type="text/css">{`
        body,html {
            margin:0;
            padding:0;
            overflow:hidden;

        }
    `}</style>
    </Helmet>
    <div>
      <img alt={soz.substring(0,10)}
        style={{
          width: "100vw",
          height: "100vh",
        }}
        src={imG}
      />
    </div>
  </div>,

  document.getElementById("root")
);
serviceWorker.unregister();
