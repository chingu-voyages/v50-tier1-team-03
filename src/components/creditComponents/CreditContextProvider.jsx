import React, { createContext, useState, useEffect } from 'react';

export const CreditContext = createContext();

export const CreditProvider = ({ children }) => {
    if (localStorage.getItem('credit') !== null) {
        console.log('Credit value:', localStorage.getItem('credit'));
    } else {
        console.log('No credit value found in localStorage');
    }
    function GetCreditFromLocal(){
        const storedCredit = localStorage.getItem('credit');
        return storedCredit ? parseInt(storedCredit, 10) : 0;
    }

    const [credit, setCredit] = useState(0)
    setCredit(GetCreditFromLocal)
    console.log(credit)

    useEffect(() => {
        localStorage.setItem('credit', credit.toString());
    }, [credit]);

    return (
        <CreditContext.Provider value={{ credit, setCredit }}>
            {children}
        </CreditContext.Provider>
    );
};

export default CreditProvider;