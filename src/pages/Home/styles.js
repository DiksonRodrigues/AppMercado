import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;

    background: #fbfdff;
`;

export const ContainerText = styled.View`
    width: 100%;

    flex-direction: column;

    padding: 25px;
`;

export const TextWelcome = styled.Text`
    font-size: 18px;
    font-family: 'NotoSansDisplay-Bold';
    color: #BBBBBB;
`;

export const TextUserName = styled.Text`
    padding-top: 5px;

    font-size: 32px;
    font-family: 'NotoSansDisplay-ExtraBold';
    color: #303351;
`;
export const ViewSearch = styled.View`
    width: 100%;
    padding: 5px 20px;
`;

export const ContainerSearch = styled.View`
    width: 100%;
    background: #eeeeee;

    flex-direction: row;
    justify-content: flex-start;
    align-items: center;


    padding: 20px;
    border-radius: 25px;
    
`;


export const InputSearch = styled.TextInput`
    width: 80%;

    padding: 10px;
    font-size: 19px;
`;

export const HeaderFruitText = styled.Text`
    padding: 20px 10px 10px 20px;

    font-size: 28px;
    font-family: 'NotoSansDisplay-ExtraBold';
    color: #303351;
`;