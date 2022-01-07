import { FontAwesome, Ionicons, MaterialIcons, Entypo, Feather} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme, DarkTheme, useTheme, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Pressable, Settings} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import LoginScreen from "../screens/LoginScreen";
import GroupScreen from '../screens/GroupScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfilScreen from '../screens/ProfilScreen';
import GroupConversationScreen from "../screens/GroupConversationScreen";
import QuizzScreen from '../screens/QuizzScreen';
import MathsGroupScreen from '../screens/MathsGroupScreen'
import ComputerScienceGroupScreen from '../screens/ComputerScienceGroupScreen'
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import ProfilPicture from "../components/ProfilPicture";
import users from '../Data/users';
import SettingsScreen from "../screens/SettingsScreen";
import {auth} from "../firebase";
import ElecGroupScreen from "../screens/ElecGroupScreen";
import EnglishGroupScreen from "../screens/EnglishGroupScreen";
import CommunicationGroupScreen from "../screens/CommunicationGroupScreen";
import BiologyGroupScreen from "../screens/BiologyGroupScreen";
import PhysicsGroupScreen from "../screens/PhysicsGroupScreen";
import RegisterScreen from "../screens/RegisterScreen";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    const { colors } = useTheme();
    const navigation = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.navigate("Login")
            })
            .catch(error => alert(error.message))
    }
  return (
    <Stack.Navigator>

        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "RevU", headerTitleAlign: "center", headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25
            }, }} />

        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "RevU", headerTitleAlign: "center", headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25
            }, }} />

      <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={({ navigation }: RootTabScreenProps<'Root'>) => ({
              title: "Rev'U",
              headerTitleAlign: "center",
              headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 25
              },
              tabBarIcon: ({ color }) => <Ionicons name="md-home-outline" color={color} size={26} />,
              headerLeft: () => (
                  <Pressable
                      onPress={() => navigation.navigate('Profile')}
                      style={({ pressed }) => ({
                          opacity: pressed ? 0.5 : 1,
                      })}>
                      <ProfilPicture uri={auth.currentUser?.photoURL} />
                  </Pressable>
              ),
              headerRight: () => (
                  <Pressable
                      onPress={handleSignOut}
                      style={({ pressed }) => ({
                          opacity: pressed ? 0.5 : 1, marginRight: 15
                      })}>
                      <Feather name="power" size={24} color={useTheme().colors.text} />
                  </Pressable>
              )
          })}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'settings' }}>
          <Stack.Screen
              name="Profile"
              component={ProfilScreen}
          />

          <Stack.Screen
              name="GroupConversation"
              component={GroupConversationScreen}
              options={({ navigation }: RootTabScreenProps<'GroupConversation'>) => ({
          })}
          />

          <Stack.Screen
              name="Quiz"
              component={QuizzScreen}
          />

          <Stack.Screen
              name="Settings"
              component={SettingsScreen}
          />
          <Stack.Screen
              name="MathsGroup"
              component={MathsGroupScreen}
              options = {{title: "Mathematics"}}
          />
          <Stack.Screen
              name="ElecGroup"
              component={ElecGroupScreen}
              options = {{title: "Electronics"}}
          />
          <Stack.Screen
              name="ComputerScience"
              component={ComputerScienceGroupScreen}
              options = {{title: "Computer Sciences"}}
          />
          <Stack.Screen
              name="EnglishGroup"
              component={EnglishGroupScreen}
              options = {{title: "English"}}
          />
          <Stack.Screen
              name="CommunicationGroup"
              component={CommunicationGroupScreen}
              options = {{title: "Communication"}}
          />
          <Stack.Screen
              name="BiologyGroup"
              component={BiologyGroupScreen}
              options = {{title: "Biology"}}
          />
          <Stack.Screen
              name="PhysicsGroup"
              component={PhysicsGroupScreen}
              options = {{title: "Physics"}}
          />
      </Stack.Group>
    </Stack.Navigator>
  );
}


const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {

  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Group"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Group"
        component={GroupScreen}
        options={({ navigation }: RootTabScreenProps<'Group'>) => ({
          title: 'Group',
            headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons name="groups" color={color} size={30} />
        })}
      />

        <BottomTab.Screen
            name="Search"
            component={SearchScreen}
            options={({ navigation }: RootTabScreenProps<'Search'>) => ({
                title: 'Search',
                headerShown: false,
                tabBarIcon: ({ color }) => <Ionicons name="search" color={color} size={26} />
            })}
        />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
