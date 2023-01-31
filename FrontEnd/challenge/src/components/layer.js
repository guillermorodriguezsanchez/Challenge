export const transformProductFromApi = (productData) => {
    return {
        name: productData.name,
        price: productData.price,
        description: productData.description,
        amount: productData.amount
    };
};

export const transformProductFromLocalStorage = (productData) => {
    return {
        name: productData.name,
        price: productData.price,
        description: productData.description,
        amount: productData.amount
    };
};