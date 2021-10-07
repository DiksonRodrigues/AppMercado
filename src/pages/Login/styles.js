import styled from 'styled-components/native';



export const Container = styled.View`
    flex: 1;

    background: #FFF;

`;

export const ContainerText = styled.View`
    width: 100%;

    align-items: center;
    flex-direction: column;
`;

export const TextOne = styled.Text`
    color: #2A2C13;

    font-family: 'NotoSansDisplay-ExtraBold';
    font-size: 36px;

    padding-top: 75px;
`;

export const TextTwo = styled.Text`
    color: #BBBBBB;
    
    font-family: 'NotoSansDisplay-Bold';
    font-size: 15px;
    padding-top: 10px;
`;

export const Footer = styled.View`
    flex: 1;
    margin-top: 75px;

    padding: 25px;
`;

export const InputView = styled.View`
    width: 100%;

    border: 1px solid #E0E0E0;

    border-radius: 20px;

    padding: 16px;
    margin-bottom: 15px;
`;

export const Input = styled.TextInput`
    width: 100%;

    color: #000;
    font-size: 17px;
`;

export const Buttons = styled.View`
    flex: 1;

    padding: 25px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    width: 100%;
    height: 90px;

    justify-content: center;
    align-items: center;
`;

export const ButtonLoginText = styled.Text`
    color: #fff;

    font-size: 20px;
    font-family: 'NotoSansDisplay-Bold';
`;

export const ButtonRegister = styled.TouchableOpacity`
    flex: 1;

    padding-top: 21px;

    flex-direction: row;
    justify-content: center;
`;

export const TextRegister = styled.Text`
    color: #BBBBBB;
    font-size: 15px;
`;

export const TextRegisterButton = styled.Text`
    color: #369B2B;
    font-size: 15px;
`;
