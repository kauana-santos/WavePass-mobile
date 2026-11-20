import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { Foundation } from "@react-native-vector-icons/foundation";
import { Feather } from "@react-native-vector-icons/feather";

export default function Tabslayout() {
  return (
    <Tabs
        screenOptions={{
        headerShown: false,
        // retirar comentario quando ajustar o icon da home - tabBarShowLabel: false,
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
                tabBarIcon: () =>{
                    <Foundation 
                        name="home"
                        size={30}
                        color={"#333"}
                    />
                }
            }}
        />

        <Tabs.Screen
            name="Chatbot"
            options={{
                title: 'Chatbot',

                tabBarIcon: () => (
                <Image
                    source={require('@/assets/images/ticket.png')}
                    style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'contain',
                    }}
                />
                ),
            }}
        />
    </Tabs>
  )
}
