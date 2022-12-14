import React from 'react';
import './CardWidjet.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Context/CartContext';

const CardWidjet = () => {
    const { getTotalProd} = useCartContext();



    return (
        < >
            <Link to={'/cart'}>
                <span className="span-carrito">
                    {getTotalProd()}
                </span>
                <img className='cart' src="https://firebasestorage.googleapis.com/v0/b/proyectofinalcoder-b92b0.appspot.com/o/carrito.png?alt=media&token=87b4563a-3a0f-49fa-9843-e84d3d0df30e" alt='Cart'/>
            </Link>
        </>
    );
}

export default CardWidjet;

