import React,{useState} from 'react';
import { Image, Text, ScrollView } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import { useCart } from '../../context/cart';

import
{
Container,
ViewHeader,
ViewButtons,
ViewBack,
ViewCart,
ViewImage,
ContainerImage,
ViewDescription,
FruitName,
ViewButtonsDescription,
ButtonRemove,
ButtonAdd,
FruitQuantity,
TitleDescription,
TextDescription,
BottomTab,
PriceItem,
TextPrice,
TextValue,
ViewBottomCart,
BottomCart,
TextBottomCart,
ViewQuantityCart,
TextQuantityCart
} from './styles';

export default function About({route}) {
    const navigation = useNavigation();
    const [amount,setAmount] = useState(0);

    const { addfruit, cart} = useCart()

    const addquantity = () => {
        if(amount == 10){
            alert('Limite maximo !')
        } else {
            let value = amount;

            setAmount(value +1);
        };
    };

    const removequantity = () => {
        if(amount == 0){
            alert('Você não pode diminuir o valor, pois não nenhum valor foi adicionado.')
        } else {
            let value = amount;

            setAmount(value -1);
        };
    };

    return(
        <Container>
            <ScrollView>

                <ViewHeader>
                    <ViewButtons>
                        <ViewBack onPress={() => navigation.goBack()}>
                            <Icon name="arrow-left" color="#FF8516" size={30}/>
                        </ViewBack>
                        <ViewCart onPress={() => navigation.navigate('Cart')}>
                            <Icon name="cart" color="#FF8516" size={30} style={{position: 'absolute', zIndex: 100, paddingTop: 15}}/>
                            <ViewQuantityCart>
                                <TextQuantityCart>{Object.keys(cart).length}</TextQuantityCart>
                            </ViewQuantityCart>
                        </ViewCart>
                    </ViewButtons>
                    <ContainerImage>
                        <ViewImage>
                            <Image source={{uri: route.params.img}} style={{width: '100%', height: '100%', }}/>
                        </ViewImage>
                    </ContainerImage>
                </ViewHeader>

                <ViewDescription>
                    <FruitName>{route.params.nome}</FruitName>
                    <ViewButtonsDescription>
                        <ButtonRemove onPress={() => removequantity()}>
                        <LinearGradient
                        start={{x: 0, y: 0}} 
                        end={{x: 1, y: 0}} 
                        colors={['#8ed361','#70c966','#5cc367']}
                        style={{width:'100%',height:'100%',borderRadius:17, alignItems:'center', justifyContent:'center'}}>
                         <Icon name="window-minimize" color="#fff" size={22}/>    
                        </LinearGradient>
                        </ButtonRemove>

                        <FruitQuantity>{amount}</FruitQuantity>

                        <ButtonAdd onPress={() => addquantity()}>
                        <LinearGradient
                        start={{x: 0, y: 0}} 
                        end={{x: 1, y: 0}} 
                        colors={['#8ed361','#70c966','#5cc367']}
                        style={{width:'100%',height:'100%',borderRadius:17, alignItems:'center', justifyContent:'center'}}>
                         <Icon name="plus" color="#fff" size={28}/>    
                        </LinearGradient>
                        </ButtonAdd>        
                    </ViewButtonsDescription>
                    <TitleDescription>Descrição</TitleDescription>
                    <TextDescription>{route.params.descricao}</TextDescription>
                </ViewDescription>
            </ScrollView>

            <BottomTab>
                <PriceItem>
                    <TextPrice>Preço</TextPrice>
                    <TextValue>R$ {route.params.preco}</TextValue>
                </PriceItem>
                <ViewBottomCart>
                    <BottomCart onPress={() => addfruit(route)}>
                    <LinearGradient
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 0}} 
                    colors={['#8ed361','#70c966','#5cc367']}
                    style={{width:'100%',height:'100%',borderRadius:17, alignItems:'center', justifyContent:'center'}}>
                        <TextBottomCart>Adicionar </TextBottomCart>
                    </LinearGradient>
                    </BottomCart>
                </ViewBottomCart>
            </BottomTab>
        </Container>
    )
}