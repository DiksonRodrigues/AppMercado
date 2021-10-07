import React, { useContext } from 'react';
import { Text, ScrollView, Image,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import { useCart } from '../../context/cart';

import
{
Container,
Header,
HeaderText,
ButtonBack,
ButtonClose,
ContainerCart,
ViewFruits,
ViewFruit,
ViewImage,
ViewTextNameAndPrice,
FruitName,
FruitPrice,
ViewQuantity,
TextQuantity,
ViewCheckout,
ViewTotalValue,
TextTotal,
TextValue,
ViewBottonCheckout,
BottonCheckout,
TextBottonCheckout
} from './styles';

export default function Cart() {
    const navigation = useNavigation();
    const { cart, totalvalue } = useCart();

    return(
        <Container>
            
            <Header>
                <ButtonBack onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-backspace" size={30} color="#000"/>
                </ButtonBack>
                <HeaderText>Carrinho</HeaderText>
                <ButtonClose>
                    <Icon name="window-close" size={30} color="#000"/>
                </ButtonClose>
            </Header>

            <ContainerCart>
                
            <ViewFruits>
                <FlatList
                data={cart}
                renderItem={({item}) => {
                    console.log('item',item)
                    return(
                            <ViewFruit>
                            <ViewImage>
                                <Image source={{uri: item.params.img}} style={{width: 80, height: 80,}}/>
                            </ViewImage>
                            <ViewTextNameAndPrice>
                                <FruitName>{item.params.nome}</FruitName>
                                <FruitPrice>R$ {item.params.preco}</FruitPrice>
                            </ViewTextNameAndPrice>
                            <ViewQuantity>
                                <TextQuantity>1</TextQuantity>
                            </ViewQuantity>
                            </ViewFruit>
                    )
                }}
                keyExtractor={(item) => item.key}
                />
            </ViewFruits>

                <ViewCheckout>
                    <ViewTotalValue>
                        <TextTotal>Total</TextTotal>
                        <TextValue>R$ {totalvalue.toFixed(2)}</TextValue>
                    </ViewTotalValue>
                    <ViewBottonCheckout>
                        <BottonCheckout onPress={() => navigation.navigate('PDF')}>
                        <LinearGradient
                        start={{x: 0, y: 0}} 
                        end={{x: 1, y: 0}} 
                        colors={['#8ed361','#70c966','#5cc367']}
                        style={{width:'100%',height:'100%',borderRadius:17, alignItems:'center', justifyContent:'center'}}>
                            <TextBottonCheckout>Confirmar</TextBottonCheckout>
                        </LinearGradient>
                        </BottonCheckout>
                    </ViewBottonCheckout> 
                </ViewCheckout>

            </ContainerCart>
        </Container>
    )
}