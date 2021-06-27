import React from 'react'
import {Text} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/TopTabs/ChatScreen';
import { ContactsScreen } from '../screens/TopTabs/ContactsScreen';
import { AlbumsScreen } from '../screens/TopTabs/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
    
    const {top:paddingTop} = useSafeAreaInsets();
    return (
       <Tab.Navigator
        style={{paddingTop}}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        tabBarOptions={{
            pressColor: colores.primary,
            showIcon: true,
            indicatorStyle: {
                backgroundColor: colores.primary
            },
            style:{
                borderTopColor: colores.primary,
                borderTopWidth: 0,
                shadowColor: 'transparent',
                elevation: 0
            }
        }}
        screenOptions={({route}) => ({
            tabBarIcon: ({color, focused}) => {
                let iconName: string = ''; 
                switch (route.name) {
                    case 'Chat':
                        iconName = 'chatbox-ellipses-outline'
                        break;
                    case 'Contact':
                        iconName = 'people-outline'
                        break;
                    case 'Album':
                        iconName = 'albums-outline'
                        break;
                }
                return <Icon name={iconName} size={20} color={color}/>
            }
        })}
       >
           <Tab.Screen name="Chat" component={ChatScreen}></Tab.Screen>
           <Tab.Screen name="Contact" component={ContactsScreen}></Tab.Screen>
           <Tab.Screen name="Album" component={AlbumsScreen}></Tab.Screen>
       </Tab.Navigator>
    )
}
