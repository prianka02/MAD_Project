import { React, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import FormInput from "../components/FormInput";
import SocialButton from "../components/SocialButton";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import FormButton from "../components/FormButton";



const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();


    return (
        <View style={styles.container}>

            <Text style={styles.text}>Create an account</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false} />
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true} />

            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Confirm password"
                iconType="lock"
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle="Sign Up"
                onPress={() => alert('Sign Up Clicked!')}
            />
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our</Text>
                <TouchableOpacity onPress={() => alert('Terms Clicked!')}><Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Terms of service</Text></TouchableOpacity><Text style={styles.color_textPrivate}> and </Text>
                <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Privacy Policy</Text>
            </View>


        </View>
    );
};
export default SignupScreen;

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
        marginBottom: 10,
        marginLeft: 10,
        color: '#051d5f'
    },
    navButton: {
        marginTop: 15
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
    }
});
