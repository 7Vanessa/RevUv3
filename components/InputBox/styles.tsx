import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },

    textInput: {
        flex: 1,
        marginHorizontal: 10,
    },

    icons: {
        marginHorizontal: 6,
    },

    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 10,
        marginRight: 10,
        flex: 1,
        alignItems: 'flex-end'
    },

    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;