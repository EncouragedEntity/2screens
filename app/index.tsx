import React from 'react';
import Navigation, { NavigationRef } from './navigation';
import store, { Provider } from './storage';

export default React.memo(() => {
 const navigation = React.useRef<NavigationRef>(null);

  return (
    <Provider store={store}>
        <Navigation ref={navigation} />
    </Provider>
  );
});