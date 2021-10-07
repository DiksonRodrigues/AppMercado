import React,{useContext, useState} from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';
import LinearGradient from 'react-native-linear-gradient';



import {
Container,
ContainerText,
TextOne,
TextTwo,
Footer,
InputView,
Input,
Buttons,
ButtonLogin,
ButtonLoginText,
ButtonRegister,
TextRegister,
TextRegisterButton
} from './styles';

export default function Login() {
    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const { signIn } = useContext(AuthContext);

    function handlelogin() {
        signIn(email,password)
    };

    return (
        <Container>
            <ScrollView>
            <ContainerText>
                <TextOne>Welcome Back!</TextOne>
                <TextTwo>Please sign in to your account</TextTwo>
            </ContainerText>
            <Footer>
                <InputView>
                    <Input value={email} onChangeText={setEmail} placeholderTextColor="#BBBBBB" placeholder="Email" />
                </InputView>
                <InputView>
                    <Input value={password} onChangeText={setPassword} placeholderTextColor="#BBBBBB" placeholder="Password" />
                </InputView>
            </Footer>
            <Buttons>
                <ButtonLogin onPress={() => handlelogin()}>
                <LinearGradient
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}} 
                colors={['#8ed361','#70c966','#5cc367']}
                style={{width:'100%',height:'100%',borderRadius:17, alignItems:'center', justifyContent:'center'}}>
                    <ButtonLoginText>Sign In</ButtonLoginText>
                </LinearGradient>
                </ButtonLogin>
                <ButtonRegister onPress={() => navigation.navigate('Register')}>
                    <TextRegister>Don't have an Account?</TextRegister>
                    <TextRegisterButton> Sign Up</TextRegisterButton>
                </ButtonRegister>
            </Buttons>
            </ScrollView>
        </Container>
    );
}