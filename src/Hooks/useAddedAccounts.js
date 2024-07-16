import React, { useEffect, useState } from 'react';

const useAddedAccounts = () => {
    const [addedAccount, setAddedAccounts] = useState([]);
    useEffect(() => {
        fetch('https://poyshapay-server-mongoose-ashraf.vercel.app/addedAccount')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAddedAccounts(data)
            });
    }, []);
    return [addedAccount, setAddedAccounts]
};

export default useAddedAccounts;
