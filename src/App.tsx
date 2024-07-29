import { ChangeEvent, useState } from "react";
import ProductCard from "./component/ProductCard";
import Modal from "./component/ui/Modal";
import { FormInputList, ProductList } from "./data";
import Button from "./component/ui/Button";
import Input from "./component/ui/Input";
import { IProduct } from "./interfaces";

const App = () => {
  //State
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    image: "",
    price: "",
    colors: [],
    category: {
      name: "",
      image: "",
    },
  });
  const [isOpen, setIsOpen] = useState(false);
  //Handler
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const ProductHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  //Render
  const renderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderFormInputList = FormInputList.map((input) => (
    <div className="flex flex-col">
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
        value={""}
        onChange={ProductHandler}
      />
    </div>
  ));
  return (
    <main className="container">
      <Button
        className="bg-indigo-600  hover:bg-indigo-800 justify-between"
        onClick={open}
      >
        Add
      </Button>

      <div className="gap-2 m-5 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={close} title="ADD NEW PRODUCT">
        <form className="space-y-3">
          {renderFormInputList}
          <div className="space-x-3 flex items-center">
            <Button className="bg-indigo-600 hover:bg-indigo-800">
              Submit
            </Button>
            <Button className="bg-gray-400 hover:bg-gray-600" onClick={close}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
