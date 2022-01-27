import uuid from 'react-native-uuid';

export const addToCart = (product, cart)=>{
    let cartItem = {
        id: uuid.v4(),
        product: product,
        cost: calculatePrice(product)
    }
    cart = [...cart, cartItem];
    return cart;
}

export const calculatePrice = (product)=>{
    if (product.offer_benefit_type === "Absolute") {
        return parseFloat(product.stock_record_price_retail) - parseFloat(product.offer_benefit_value)
    } else {
        let discount = parseFloat(product.stock_record_price_retail)*parseFloat(product.offer_benefit_value)
        return parseFloat(product.stock_record_price_retail) - discount
    }
}