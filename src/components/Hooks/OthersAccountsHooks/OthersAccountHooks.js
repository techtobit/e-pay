import React, { useEffect, useState } from 'react';

const OthersAccountHooks = () => {
  const [othersAccount, setOthersAccounts] = useState([]);
  useEffect(() => {
    fetch('https://poyshapay-server-mongoose-ashraf.vercel.app/addedAccount')
      .then(res => res.json())
      .then(data => setOthersAccounts(data))
  }, [])
  return [othersAccount]
};

export default OthersAccountHooks;