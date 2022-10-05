import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProviderWithAuth0 } from "./ApolloProviderWithAuth0";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Auth0Provider
      audience={import.meta.env.VITE__AUTH0__AUDIENCE}
      clientId={import.meta.env.VITE__AUTH0__CLIENT_ID}
      domain={import.meta.env.VITE__AUTH0__DOMAIN}
      redirectUri={window.location.origin}
    >
      <ApolloProviderWithAuth0>
        <App />
      </ApolloProviderWithAuth0>
    </Auth0Provider>
  </React.StrictMode>
);
