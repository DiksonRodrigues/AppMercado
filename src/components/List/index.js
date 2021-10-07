import React from 'react';
import { ScrollView , Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import
{
ViewProducts,
Product,
Title,
Type,
Price,
Cart,
ViewImage
} from './styles';

export default function List({data}) {
    const navigation = useNavigation();

    return(
        <ViewProducts>
            <Product onPress={() => navigation.navigate('About',{ img: data.img, nome: data.nome, descricao: data.descricao, preco: data.preco})} activeOpacity={0.7}>
                <ViewImage>
                    <Image source={{uri: data.img}} style={{width: '100%', height: '100%'}}/>
                </ViewImage>
                <Title>{data.nome}</Title>
                <Type>{data.tipo}</Type>
                <Price>R$ {data.preco}</Price>
                <Cart>
                    <Icon name="shopping" size={28} color="#fff"/>
                </Cart>
            </Product>
        </ViewProducts>
    )
}