import React from 'react';
import Header from '../Header.jsx'
import IncreaseCredit from "./IncreaseCredit.jsx";
import DecreaseCredit from "./DecreaseCredit.jsx";
import CreditProvider from "./CreditContextProvider.jsx";

export default function (){
    return(
        <>
            <Header />
            <IncreaseCredit />
            <DecreaseCredit />
        </>
    )
}