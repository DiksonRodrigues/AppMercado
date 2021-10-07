import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;

    background: #fbfdff;
`;

export const Header = styled.View`
    width: 100%;
    height: 125px;

    padding: 20px;

    flex-direction: row;

    justify-content: space-between;
    align-items: center;

`;

export const HeaderText = styled.Text`
    font-size: 26px;
    font-family: 'NotoSansDisplay-Bold';
    color: #303351;   
`;

export const ButtonBack = styled.TouchableOpacity`

`;

export const ButtonClose = styled.TouchableOpacity`
    
`;

export const ContainerCart = styled.View`
    flex: 1;

    background: #faf0e8;


    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`;

export const ViewFruits = styled.View`
    width: 100%;
    height: 350px;

    padding: 10px;

    flex-direction: column;

`;

export const ViewFruit = styled.TouchableOpacity`
    background: #fff;
    width: 100%;
    height: 100px;

    border-radius: 10px;

    padding: 5px;
    margin-top: 10px;

    flex-direction: row;
`;

export const ViewImage = styled.View`
    width: 33%;
    height: 100%;

    justify-content: center;
    align-items: center;
`;

export const ViewTextNameAndPrice = styled.View`
    width: 33%;
    height: 100%;

    flex-direction: column;
`;

export const FruitName = styled.Text`
    font-size: 22px;
    font-family: 'NotoSansDisplay-Bold';
    color: #303351;

    padding: 5px 0px 0px 10px;
`;

export const FruitPrice = styled.Text`
    font-size: 20px;
    font-family: 'NotoSansDisplay-ExtraBold';
    color: #369B2B;

    padding: 10px 0px 0px 10px;
`;

export const ViewQuantity = styled.View`
    width: 33%;
    height: 100%;

    justify-content: center;
    align-items: center;
`;

export const TextQuantity = styled.Text`

`;

export const ViewCheckout = styled.View`
    width: 100%;
    height: 100px;
`;

export const ViewTotalValue = styled.View`
    width: 100%;
    height: 70%;

    flex-direction: row;

    align-items: flex-start;
    justify-content: space-between;

`;

export const TextValue = styled.Text`
    color: #369B2B;
    font-size: 22px;
    font-family: 'NotoSansDisplay-ExtraBold';

    padding: 0px 20px 0px 20px;
    
`;

export const TextTotal = styled.Text`
    color: #BBBBBB;
    font-size: 22px;
    font-family: 'NotoSansDisplay-Bold';

    padding: 0px 20px 0px 20px;
`;

export const ViewBottonCheckout = styled.View`
    width: 100%;
    height: 30%;

    padding: 20px;
`;

export const BottonCheckout = styled.TouchableOpacity`
    width: 100%;
    height: 65px;

    justify-content: center;
    align-items: center;
`;

export const TextBottonCheckout = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-family: 'NotoSansDisplay-Bold';

    padding: 0px 20px 0px 20px;
`;