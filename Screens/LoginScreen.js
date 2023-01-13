import { React, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import FormInput from "../components/FormInput";
import SocialButton from "../components/SocialButton";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import FormButton from "../components/FormButton";



const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/food-text-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Food Ordering App</Text>
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
            <FormButton
                buttonTitle="Sign In"
                onPress={() => alert('Sign In Clicked!')}
            />


            <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                <Text style={styles.navButtonText}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
            </TouchableOpacity>


        </View>
    );
};
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    logo: {
        height: 200,
        width: 400,
        resizeMode: 'cover',
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
    forgotButton: {
        marginVertical: 35
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
    }
});
