import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
        drawerType={width >= 768 ? 'permanent' : 'front'}
        drawerContent={(props) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation} : DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{uri: 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'}}
          style={styles.avatar}
        />
      </View>


      <View style={styles.menuContainer}>
          <TouchableOpacity 
              style={{
                ...styles.menuBoton,
                flexDirection: 'row'
              }}
              onPress={() => navigation.navigate('Tabs')}
          >
            <Text><Icon name="chatbubble-ellipses-outline" size={23} color="black"/></Text>
            <Text style={styles.menuItem}> Navegación Stack</Text>
          </TouchableOpacity>
          <TouchableOpacity  
             style={{
                ...styles.menuBoton,
                flexDirection: 'row'
              }}
              onPress={() => navigation.navigate('SettingsScreen')}
          >
            <Text><Icon name="cog-outline" size={23} color="black"/></Text>
            <Text style={styles.menuItem}> Ajustes</Text>
          </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}