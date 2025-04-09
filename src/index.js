import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import store from './app/store'
import { Provider } from "react-redux";
import * as Sentry from "@sentry/react";

// Sentry.init({
//   dsn: "https://ce109f49ce386d064cf418c957a6d887@o4508507428749312.ingest.us.sentry.io/4508507469905920",
//   integrations: [
//     Sentry.browserTracingIntegration(),
//     Sentry.replayIntegration(),
//   ],
//   // Tracing
//   tracesSampleRate: 1.0, //  Capture 100% of the transactions
//   // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
//   // Session Replay
//   replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
//   replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
// });

ReactDOM.render(
<Router> 
    <Provider store={store}>
        <App />
    </Provider>
    
</Router>
, document.getElementById('root'));