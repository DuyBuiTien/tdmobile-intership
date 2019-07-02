import { StyleSheet, Dimensions } from 'react-native'
import ApplicationStyles from '../../Themes/ApplicationStyles'


let screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    scrollContainer: {
    },
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        alignItems: 'center'
    },
    inlineText: {
        margin: 10,
        justifyContent: 'center',
        alignContent: 'center'
    },
    inlineHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 5,
        marginRight: 5
    },
    inlineImage:{
        width: screenWidth,
        height: screenWidth*640/960,
        margin: 10
    }
});