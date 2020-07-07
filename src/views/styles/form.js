import {
    StyleSheet,
} from 'react-native'
const form = StyleSheet.create({
    container: {
        marginVertical: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        color: '#ff6b6b',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        alignSelf: 'stretch',
        backgroundColor: '#f7fff7',
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 15,
        color: 'black'
    },
    btn: {
        alignItems: 'center',
        alignSelf: 'center',
        width: '50%',
        backgroundColor: '#ff6b6b',
        padding: 12,
        borderRadius: 25,
        marginVertical: 5,
    },
    btnText: {
        color: 'white',
    },
    error: {
        alignSelf: 'stretch',
        color: 'brown',
        textAlign: 'left',
        fontSize: 13
    },
    notify: {
        color: '#ff6b6b'
    }
})
export default form