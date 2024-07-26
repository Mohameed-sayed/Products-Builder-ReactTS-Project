export interface IProduct {
    id: string | undefined;
    title: string;
    description: string;
    image: string;
    prince: string;
    colors: string[];
    category: {
        name: string;
        image: string;
    }
}
export interface IFormInputList {

    id: string;
    name: string;
    label: string;
    type: string;

}