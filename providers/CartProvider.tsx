'use client'

import { CartContextProvider } from "@/hooks/useCart";

interface CartProviderProps {
    children:React.ReactNode; //Diferentes componentes de la app
}


//Todo lo que se "wrapea con CartProvider" se "wrapea" con CartContextProvider
//De esta forma, pueden estos componentes acceder a los values del state (y usar el useCart hook)

const CartProvider:React.FC<CartProviderProps> = ({children}) => { 
    return (
        <CartContextProvider>{children}</CartContextProvider>
    );

}   

export default CartProvider;


