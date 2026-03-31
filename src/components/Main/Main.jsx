import React, { use } from 'react';

const Main = ({mainPromise}) => {
    console.log(mainPromise);
    const data = use(mainPromise);
    console.log(data);

    return (
        <div>
            Main: {data.length}
        </div>
    );
};

export default Main;