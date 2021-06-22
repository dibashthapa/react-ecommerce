import { icons } from '../types';
export interface IconProps {
    color: string;
    width: string;
    height: string;
}
interface subItemProps {
    id: number;
    slug: string;
    title?: string;
}
export interface Category {
    title: string;
    slug: string;
    icon: icons;
    children: [subItemProps];
}

export interface Product {
    id: number;
    title: string;
    weight: string;
    unit: string;
    categories: [Category];
    author: string;
    gallery: [Gallery];
    description: string;
    price: number;
    category: string;
    inStock?: number;
    image: string;
    quantity: number;
    salePrice: number;
}

export interface Gallery {
    url: string;
}
