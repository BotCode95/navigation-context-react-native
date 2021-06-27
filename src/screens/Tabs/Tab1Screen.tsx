import React, { useEffect } from 'react'
import { Text,View } from 'react-native'
import { styles } from '../../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../../components/TouchableIcon';


export const Tab1Screen = () => {

    const {top:paddingTop} = useSafeAreaInsets();
    useEffect(() => {
        console.log('Tab Screen 1');
    }, [])

    return (
        <View style={{
            ...styles.globalMargin,
            paddingTop
        }}>
            <Text style={styles.title}>Iconos</Text>
            <Text>
            <TouchableIcon iconName="airplane-outline"/>
            <TouchableIcon iconName="attach-outline"/>
            <TouchableIcon iconName="bonfire-outline"/>
            <TouchableIcon iconName="calculator-outline"/>
            <TouchableIcon iconName="chatbubble-ellipses-outline"/>
            <TouchableIcon iconName="leaf-outline"/>
            </Text>
        </View>
    )
}
