import { Dimensions } from 'react-native';
let { width, height } = Dimensions.get('window');

const styles = {
    container: {
        flex: 1
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.5,
        height: height * 0.4,
        backgroundColor:'#000'
    },
    moviesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    text:{
        fontSize:16,
        fontWeight:'bold',
        color:'#FFF'
    }
}

export default styles;