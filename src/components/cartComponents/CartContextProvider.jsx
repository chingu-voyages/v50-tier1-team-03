import { createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react'

const cartContext = createContext({
    cartState: { items: [] },
    setCartState: () => {}
});


export function cartContextProvider({c}) {
    const [userState, setUserState] = useState(null);

    return (
        <cartContext.Provider value={{ userState, setUserState }}>
            {c}
        </cartContext.Provider>
    );
}

export function useCartContext() {
    return useContext(cartContext);
}