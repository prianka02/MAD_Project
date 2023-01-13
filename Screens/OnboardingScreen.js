import React from "react";
import { Text, Button, Image, TouchableOpacity, View } from "react-native";

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={{
                width: 5,
                height: 5,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}
const Skip = ({ ...props }) => (
    <Button title="Skip"
        color="#A4695D"
        {...props}

    />
);
const Next = ({ ...props }) => (
    <Button title="Next"
        color="#A4695D"
        {...props}
    />
);
const Done = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 20 }}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}

            pages={[
                {
                    backgroundColor: '#A96556',
                    image: <Image source={require('../assets/onboarding-img1.png')} />,
                    title: 'Easily Search Foods',
                    subtitle: 'Try it!',
                },
                {
                    backgroundColor: '#A96556',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Order Your Desired Food',
                    subtitle: 'Grab it!',
                },
                {
                    backgroundColor: '#A96556',
                    image: <Image source={require('../assets/onboarding-img3.png')} />,
                    title: 'Get Delivery Fast',
                    subtitle: 'Wooooooo!',
                }
            ]}
        />
    );
}

export default OnboardingScreen;