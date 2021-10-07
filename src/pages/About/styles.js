import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;

    background: #fbfdff;
`;

export const ViewHeader = styled.View`
    width: 100%;
    height: 350px;
    background: #faf0e8;

    flex-direction: column;
    
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    
    padding: 0px 20px 0px 20px;
`;
export const ViewButtons = styled.View`
    width: 100%;
    height: 100px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`;

export const ViewBack = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background: #FFF;

    justify-content: center;
    align-items: center;

    border-radius: 10px;
`;

export const ViewCart = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background: #FFF;

    justify-content: center;
    align-items: center;

    border-radius: 10px;
`;

export const ContainerImage = styled.View`
    width: 100%;
    height: 250px;

    justify-content: center;
    align-items: center;
`;

export const ViewImage = styled.View`
    width: 250px;
    height: 250px;

`;

export const ViewDescription = styled.View`
    width: 100%;

    flex-direction: column;

    padding: 20px 20px 0px 20px;
`;

export const FruitName = styled.Text`
    font-size: 32px;
    font-family: 'NotoSansDisplay-ExtraBold';
    color: #303351;

    padding-left: 10px;

`;

export const ViewButtonsDescription = styled.View`
    width: 100%;

    flex-direction: row;

    justify-content: flex-end;
    align-items: center;
`;

//${(props) => props.amount != 1 ? '#000' : '#fff'}

export const ButtonRemove = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    
    justify-content: center;
    align-items: center;
    `;

export const ButtonAdd = styled.TouchableOpacity`
    width: 50px;
    height: 50px;

    justify-content: center;
    align-items: center;
`;

export const FruitQuantity = styled.Text`
    font-size: 28px;
    font-family: 'NotoSansDisplay-ExtraBold';
    color: #303351;

    padding: 0px 15px 0px 15px;
`;

export const TitleDescription = styled.Text`
    font-size: 26px;
    font-family: 'NotoSansDisplay-Bold';
    color: #303351;

    padding: 30px 0px 0px 10px;
`;

export const TextDescription = styled.Text`
    font-size: 18px;
    font-family: 'NotoSansDisplay-Bold';
    color: #BBBBBB;

    padding: 10px 10px 100px 10px;
`;

export const BottomTab = styled.View`
    width: 100%;
    height: 100px;

    flex-direction: row;

    bottom: 0;

    position: absolute;
    background: #fff;
`;
export const PriceItem = styled.View`
    width: 50%;
    flex-direction: column;
`;

export const TextPrice = styled.Text`
    font-size: 18px;
    font-family: 'NotoSansDisplay-Bold';
    color: #BBBBBB;

    padding: 10px 0px 0px 30px;
`;

export const TextValue = styled.Text`
    font-size: 32px;
    font-family: 'NotoSansDisplay-ExtraBold';
    color: #369B2B;

    padding: 5px 0px 0px 30px ;
`;

export const ViewBottomCart = styled.View`
    width: 50%;
    height: 100px;

    justify-content: center;
    align-items: center;

    padding-top: 10px;
`;

export const BottomCart = styled.TouchableOpacity`
    width: 180px;
    height: 80px;

    justify-content: center;
    align-items: center;
`;

export const TextBottomCart = styled.Text`
    font-size: 20px;
    font-family: 'NotoSansDisplay-Bold';
    color: #FFF;
`;

export const ViewQuantityCart = styled.View`
    width: 30px;
    height: 30px;

    top: 0;
    border-radius: 100px;

    position: absolute;

    justify-content: center;
    align-items: center;
`;

export const TextQuantityCart = styled.Text`
    font-size: 18px;
    font-family: 'NotoSansDisplay-ExtraBold';
    color: #303351;
`;