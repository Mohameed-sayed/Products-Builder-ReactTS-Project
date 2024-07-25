import { IProduct } from "../interfaces";
import { txtslicer } from "../utils/function";
import ImageComponent from "./ImageComponent";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
  return (
    <div className="border rounded-md p-2 flex flex-col max-w-sm md:max-w-lg mx-auto md:mx-0 ">
      <ImageComponent
        imageURL={product.image}
        alt={product.category.name}
        className="rounded-md h-52 w-full lg:object-cover "
      />
      <h3 className="font-bold pt-2 text-center pr-4">{product.title}</h3>
      <p>{txtslicer(product.description)}</p>

      <div className="flex space-x-1  my-1 items-center ">
        <span className="h-5 w-5 bg-red-600 rounded-full cursor-pointer" />
        <span className="h-5 w-5 bg-yellow-600 rounded-full cursor-pointer" />
        <span className="h-5 w-5 bg-indigo-600 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span>$500.000</span>

        <ImageComponent
          imageURL={product.category.image}
          alt={product.category.name}
          className="w-10 h-10 rounded-full object-contain mr-2"
        />
      </div>
      <div className="flex items-center justify-between space-x-3 my-2">
        <Button
          className="bg-indigo-600"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Edit
        </Button>
        <Button className="bg-red-700 " width="w-full">
          Delete
        </Button>
    
      </div>
    </div>
  );
};

export default ProductCard;
