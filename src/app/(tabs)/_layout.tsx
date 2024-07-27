import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  const config = {
    headerTintColor:"#24252A",
    tabBarActiveTintColor:"#FB772B",
    tabBarActiveBackgroundColor:"#24252A",
    headerShown:false,
  }


  const options = {
    tabBarHideOnKeyboard:true,
    headerTintColor:config.headerTintColor,
    tabBarActiveTintColor:config.tabBarActiveTintColor,
    tabBarActiveBackgroundColor:config.tabBarActiveBackgroundColor,
    tabBarInactiveBackgroundColor:config.tabBarActiveBackgroundColor,
    headerShown:config.headerShown,
  }



  
  return (
    <Tabs>
      <Tabs.Screen  name="index" 
      options={{
        ...options,
        title:"Home",
        tabBarIcon:({focused,color,size})=>{
                return  <Ionicons name="home-outline" size={size} color={color}/>
              }
    
      }}
      
      ></Tabs.Screen>

      <Tabs.Screen name="queue"  options={{
        ...options,
        title:"Fila",
        tabBarIcon:({focused,color,size})=>{
          return  <Ionicons name="download" size={size} color={color}/>
        }
        }}></Tabs.Screen>

    </Tabs>
  );
}
