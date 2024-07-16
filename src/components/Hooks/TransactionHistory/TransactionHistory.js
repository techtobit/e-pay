import { useEffect, useState } from 'react';

const TransactionHistory = () => {
  const [myTransactionHistory, setMyTransactionHistory] = useState([]);
  useEffect(() => {
    fetch('https://poyshapay-server-mongoose-ashraf.vercel.app/addMoneyTransactions')
      .then(res => res.json())
      .then(data => setMyTransactionHistory(data))
  }, [myTransactionHistory])


  return [myTransactionHistory]
};

export default TransactionHistory;