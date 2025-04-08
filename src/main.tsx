// // // קובץ ראשי: src/main.tsx
// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import { Provider } from "react-redux";
// // import { BrowserRouter } from "react-router-dom";
// // import App from "./App";
// // import store from "./store/store";
// // import "./index.css";

// // ReactDOM.createRoot(document.getElementById("root")!).render(
// //   <React.StrictMode>
// //     <Provider store={store}>
// //       <BrowserRouter>
// //         <App />
// //       </BrowserRouter>
// //     </Provider>
// //   </React.StrictMode>
// // );
// // src/main.tsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { ThemeProvider, CssBaseline } from '@mui/material';
// import customTheme from './theme/customTheme';
// import './index.css';
// import store from "./store/store";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";


// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//      <Provider store={store}>
//       <BrowserRouter>
//     <ThemeProvider theme={customTheme}>
//       <CssBaseline />
//       <App />
//     </ThemeProvider>
//     </BrowserRouter>
//    </Provider>
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store';
import customTheme from './theme/customTheme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
