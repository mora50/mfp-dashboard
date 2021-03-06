import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

export default function MarketingApp() {
  const ref = useRef(null);

  //current browser history of container
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      /**
       
       * @param {Object} location This obj has information where we are about to navigate to inside of marketing
       */
      onNavigate: (location) => {
        /**
         * @constant {string} nextPathName this represents the path that our marketing app is attempting to navigate to
         */
        const nextPathName = location.pathname;

        const { pathname } = history.location;

        //verify if needs to do some navigation
        if (pathname !== nextPathName) {
          //this will update the browser history of container, with the path of mfe
          history.push(nextPathName);
        }
      },
    });

    //updates the remote mfe when containers changes
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
}
