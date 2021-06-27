import { DrawerScreenProps } from '@react-navigation/drawer';
/// import { StackScreenProps } from '@react-navigation/stack';
import React, {useEffect } from 'react'
import {Text, View,Button, TouchableOpacity} from 'react-native'
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


///interface Props extends StackScreenProps<any,any>{}
interface Props extends DrawerScreenProps<any,any>{}

export const Page1Screen = ({navigation} : Props) => {

    useEffect(() => {
        navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity
                style={{
                    marginLeft: 10
                }}
                onPress={() => navigation.toggleDrawer()}
            >
                <Icon
                    name="menu-outline"
                    color={colores.primary}
                    size={30}
                />
            </TouchableOpacity>
        )
        })
    }, [])
    return (
        <View style={styles.globalMargin}> 
            <Text style={styles.title}>Pagina 1 Screen</Text>
            <Button
                title="Ir a Página 2"
                onPress={() => navigation.navigate('Page2Screen')}
            />
           <Text
            style={{marginVertical: 20, fontSize: 20}}
           >Navegar con argumentos</Text>
           <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
                    style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
                    onPress={() => navigation.navigate('PersonaScreen',{
                        id: 1 , nombre: 'Pedro'
                    })}
            >                
                <Icon
                    name="body-outline"
                    color="white"
                    size={30}
                />
                <Text style= {styles.botonGrandeTexto}>Pedro</Text>
                
            </TouchableOpacity>
            <TouchableOpacity
                    style={styles.botonGrande}
                    onPress={() => navigation.navigate('PersonaScreen',{
                        id: 2 , nombre: 'María'
                    })}
            >
                <Icon
                    name="body-outline"
                    color="white"
                    size={30}
                />
                <Text style= {styles.botonGrandeTexto}>María</Text>
                
            </TouchableOpacity>
           </View>
        </View>
    )
}
