import React,{ useContext, useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';
import LinearGradient from 'react-native-linear-gradient';

import
{
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

export default function Register(){
    const navigation = useNavigation();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const { signUp } = useContext(AuthContext);

    function handleSignUp() {
        signUp(email, password,name);
    };

    return(
        <Container>
            <ScrollView>
            <ContainerText>
                <TextOne>Create new account</TextOne>
                <TextTwo>Please fill in the form to cotinue</TextTwo>
            </ContainerText>
            <Footer>
                <InputView>
                        <Input value={name} onChangeText={setName} placeholderTextColor="#BBBBBB" placeholder="Full Name" />
                </InputView>
                <InputView>
                        <Input value={email} onChangeText={setEmail} placeholderTextColor="#BBBBBB" placeholder="Email adress" />
                </InputView>
                <InputView>
                        <Input value={password} onChangeText={setPassword} placeholderTextColor="#BBBBBB" placeholder="Password" />
                </InputView>
            </Footer>
            <Buttons>
                <ButtonLogin onPress={() => handleSignUp()}>
                    <LinearGradient
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 0}} 
                    colors={['#8ed361','#70c966','#5cc367']}
                    style={{width:'100%',height:'100%',borderRadius:17, alignItems:'center', justifyContent:'center'}}>
                    <ButtonLoginText>Sign Up</ButtonLoginText>
                    </LinearGradient>
                </ButtonLogin>
                <ButtonRegister onPress={() => navigation.goBack()}>
                    <TextRegister>Have an Account?</TextRegister>
                    <TextRegisterButton> Sign In</TextRegisterButton>
                </ButtonRegister>
            </Buttons>
            </ScrollView>
        </Container>
    )
};