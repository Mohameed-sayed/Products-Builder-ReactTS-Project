import { useState } from "react";
import ProductCard from "./component/ProductCard";
import Modal from "./component/ui/Modal";
import { ProductList } from "./data";
import Button from "./component/ui/Button";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const renderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <main className="container">
      <Button className="bg-indigo-600  hover:bg-indigo-800 justify-between"  onClick={open}>
        Add
      </Button>

      <div className="gap-2 m-5 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={close} title="ADD NEW PRODUCT">
        <div className="space-x-3 flex items-center">
          <Button className="bg-indigo-600 hover:bg-indigo-800">Submit</Button>
          <Button
            className="bg-gray-400 hover:bg-gray-600"
            onClick={close}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
