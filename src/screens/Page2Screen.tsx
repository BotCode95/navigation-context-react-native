import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {Button, Text, View} from 'react-native'
import { styles } from '../theme/appTheme'

export const Page2Screen = () => {
    const navigator = useNavigation();
    return (
        <View style={styles.globalMargin}> 
            <Text style={styles.title}>Pagina 2 Screen</Text>
            <Button
                title= "Ir página 3"
                onPress={() => navigator.navigate('Page3Screen') }
            />
        </View>
    )
}
