import {
    StyleSheet,
} from 'react-native'
const form = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: '#04819E'
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#38B2CE',
        marginVertical: 10,
        borderRadius: 25,
        textAlign: 'center',
        fontSize: 15,
        color: 'white'
    },
    btn: {
        alignItems: 'center',
        alignSelf: 'center',
        width: '50%',
        backgroundColor: '#FFA240',
        padding: 12,
        borderRadius: 25,
        marginVertical: 5
    }
})
export default form