// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { ErrorBoundary } from './ErrorBoundary';
import './index.css';
import { store } from './store';
ReactDOM.createRoot(document.getElementById('root')!).render(

        <React.StrictMode>
          <ErrorBoundary fallback={<h1>Error occured</h1>}>
            <Provider store={store}>
                <App/>
            </Provider>
                
          </ErrorBoundary>     
        </React.StrictMode>
 
 
)
