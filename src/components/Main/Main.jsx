import React, { useState, useEffect } from 'react';

const Main = ({mainPromise}) => {
    const [data, setData] = useState([]);
    console.log(mainPromise);
    console.log(data);

    useEffect(() => {
        fetch("/data.json")
        .then(res => res.json())
        .then(data => setData(data));
    }, []);

    return (
        <div>
            Main: {data.length}
            <h2>Products: {data.length}</h2>
            {
                data.map(item =>(
                    <p key={item.id}>{item.name}</p>
                ))
            }
        </div>
    );
};

export default Main;