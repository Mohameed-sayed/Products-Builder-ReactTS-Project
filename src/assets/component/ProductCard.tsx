import ImageComponent from "./ImageComponent";
import Button from "./ui/Button";

const ProductCard = () => {
  return (
    <div className="border rounded-md p-2 flex flex-col ">
      <ImageComponent
        imageURL="https://images.unsplash.com/photo-1523983302122-73e869e1f850?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt={"Product Name"}
        className="rounded-md mb-2"
      />
      <h3>Product Title</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint,
        veniam doloremque at minima ea
      </p>

      <div className="flex space-x-1  my-1 items-center">
        <span className="h-5 w-5 bg-red-600 rounded-full cursor-pointer" />
        <span className="h-5 w-5 bg-yellow-600 rounded-full cursor-pointer" />
        <span className="h-5 w-5 bg-indigo-600 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span>$500.000</span>

        <ImageComponent
          imageURL="https://images.unsplash.com/photo-1523983302122-73e869e1f850?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={"Product Name"}
          className="w-10 h-10 rounded-full object-contain mr-2"
        />
      </div>
      <div className="flex items-center justify-between space-x-3 my-2">
        <Button className="bg-indigo-600">Edit</Button>
        <Button className="bg-red-700">Delete</Button>
        <Button className="bg-green-800">Success</Button>
        <Button className="bg-gray-300 ">Cancel</Button>
      </div>
    </div>
  );
};

export default ProductCard;
