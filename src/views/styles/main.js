import {
    StyleSheet,
} from 'react-native'
const main = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        color: '#ff6b6b',
        fontSize: 30,
        textAlign: 'center'
    },
    header: {
        flex: 1,
        justifyContent: 'center'
    },
    body: {
        alignSelf: 'stretch',
        flexGrow: 1,
        backgroundColor: 'white',
    },
    footer: {
        flex: 1,
        backgroundColor: 'green',
    },
    link: {
        color: 'blue',
    },
    notify: {
        color: '#ff6b6b'
    }
})
export default main