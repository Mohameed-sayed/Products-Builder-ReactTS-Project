export interface IProduct {
    id?: string | undefined;
    title: string;
    description: string;
    image: string;
    price: string;
    colors: string[];
    category: {
        name: string;
        image: string;
    }
}
export interface IFormInputList {

    id: string;
    name: "title" | "description" | "price" | "image";
    label: string;
    type: string;

}
export interface ICategory {
    id: string;
    image: string;
    name: string;
}