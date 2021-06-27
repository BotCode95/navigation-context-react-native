import React from 'react';
import {Platform, Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { Tab1Screen } from '../screens/Tabs/Tab1Screen';
import { TopTabNavigator } from './TopTabNavigator';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
    return Platform.OS === 'ios'
    ? <TabsIOS/>
    : <TabsAndroid/>
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled = {false}
            barStyle = {{
                backgroundColor: colores.primary
            }}
            screenOptions={({route}) => ({
                tabBarIcon: ({color, focused}) => {
                    let iconName: string = ''; 
                    switch (route.name) {
                        case 'Tab1':
                            iconName = 'bandage-outline'
                            break;
                        case 'Tab2':
                            iconName = 'basketball-outline'
                            break;
                        case 'Tab3':
                            iconName = 'bookmarks-outline'
                            break;
                    }
                    return <Icon name={iconName} size={20} color={color}/>
                }
            }) }
        >
            <BottomTabAndroid.Screen name="Tab1" options={{title: 'Tab1'}} component={Tab1Screen}/>
            <BottomTabAndroid.Screen name="Tab2" options={{title: 'Tab2'}}  component={TopTabNavigator}/>
            <BottomTabAndroid.Screen name="Tab3" options={{title: 'Stack'}}  component={StackNavigator}/>    
        </BottomTabAndroid.Navigator>
    )
}

const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',

            }}
            tabBarOptions={{
                activeTintColor:colores.primary,
                style: {
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0
                },
                labelStyle: {
                    fontSize: 15,
                    
                }
            }}
            screenOptions={({route}) => ({
                tabBarIcon: ({color, focused, size}) => {
                    let iconName: string = ''; 
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1'
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2'
                            break;
                        case 'StackNavigator':
                            iconName ='St'
                            break;
                    }
                    return <Text style={{color}}>{iconName}</Text>
                }
            })}
        >
            {/* <Tab.Screen name="Tab1" options={{title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>}} component={Tab1Screen}/> */}
            <BottomTabIOS.Screen name="Tab1" options={{title: 'Tab1'}} component={Tab1Screen}/>
            <BottomTabIOS.Screen name="Tab2" options={{title: 'Tab2'}}  component={TopTabNavigator}/>
            <BottomTabIOS.Screen name="Tab3" options={{title: 'Stack'}}  component={StackNavigator}/>
        </BottomTabIOS.Navigator>
    )
}
