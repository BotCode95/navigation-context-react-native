import {StyleSheet} from 'react-native'

export const colores = {
    primary: '#5856D6',
}
export const styles = StyleSheet.create({
    globalMargin : {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande : {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18
    },
    avatar: {
        width: 150,
        height: 150
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 20,
        marginHorizontal: 20,
    },
    menuItem: {
        fontSize: 20,

    },
    menuBoton : {
        marginVertical: 20
    }
});