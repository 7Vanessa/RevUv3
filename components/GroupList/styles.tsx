import { StyleSheet } from "react-native";

import { Dimensions } from 'react-native';
const { height } = Dimensions. get('window');

const styles = StyleSheet.create({
    container: {
        marginBottom: height*0.4
    }
})

export default styles;