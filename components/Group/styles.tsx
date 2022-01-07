import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        height: 70,
        justifyContent: "space-between",
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: 'black',
        textAlignVertical: "center",
        borderBottomWidth: 1,
    },

    nom: {
        justifyContent: "center"
    },

    icon: {
        justifyContent: "center"
    }
})

export default styles;