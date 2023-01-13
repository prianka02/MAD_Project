import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { windowHeight } from "../utils/Dimensions";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SocialButton = ({ buttonTitle, btnType, color, backgroundColor, ...rest }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <View style={styles.iconWrapper}>
                <FontAwesome name={btnType} style={styles.icon} size={22} color={color} />

            </View>
            <View style={styles.btnTxtWrapper}>
                <Text style={[styles.buttonText]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};
export default SocialButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3,

    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontWeight: 'bold'
    },
    btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});