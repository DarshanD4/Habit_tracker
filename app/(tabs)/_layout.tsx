import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function tabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}>
      
      <Tabs.Screen name="index" options={{ title: "Home",tabBarIcon:({color})=>(<FontAwesome name="home" size={24} color={color} />) }}/>
      <Tabs.Screen name="Login" options={{title:"Login"}}/>
    </Tabs>
    );
}
