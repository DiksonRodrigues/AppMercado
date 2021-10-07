import styled from 'styled-components/native';

export const ViewProducts = styled.View`
    padding: 20px;
    
`;

export const Product = styled.TouchableOpacity`
    width: 250px;
    background: #fff;

    elevation: 10;

    border-radius: 15px;
    
    margin-bottom: 100px;

    flex-direction: column;
`;

export const Title = styled.Text`
    font-size: 26px;
    font-family: 'NotoSansDisplay-ExtraBold';
    color: #303351;

    padding-left: 10px;
`;

export const Type = styled.Text`
    color: #BBBBBB;
    font-size: 14px;
    font-family: 'NotoSansDisplay-Bold';

    padding: 5px 0px 0px 10px;
`;

export const Price = styled.Text`
    color: #59bd74;
    font-size: 22px;
    font-family: 'NotoSansDisplay-ExtraBold';

    padding: 5px 0px 0px 10px;

`;

export const Cart = styled.View`
    position: absolute;
    background :#FF8516;

    width: 60px;
    height: 60px;

    right: 0px;
    bottom: 20px;
    
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    
    align-items: center;
    justify-content: center;
`;

export const ViewImage = styled.View`
    width: 250px;
    height: 250px;

    justify-content: center;
    align-items: center;
`;
