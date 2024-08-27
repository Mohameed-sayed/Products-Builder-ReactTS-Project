import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./component/ProductCard";
import Modal from "./component/ui/Modal";
import { category, colors, FormInputList, ProductList } from "./data";
import Button from "./component/ui/Button";
import Input from "./component/ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./Validation";
import ErrorMessage from "./component/ui/ErrorMessage";
import CircleColor from "./component/ui/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./component/ui/Select";

const App = () => {
  const ProductDefault = {
    title: "",
    description: "",
    image: "",
    price: "",
    colors: [],
    category: {
      name: "",
      image: "",
    },
  };
  /* ---------------------------------- State --------------------------------- */
  const [product, setProduct] = useState<IProduct>(ProductDefault);
  const [products, setProducts] = useState<IProduct[]>(ProductList);
  const [tempColor, setTempcolor] = useState<string[]>([]);
  const [selectedcategory , setSelectedCategory] = useState(category[0])
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setError] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });
  console.log(tempColor);

  /* -------------------------------- Handler ------------------------------- */
  const OnSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, image, price } = product;
    const errors = productValidation({
      title,
      description,
      image,
      price,
    });
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setError(errors);
      return;
    }
    setProducts((prev) => [
      { ...product, id: uuid(), colors: tempColor, category:selectedcategory },
      ...prev,
    ]);
    setProduct(ProductDefault);
    setTempcolor([]);
    close();
  };

  const OnCancel = () => {
    setProduct(ProductDefault);
    close();
    console.log("Canceled");
  };
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const OnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setError({
      ...errors,
      [name]: "",
    });
  };
  /* --------------------------------Render -------------------------------- */

  const renderProductList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderColorList = colors.map((color) => (
    <CircleColor
      color={color}
      key={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempcolor((prev) => prev.filter((item) => item !== color));
          return;
        }

        setTempcolor((prev) => [...prev, color]);
      }}
    />
  ));
  const renderFormInputList = FormInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-2 text-sm font-medium text-gray-700"
      >
        {input.label}{" "}
      </label>
      <Input
        key={input.id}
        type="text"
        name={input.name}
        id={input.id}
        value={product[input.name]}
        onChange={OnChangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  return (
    <main className="container">
      <Button
        className="bg-indigo-600 hover:bg-indigo-800 grid space-x-3  mt-2 "
        width="w-fit"
        onClick={open}
      >
        Build Product
      </Button>

      <div className="gap-2 m-5 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={close} title="ADD NEW PRODUCT">
        <form className="space-y-3" onSubmit={OnSubmit}>
          {renderFormInputList}

          <Select selected={selectedcategory} setSelected={setSelectedCategory} />

          <div className="flex items-center flex-wrap space-x-1">
            {tempColor.map((color) => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                className="text-white rounded-md p-1 text-xs flex mb-1"
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex space-x-1 items-center flex-wrap ">
            {renderColorList}
          </div>

          <div className="space-x-3 flex items-center">
            <Button className="bg-indigo-600 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-600"
              onClick={OnCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};
export default App;
