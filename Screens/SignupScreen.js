import { React, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { firebase } from '../config';


const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    signUpUser = async (email, password, name) => {
        await firebase.auth().createUserWithEmailAndPassword(email, password, name).then(() => {
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp: false,
                url: 'https://test-8ef61.firebaseapp.com',
            })
                .then(() => {
                    alert('Verification email sent')
                }).catch(error => {
                    alert(error)
                })
                .then(() => {
                    firebase.firestore().collection('users')
                        .doc(firebase.auth().currentUser.uid)
                        .set({
                            name, email, password
                        })
                })
                .catch((error) => {
                    alert(error)
                })
        })
            .catch((error) => {
                alert(error)
            })
    }

    return (
        <View style={styles.container}>

            <Text style={styles.text}>Create an account</Text>
            <FormInput
                labelValue={name}
                onChangeText={(userName) => setName(userName)}
                placeholderText="User Name"
                iconType="user"
                autoCapitalize="none"
                autoCorrect={false} />
            <FormInput
                labelValue={email}
                onChangeText={(email) => setEmail(email)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false} />
            <FormInput
                labelValue={password}
                onChangeText={(password) => setPassword(password)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true} />


            <FormButton
                buttonTitle="Sign Up"
                onPress={() => { signUpUser(email, password, name) }}
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
