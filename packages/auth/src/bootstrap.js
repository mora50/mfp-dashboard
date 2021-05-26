import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

/*
onNavigate function is the callback for container, it's necessary to update the Browser history of container
*/

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  //create the history object of micro-frontend URL
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    //it will keep watching if some route changes
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    //this function listen when host frontend changes
    /**
       
       * @param {Object} location This obj has information where we are about to navigate to inside of container
       */
    onParentNavigate(location) {
      const { pathname: nextPathName } = location;

      //this will sync the browser history containers with the marketing
      if (history.pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

/**
 If we are in development and isolation,
 call mount mmediately
 */
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  /**

 We are running through container
 and we should export the mount function
 */

  if (devRoot) {
    //the defaulthistory creates a browserFunc to manipulate the url in development mode

    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
