import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import Home from './Home';
import Menu from './Menu';
import Sobremesa from './Sobremesa';
import Cupom from './Cupom';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: '#00ff00' }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'black'} size={size} />
          ),
          headerShown: false,
        }}
      />

<Tab.Screen
        name="Cupom"
        component={Cupom}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="tag" color={'black'} size={size} />
          ),
          headerShown: false,
        }}
      />

<Tab.Screen
        name="Sobremesa"
        component={Sobremesa}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ice-cream" color={'black'} size={size} />
          ),
          headerShown: false,
        }}
      />

<Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={'black'} size={size} />
          ),
          headerShown: false,
        }}
      />

    </Tab.Navigator>
  );
}
