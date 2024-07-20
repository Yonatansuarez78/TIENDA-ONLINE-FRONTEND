// OrderContext.js
import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const useOrder = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error("useOrder must be used within an OrderProvider");
    }
    return context;
};

export const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState({
        id_pedido: null,
        id_usuario: null,
        nombre_usuario: '',
        correo_electronico: '',
        productos: [],
        direccion: { pais: '', ciudad: '', direccion: '' },
        metodo_pago: ''
    });

    return (
        <OrderContext.Provider value={{ order, setOrder }}>
            {children}
        </OrderContext.Provider>
    );
};
