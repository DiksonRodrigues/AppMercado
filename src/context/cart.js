import React,{ useState , createContext , useContext , useEffect } from 'react';

const CartContext = createContext();

export default function CartProvider({children}) {

    const [cart, setCart] = useState([]);
    const [totalvalue, setTotalValue] = useState();

    useEffect(() => {
        console.log(cart)
        let value = 0;
        cart.map((item) => {
            value = value + Number(item.params.preco);
        });

        setTotalValue(value)
    },[cart]);

    function addfruit(item) {
        const newCart = cart;
        newCart.push(item);

        alert('Nova fruta adicionada.');

        setCart([...newCart]);
    };

    const contextcart = {
        addfruit,
        cart,
        totalvalue,
    };

    return (
        <CartContext.Provider value={contextcart}>
            {children}
        </CartContext.Provider>
    );

};

export function useCart() {
    const context = useContext(CartContext);

    const {
        addfruit,
        cart,
        totalvalue
    } = context

    return {
        addfruit,
        cart,
        totalvalue
    }
};