import { useState } from 'react'

export const useCart = () => {
    const [cart, setCart] = useState([
        {
            amount: 3,
        },
    ])
    return [cart, setCart]
}