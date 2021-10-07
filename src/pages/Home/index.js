import React,{useState,useContext} from 'react';
import { Image, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../context/auth';

import
{
Container,
ContainerText,
TextWelcome,
TextUserName,
ContainerSearch,
ViewSearch,
InputSearch,
HeaderFruitText
} from './styles';
import List from '../../components/List';

export default function Home() {
    const { user } = useContext(AuthContext);

    const [search,setSearch] = useState('');

    const [frutas,setFrutas] = useState([
        {id: 1, nome: 'Morango', tipo: 'Fruta', preco: '10.99', img: 'https://cdn.lojazmart.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/m/o/morango_zmart.png', descricao: 'O morango é uma fruta carnosa e suculenta de coloração vermelha com sabor agridoce que chama muito a atenção, porém é um fruto muito delicado que facilmente sofre com a ação de pesticidas. Por seu cultivo ser rasteiro, é necessário uma boa limpeza antes do consumo.'},
        {id: 2, nome: 'Pêssego', tipo: 'Fruta', preco: '6.99', img: 'https://institucional.hortifruti.com.br/wp-content/themes/hortifruti-2019//inc/timthumb.php?w=229&h=182&zc=2&a=c&q=75&src=https://institucional.hortifruti.com.br/wp-content/uploads/2014/05/PRODUTO_pessego.png', descricao: 'O pêssego é uma deliciosa fruta comestível, de delicioso aroma e sabor adocicado. Sua origem é chinesa e é uma fruta rica em vitamina C e pró-vitamina A. A casca do pêssego é fina, aveludada e de cor alaranjada. Sua carne é amarelada e muito usada para fazer doces, bolos, geleias, compotas e sucos.'},
        {id: 3, nome: 'Maçã', tipo: 'Fruta', preco: '4.99', img: 'https://superprix.vteximg.com.br/arquivos/ids/175190-600-600/Maca-Gala-Nacional--1-unidade-aprox.-200g-.png?v=636294186498800000', descricao: 'A maçã é o fruto da macieira, árvore da família Rosaceae, com tronco de casca parda, lisa e copa arredondada que chega a 10 m de altura. A fruta mais cultivada do mundo é originária da Ásia e da Europa. ... A maçã é rica em fibras, vitaminas B1, B2 e sais minerais (fósforo e ferro).'},
        {id: 4, nome: 'Pêra', tipo: 'Fruta', preco: '5.99', img: 'http://irisboafruta.com.br/site/media/fruta-_0003_Pe%CC%82ra-2.png', descricao: 'Pêra é o fruto da pereira, árvore originária da Europa e da Ásia. A fruta é rica em magnésio, fósforo, selênio, fibras, vitaminas A, C e do complexo B. É muito apreciada por suas propriedades nutritivas e pelo sabor delicado. ... A pêra é utilizada no preparo de sobremesas, tortas, compotas, cremes, geléias, sorvetes.'},
        {id: 5, nome: 'Banana', tipo: 'Fruta', preco: '3.99', img: 'https://superprix.vteximg.com.br/arquivos/ids/178630-600-600/Banana-Prata.png?v=636861955826400000', descricao: 'As bananas possuem um formato alongado, uma coloração amarela ou vermelha e um sabor doce. ... A banana contém grandes quantidades de açúcares: sacarose, frutose e glicose. Além disso, a fruta é rica em fibras, vitaminas A, B1, B2 e C, cálcio, fósforo e ferro.'},
        {id: 6, nome: 'Abacaxi', tipo: 'Fruta', preco: '11.99', img: 'https://cdn.sistemawbuy.com.br/arquivos/559d80ebce3f8617685130317c7d7d3a/produtos/DE9YE8/abacaxi-jpg-1710.png', descricao: 'O abacaxi é um fruto revestido por uma casca áspera, formada pela união das brácteas e sépalas das flores da planta. ... A “coroa” do abacaxi, o que lhe confere o título de “rei dos frutos” é, na verdade, um tufo de folhas resultante do tecido meristemático apical que a planta apresenta.'},
        {id: 7, nome: 'Manga', tipo: 'Fruta', preco: '6.30', img: 'https://polpasefrutas.com.br/arquivos/imagens/produtos/mesa/manga.png', descricao: 'A manga é a fruta da mangueira, tradicionalmente chamada de “pé de manga”. A fruta é do tipo drupa carnosa, pois tem polpa suculenta e um caroço no interior. A casca é fina e varia entre tons amarelos, verdes e avermelhados. A mangueira (Mangifera indica) é uma árvore de grande porte que pode atingir 30 metros.'},
    ])

    function updateList(searchValue) {

        setSearch(searchValue);
    
        if (searchValue) {
            const currentfruits = [...frutas];
            
            currentfruits.sort((itemA, itemB) => {
                searchValue = searchValue.toLowerCase();
                let a = itemA.nome.toLowerCase();
                let b = itemB.nome.toLowerCase();
    
                if (a.includes(searchValue) && b.includes(searchValue)) {
                    return a.indexOf(searchValue) - b.indexOf(searchValue);
                } else if (a.includes(searchValue))
                    return -1;
                else if (b.includes(searchValue))
                    return 1;
                else
                    return 0;
            });
    
            setFrutas(currentfruits);
        }
     }

    return(
        <Container>
            <ScrollView>
                <ContainerText>
                    <TextWelcome>Seja bem vindo(a)</TextWelcome>
                    <TextUserName>{user.nome}</TextUserName>
                </ContainerText>
                <ViewSearch>
                    <ContainerSearch>
                        <Icon name="magnify" size={28} color="#000"/>
                        <InputSearch onChangeText={(e) => updateList(e)} placeholder="Procurar" placeholderTextColor="#BBBBBB"/>
                    </ContainerSearch>
                </ViewSearch>
                <HeaderFruitText>Frutas :</HeaderFruitText>
                <FlatList
                data={frutas}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={ item => item.id }
                renderItem={ ({item}) => <List data={item}/>}
                />
            </ScrollView>
        </Container>
    )
}