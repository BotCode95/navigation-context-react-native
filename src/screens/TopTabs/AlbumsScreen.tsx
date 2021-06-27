import React, { useContext } from 'react'
import { View, Text, Button} from 'react-native'
import { styles } from '../../theme/appTheme'
import { AuthContext } from '../../context/AuthContext';

export const AlbumsScreen = () => {

    const {logout, authState} = useContext(AuthContext)
    const {isLoggedIn} =authState
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Album Screen</Text>

            {
                isLoggedIn ?
                null
                : <Button
                title = "Salir"
                onPress={logout}
                />
            }
            
        </View>
    )
}
