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