import React, { createContext, useContext, useState} from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [productos, setProductos] = useState([]);
    
   

     /* FUNCION PARA AGREGAR PRODUCTOS DESDE EL ITEM DETAIL */
    const addProduct = (producto) => {
        const foundProducto = productos.find((prod) => prod.id === producto.id)
        if (foundProducto) {
            if ((producto.count + foundProducto.count) <= producto.stock) {
                foundProducto.count = foundProducto.count + producto.count;
                setProductos([...productos])
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'La cantidad de productos elegidos supera el stock',
                    icon: 'error',
                    confirmButtonText: 'Entendido'
                  })
            }
        } else {
            const auxCarrito = productos;
            auxCarrito.push(producto)
            setProductos([...auxCarrito])
        }
    }

    /* FUNCION PARA AGREGAR PRODUCTOS DENTRO DEL CARRITO */
    const addProd = (id, stock, count) => {
        const foundProducto = productos.find((producto) => producto.id === id)
        if (foundProducto) {
            if (count < stock) {
                foundProducto.count++;
                setProductos([...productos])
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'No hay mas stock disponible por el momento',
                    icon: 'error',
                    confirmButtonText: 'Entendido'
                  })
            }
        }
    }

    const restProd = (id, count) => {
        const foundProducto = productos.find((producto) => producto.id === id)
        if (foundProducto) {
            if (count > 1) {
                foundProducto.count--;
                setProductos([...productos])
            } else {
                deleteProd(id)
                if (productos.lenght == "0") {
                }
            }
        }
    }

    const deleteProd = (id) => {
        const auxCarrito = productos.filter(prod => prod.id !== id)
        setProductos([...auxCarrito])
    }

    const getTotalPrice = () => {
        const total = productos.reduce((counter, item) => counter + item.count * item.precio, 0);
        return total;
    }

    const getTotalProd = () => {
        const itemsTot = productos.reduce((counter, item) => counter + item.count, 0);
        return itemsTot;
    }

    const clearCart = () =>{
        setProductos([]);
    }


    return (
        <CartContext.Provider value={{ productos, addProduct, addProd, deleteProd, restProd, getTotalPrice, getTotalProd,clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;