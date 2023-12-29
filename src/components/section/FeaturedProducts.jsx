import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { products } from "../../data/products";

function ProductCard(props) {
  return (
    <div className="bg-white p-4 shadow-md">
      <img
        src={props.src}
        alt="The Lorem Ipsum for photos."
        className="w-full mb-2"
      />
      <h3 className="text-lg font-semibold mb-1">{props.name}</h3>
      <div className="flex justify-between items-center">
        <p className="text-gray-600">${props.price}</p>
        <button className="mt-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded flex items-center">
          <ShoppingCartIcon className="h-4 w-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function SectionFeaturedProducts() {
  return (
    <>
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ProductCard
              src="https://picsum.photos/id/231/200/200"
              price="99.99"
              name="The Lorem Ipsum for photos."
            />
            <ProductCard
              src="https://picsum.photos/id/232/200/200"
              price="79.99"
              name="Wireless Bluetooth Earbuds"
            />
            <ProductCard
              src="https://picsum.photos/200/200"
              price="79.99"
              name="Stylish Cool Sunglasses in The World"
            />
            {products.map((item) => {
              return (
                <div className="bg-white p-4 shadow-md" key={item.id}>
                  <img
                    src={item.image}
                    alt="The Lorem Ipsum for photos."
                    className="w-full mb-2"
                  />
                  <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">${item.price}</p>
                    <button className="mt-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded flex items-center">
                      <ShoppingCartIcon className="h-4 w-4 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionFeaturedProducts;
