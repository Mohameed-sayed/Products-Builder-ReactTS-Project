export const productValidation = (product: {
    title: string;
    description: string;
    image: string;
    price: string;
}) => {
    const errors: {
        title: string;
        description: string;
        image: string;
        price: string;
    } = {
        title: "",
        description: "",
        image: "",
        price: ""
    }
    const ValidUrl = /^(ftp|http|https):\/\/[^\s/$.?#].[^\s]*$/.test(product.image);

    if (!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
        errors.title = "Product title must be between 10 and 80 character"
    }
    if (!product.description.trim() || product.description.length < 10 || product.description.length > 900) {
        errors.description = "Product description must be between 10 and 900 character"
    }
    if (!product.image.trim() || !ValidUrl) {
        errors.image = "Valid ImageUrl Required"
    }
    if (!product.price.trim() || isNaN(Number(product.price))) {
        errors.price = "Enter Valid Price"
    }
    return errors;
}
