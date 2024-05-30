import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import AddGroup from './Screens/AddGroup';
import CreateGroup from './Screens/CreateGroup';
import SelectContacts from './Screens/SelectContacts';
import FinalScreen from './Screens/FinalScreen';
import UpdatedGroups from './Screens/UpdatedGroups';
import LastScreen from './Screens/LastScreen';
0;
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddGroup"
          component={AddGroup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateGroup"
          component={CreateGroup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectContacts"
          component={SelectContacts}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FinalScreen"
          component={FinalScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpdatedGroups"
          component={UpdatedGroups}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LastScreen"
          component={LastScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
