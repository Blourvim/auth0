import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from './auth/react-auth0-spa';

import './index.css';
import App from './App';
import auth0Config from './config/auth0.config.json';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Auth0Provider
    domain={auth0Config.domain}
    client_id={auth0Config.clientId}
    audience={auth0Config.audience}
    redirect_uri={window.location.origin}
    scope='manage_pages publish_pages pages_manage_cta read_audience_network_insights'
        defaultScope= 'manage_pages publish_pages pages_manage_cta read_audience_network_insights' 

  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
