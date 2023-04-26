import React, { useState } from 'react';

const MainContext = React.createContext();

const MainProvider = ({ children }) => {
    const [data, set_data] = useState([]);
    const [data2, set_data2] = useState([]);
    const [data3, set_data3] = useState([]);
    const [data4, set_data4] = useState([]);
    return (
        <MainContext.Provider value={{ data, set_data, data2, set_data2, data3, set_data3, data4, set_data4 }} >
            {children}
        </MainContext.Provider>
    );
}

export { MainContext, MainProvider };