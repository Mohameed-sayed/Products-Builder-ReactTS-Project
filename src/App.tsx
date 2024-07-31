import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./component/ProductCard";
import Modal from "./component/ui/Modal";
import { FormInputList, ProductList } from "./data";
import Button from "./component/ui/Button";
import Input from "./component/ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./Validation";
import ErrorMessage from "./component/ui/ErrorMessage";

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
  //State
  const [product, setProduct] = useState<IProduct>(ProductDefault);
  const [errors, setError] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  //Handler
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
    console.log("Send To server");
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
  //Render
  const renderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
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
        className="bg-indigo-600 hover:bg-indigo-800 grid space-x-3 items-center mt-2 justify-between"
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
