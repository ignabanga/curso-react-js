import React from 'react';
import {Link} from 'react-router-dom'
import './Item.css';


const Item = ({producto}) => {
   
    return (
        <div className='cardDiv'>
        <div className="card border-primary mb-3 shadow" style={{ maxWidth: "20rem" }}>
            <div className="card-header">{producto.nombre}</div>
            <div className="card-body">
                <div className='overflow'>
                <img className="card-img-top" src={producto.imagen} />
                </div>
                <p className="card-text">Precio: ${producto.precio}</p>
                <p className="card-text">Marca: {producto.marca}</p>
            </div>
            <Link className="nav-link item-nav-link" to={"/item/"+producto.categoria+"/" + producto.id}><button className='btn btn-primary'>Ver Producto</button></Link>
        </div>
</div>
    
    );
}

export default Item;

