import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { Foundation } from "@react-native-vector-icons/foundation";

export default function Tabslayout() {
  return (
    <Tabs
        screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#722F37',
        tabBarInactiveTintColor: '#999999',

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
    >
        <Tabs.Screen
            name='index'
            options={{
                title: 'Home',
                tabBarIcon: ({color, size}) =>{
                    <Foundation 
                        name="home"
                        size={30}
                        color={"#333"}
                    />
                }
            }}
        />

        <Tabs.Screen
            name="chatbot"
            options={{
                title: 'Chatbot',

                tabBarIcon: ({ size }) => (
                <Image
                    source={require('@/assets/images/ticket.png')}
                    style={{
                    width: size,
                    height: size,
                    resizeMode: 'contain',
                    }}
                />
                ),
            }}
        />
    </Tabs>
  )
}
