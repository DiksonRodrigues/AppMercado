import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Register from '../pages/Register';

const Stack = createStackNavigator();

function AuthRoutes () {
    return(
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
    </Stack.Navigator>
    )
}

export default AuthRoutes;