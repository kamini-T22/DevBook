import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {NextUIProvider} from "@nextui-org/react";
import "@fortawesome/fontawesome-free/css/all.min.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </NextUIProvider>
);
reportWebVitals();
