import { createContext, useState, useContext} from "react";

type CartContextType = {
    cartTotalQty:number;
}


export const CartContext = createContext<CartContextType | null > (null);

interface Props {
    [propName:string]:any;

}

export const CartContextProvider = (props:Props) => { //Asi se accede a los values del componente desde cualquier lado

    const [cartTotalQty, setCartTotalQty] = useState(0);
    
    const value = {
        cartTotalQty: 0,
    }

    return <CartContext.Provider value={value} {...props}/>
}

export const useCart = () => {  
    const context = useContext(CartContext);
    
    if (context === null) {
        throw new Error("useCart debe estar dentro del proveedor CartContext");
    }
    
    return context;

};