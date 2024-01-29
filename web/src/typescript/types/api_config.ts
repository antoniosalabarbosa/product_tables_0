type get_product = "/api/Products/getProducts/:id";
type get_all_products = "/api/Products/getProducts";
type post_product = "/api/Products/postProduct";
type put_product = "/api/Products/putProduct/:id";
type delete_product = "/api/Products/deleteProduct/:id";

export type RoutesTypes = (
    get_product | 
    get_all_products | 
    post_product | 
    put_product | 
    delete_product
);