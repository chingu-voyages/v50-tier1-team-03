import React, { useContext } from 'react';
import {CreditContext, CreditProvider} from './CreditContextProvider.jsx';
import IncreaseCredit from "./IncreaseCredit.jsx"; // 确保路径正确

const DecreaseCredit = () => {
    const { credit, setCredit } = useContext(CreditContext); // 使用 useContext 访问上下文值

    const handleDecrease = () => {
        setCredit(credit - 1); // 点击按钮时更新状态
    };

    return (
        <>
            <div>
                <p>Current Credit{credit}</p>
                <button onClick={handleDecrease}>Decrease Credit</button>
            </div>
        </>
    )
};

export default DecreaseCredit;
