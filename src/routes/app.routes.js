import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CartProvider from '../context/cart';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import About from '../pages/About';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabScreens() {
    return(
      <Tab.Navigator
      tabBarOptions={{
          activeTintColor: '#369B2B',
          inactiveTintColor: '#eeeeee',
          showLabel: false,      
          style: {
            position: 'absolute',
            borderTopColor: '#66666666',
            backgroundColor: '#FFF',
            elevation: 3,
            height: 80,
            width: '90%',
            marginLeft: '5%',
            marginRight: '5%',
            marginBottom: 10,
            borderRadius: 25
          },
        }}
      >
      <Tab.Screen
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
          <Icon name={'home-outline'} size={42} color={color}/>
          )
        }}
      />
      <Tab.Screen
          name="Cart" 
          component={Cart}
          options={{
          tabBarIcon: ({ color }) => (
              <Icon name={'cart-outline'} size={42} color={color}/>
            )
            }}
      />
      <Tab.Screen
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
          <Icon name={'account'} size={42} color={color}/>
          )
        }}
      />
      </Tab.Navigator>
    )
}

function AppRoutes () {
    return(
    <CartProvider>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={TabScreens} options={{headerShown: false}}/>
          <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}}/>
          <Stack.Screen name="Profile" component={TabScreens} options={{headerShown: false}}/>
          <Stack.Screen name="About" component={About} options={{headerShown: false}}/>
      </Stack.Navigator>
    </CartProvider>
    )
}

export default AppRoutes;