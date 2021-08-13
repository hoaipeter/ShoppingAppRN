import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import ShopNavigator from './ShopNavigator';

type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavigationContainer: React.FC<Props> = props => {
  const navRef: React.MutableRefObject<any> = useRef();
  // @ts-ignore
  const isAuth = useSelector(state => !!state.auth.token);
  useEffect(() => {
    if (!isAuth) {
      navRef.current.dispatch(NavigationActions.navigate({ routeName: 'Auth' }));
    }
  }, [isAuth]);
  return <ShopNavigator ref={navRef} />;
};

export default NavigationContainer;
