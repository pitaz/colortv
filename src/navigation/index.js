import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UsersList from '../screens/UsersList';
import User from '../screens/User';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="userlist">
        <Stack.Screen
          name="userlist"
          component={UsersList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="user"
          component={User}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
