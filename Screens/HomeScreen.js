import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import FormButton from "../components/FormButton";
import { AuthContext } from "../navigation/AuthProvider";

const HomeScreen = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {user.uid}</Text>
            <FormButton buttonTitle='Logout' onPress={() => logout()}></FormButton>

        </View>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    text: {
        fontSize: 28,
        color: '#051d5f'
    }
})