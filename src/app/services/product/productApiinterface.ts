export interface ProductsApiResponse {
    products: Product[];
}
export interface Product {
    // id: number;
    id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string | null;
    sku: string;
    weight: number;
    dimensions: object;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: 'In Stock' | 'Out of Stock' | string;
    reviews: [];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: object;
    images: string[];
    thumbnail: string;
}

