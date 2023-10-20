import React from 'react';

const CartProduct = ({product}) => {
    const {tittle} = product
    return (
        <div>
            hello {tittle}
        </div>
    );
};

export default CartProduct;