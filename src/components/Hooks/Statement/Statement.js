import { useEffect } from "react";
import { useState } from "react";

const Statement = () => {
    const [allStatement, setAllStatement] = useState([]);

    useEffect(() => {
        const url = `https://poyshapay-server-mongoose-ashraf.vercel.app/transactionStatement`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                console.log(count);
                const perTransaction = Math.ceil(count / 2);
                setAllStatement(perTransaction);
            })
    }, []);

    return [allStatement];
}

export default Statement;