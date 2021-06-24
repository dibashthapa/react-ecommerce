interface productState {
    id: number;
    price: string;
    src: string;
    name: string;
    count: number;
}

interface defaultState {
    products: Array<productState>;
}

interface productInterface {
    productDetails: productState;
}
