import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      headerShown: false, 
      tabBarStyle: { backgroundColor: '#000' },
      tabBarActiveTintColor: '#1A53FF' 
    }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color}/> }} />
      <Tabs.Screen name="wallet" options={{ title: 'Wallet', tabBarIcon: ({color}) => <Ionicons name="wallet" size={24} color={color}/> }} />
      <Tabs.Screen name="referral" options={{ title: 'Referral', tabBarIcon: ({color}) => <Ionicons name="people" size={24} color={color}/> }} />
      <Tabs.Screen name="plans" options={{ title: 'Plans', tabBarIcon: ({color}) => <Ionicons name="pie-chart" size={24} color={color}/> }} />
      <Tabs.Screen name="more" options={{ title: 'More', tabBarIcon: ({color}) => <Ionicons name="person" size={24} color={color}/> }} />
    </Tabs>
  );
}