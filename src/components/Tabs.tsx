import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {iconName = 'home';} 
          else if (route.name === 'Profile') {iconName = 'account';}
          else if (route.name === 'Explore') {iconName = 'map-search';}
          else if (route.name === 'Favorites') {iconName = 'heart';}

          return <MaterialCommunityIcons name={iconName} color={color} size={25} />;
        },
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: '#313437', // Set the background color of the tab bar
          height:50,
        },
        tabBarItemStyle: {
          backgroundColor: '#313437', // Set the background color of the tab item
        },
        tabBarShowLabel:false, // Hide the label next to the tab icons
        headerShown:false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Tabs;
