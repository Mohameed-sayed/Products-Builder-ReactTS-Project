import ProductCard from "./component/ProductCard";
import { ProductList } from "./data";

const App = () => {
  const renderproductlist = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <main className="container ">
      <div className=" gap-2 m-5 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderproductlist}
      </div>
    </main>
  );
};

export default App;
