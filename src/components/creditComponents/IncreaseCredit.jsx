import React, { useContext } from 'react'; // 确保引入 useContext
import {CreditContext, CreditProvider} from './CreditContextProvider.jsx'; // 确保路径正确

const IncreaseCredit = () => {
    const { credit, setCredit } = useContext(CreditContext); // 使用 useContext 来访问上下文值

    const handleIncrease = () => {
        setCredit(credit + 10); // 点击按钮时增加信用值
    };

    return (
            <div>
                <p>Current Credit {credit}</p>
                <button onClick={handleIncrease}>Increase credit</button>
            </div>
    )};

export default IncreaseCredit;
