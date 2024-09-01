import { IProduct } from "../interfaces";
import { txtslicer } from "../utils/function";
import ImageComponent from "./ImageComponent";
import Button from "./ui/Button";
import CircleColor from "./ui/CircleColor";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  OpenEdit: () => void;
  idx:number
  setProductToEditIdx:(value : number)=>void;
}
const ProductCard = ({ product, setProductToEdit , OpenEdit ,idx, setProductToEditIdx }: IProps) => {
  const { title, description, image, price, colors, category } = product;
  const renderColorList = colors.map((colors) => (
    <CircleColor color={colors} key={colors} />
  ));
  const onEdit = () => {
    setProductToEdit(product);
    setProductToEditIdx(idx)
    OpenEdit();
  };
  return (
    <div className="border rounded-md p-2 flex flex-col max-w-sm md:max-w-lg mx-auto md:mx-0  ">
      <ImageComponent
        imageURL={image}
        alt={category.name}
        className="rounded-md h-52 w-full lg:object-cover "
      />
      <h3 className="font-bold pt-2 text-center pr-4">{title}</h3>
      <p>{txtslicer(description)}</p>

      <div className="flex space-x-1  my-1 items-center ">
        <div className="flex space-x-1 items-center flex-wrap ">
          {renderColorList}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span>{price}</span>

        <ImageComponent
          imageURL={category.image}
          alt={category.name}
          className="w-10 h-10 rounded-full object-contain mr-2"
        />
      </div>
      <div className="flex items-center justify-between space-x-3 my-2">
        <Button className="bg-indigo-600" onClick={onEdit}>
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
