import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Color from './home/Color';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import AutoSet from './home/autoset';
import Info from './home/Info';
import Home from './home/home';
function App() {
  const Tab = createBottomTabNavigator();
  const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: 'relative',
      height: 40,
      backgroundColor: '#0080bd',
    },
  };
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Tab.Screen
          name="Info"
          component={Info}
          options={{
            tabBarIcon: ({focused}) => (
              <AntDesign
                name="user"
                color={focused ? '#FFB84C' : 'black'}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <AntDesign
                name="home"
                color={focused ? '#FFB84C' : 'black'}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="AutoSet"
          component={AutoSet}
          options={{
            tabBarIcon: ({focused}) => (
              <AntDesign
                name="rocket1"
                color={focused ? '#FFB84C' : 'black'}
                size={30}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
const styles = StyleSheet.create({
  Header: {
    flex: 1,
    backgroundColor: Color.yellow,
  },
  MainView: {
    flex: 8,
    width: '100%',
    height: '80%',
    backgroundColor: Color.lightRed,
  },
  Scearchbut: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 26,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    marginHorizontal: 10,
  },
});
