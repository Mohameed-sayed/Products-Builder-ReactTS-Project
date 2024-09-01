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
import { TProductNames } from "./types";
import toast, { Toaster } from "react-hot-toast";

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
  const [selectedcategory, setSelectedCategory] = useState(category[0]);
  const [ProductToEdit, setProductToEdit] = useState<IProduct>(ProductDefault);
  const [ProductToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setOpenEdit] = useState(false);
  const [isOpenConfirmModal, setOpenConfirmModal] = useState(false);
  const [errors, setError] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });

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
      { ...product, id: uuid(), colors: tempColor, category: selectedcategory },
      ...prev,
    ]);
    setProduct(ProductDefault);
    setTempcolor([]);
    close();
  };
  const OnEditSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, image, price } = ProductToEdit;
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
    const updatedProduct = [...products];
    updatedProduct[ProductToEditIdx] = {
      ...ProductToEdit,
      colors: tempColor.concat(ProductToEdit.colors),
    };
    setProducts(updatedProduct);

    setProductToEdit(ProductDefault);
    setTempcolor([]);
    closeEdit();
  };

  const OnCancel = () => {
    setProduct(ProductToEdit);
    closeEdit();
  };
  const removeProductHandler = () => {
    const filterd = products.filter(
      (product) => product.id !== ProductToEdit.id
    );
    setProducts(filterd);
    closeConfirm();
    toast("Product has been deleted...", {
      icon: "✅", style:{
        backgroundColor:"black",
        color:"white"
      }
    });
  };
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const openEdit = () => {
    setOpenEdit(true);
  };
  const closeEdit = () => {
    setOpenEdit(false);
  };
  const OpenConfirm = () => {
    setOpenConfirmModal(true);
  };
  const closeConfirm = () => {
    setOpenConfirmModal(false);
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
  const OnChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProductToEdit({
      ...ProductToEdit,
      [name]: value,
    });
    setError({
      ...errors,
      [name]: "",
    });
  };

  /* --------------------------------Render -------------------------------- */

  const renderProductList = products.map((product, idx) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      OpenEdit={openEdit}
      idx={idx}
      setProductToEditIdx={setProductToEditIdx}
      OpenConfirm={OpenConfirm}
    />
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
        if (ProductToEdit.colors.includes(color)) {
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
  const renderProductEditWithError = (
    id: string,
    label: string,
    name: TProductNames
  ) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
        <Input
          id={id}
          type="text"
          name={name}
          value={ProductToEdit[name]}
          onChange={OnChangeEditHandler}
        />
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };

  return (
    <main className="container ">
      <Button
        className="flex items-center bg-indigo-600 hover:bg-indigo-800 mt-5 h-11  ml-10  mb-3 "
        onClick={open}
        width="w-fit"
      >
        Build Product
      </Button>

      <span className="font-bold pt-2 text-center pl-7 text-6xl text-indigo-800 ">
        Latest
      </span>
      <span className="font-bold pt-2 text-center pl-6 text-6xl">Products</span>

      <div className="gap-2 m-5 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>
      {/* Add Modal */}
      <Modal isOpen={isOpen} closeModal={close} title="ADD NEW PRODUCT">
        <form className="space-y-3" onSubmit={OnSubmit}>
          {renderFormInputList}

          <Select
            selected={selectedcategory}
            setSelected={setSelectedCategory}
          />

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

      {/* Edit Modal */}
      <Modal
        isOpen={isOpenEdit}
        closeModal={closeEdit}
        title="Edit This Product"
      >
        <form className="space-y-3" onSubmit={OnEditSubmit}>
          {renderProductEditWithError("title", "Product Title", "title")}
          {renderProductEditWithError(
            "description",
            "Product Description",
            "description"
          )}
          {renderProductEditWithError("Image ", "Product Image Url", "image")}
          {renderProductEditWithError("price", "Product Price", "price")}

          <Select
            selected={ProductToEdit.category}
            setSelected={(value) =>
              setProductToEdit({ ...ProductToEdit, category: value })
            }
          />
          <div className="flex space-x-1 items-center flex-wrap ">
            {renderColorList}
          </div>

          <div className="flex items-center flex-wrap space-x-1">
            {tempColor.concat(ProductToEdit.colors).map((color) => (
              <span
                key={color}
                className="text-white rounded-md p-1 text-xs flex mb-1"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
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
      {/* Delete Confirm Modal */}
      <Modal
        isOpen={isOpenConfirmModal}
        closeModal={closeConfirm}
        title="Are you Sure you want to remove this product from store?"
        description="Deleting this product will remove it permanently from your inventory . And associated data , sales history, and other related information will also be deleted. Please make sure this is intended action "
      >
        <div className="flex items-center space-x-3">
          <Button
            className="bg-[#c2344d] hover:bg-red-800"
            onClick={removeProductHandler}
          >
            Yes, Remove
          </Button>
          <Button
            className="bg-[#cccccf] hover:bg-gray-300 text-slate-950"
            onClick={closeConfirm}
          >
            Cancel
          </Button>
        </div>
      </Modal>
      <Toaster />
    </main>
  );
};
export default App;
