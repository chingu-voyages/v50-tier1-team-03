import { useState } from 'react'

export const useCart = () => {
    const [cart, setCart] = useState([])
    return [cart, setCart]
}