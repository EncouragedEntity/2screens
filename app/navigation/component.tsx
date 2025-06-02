import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationRef } from './types';
import routes from './routes';

import One from '../screens/one';
import Two from '../screens/two';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Tabs = () => (
  <BottomTab.Navigator
  screenOptions={{ headerShown: false }}>
    <BottomTab.Screen options={{tabBarLabel: 'First screen'}} name={routes.root.one} component={One} />
    <BottomTab.Screen options={{tabBarLabel: 'Second screen'}} name={routes.root.two} component={Two} />
  </BottomTab.Navigator>
);

const DrawerNav = () => (
  <Drawer.Navigator>
    <Drawer.Screen options={{headerTitle: 'Bottom Tabs', drawerLabel: 'Bottom Tabs'}} name={routes.root.tabs} component={Tabs} />
    <Drawer.Screen options={{headerTitle: 'First screen', drawerLabel: 'First screen'}} name={routes.root.one} component={One} />
    <Drawer.Screen options={{headerTitle: 'Second screen', drawerLabel: 'Second screen'}} name={routes.root.two} component={Two} />
  </Drawer.Navigator>
);

export default React.forwardRef<NavigationRef, {}>((props, ref) => {
  const navigation = React.useRef<NavigationRef>(null);

  React.useImperativeHandle<NavigationRef | null, NavigationRef | null>(ref, () => navigation.current);

  return (
    <NavigationContainer ref={navigation} {...props}>
      <Stack.Navigator
        initialRouteName={routes.root.stack}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={routes.root.stack} component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
