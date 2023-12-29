import {
  BeakerIcon,
  HomeIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  MusicalNoteIcon,
  ShoppingBagIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";

import { products } from "../data/products";
import { useState } from "react";
import { categories } from "../data/categories";

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

function Section() {
  const [email, setEmil] = useState("");

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

      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Product Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((item) => {
              const iconCategories = {
                Electronics: ComputerDesktopIcon,
                Fashion: ShoppingBagIcon,
                Photography: VideoCameraIcon,
                Audio: MusicalNoteIcon,
              };

              const Icon = iconCategories[item.name];

              return (
                <div className="bg-white p-4 shadow-md flex items-center">
                  <div className="mr-2">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-20">
        <div className="flex flex-col max-w-2xl container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Subscribe Newsletter</h2>
          <form className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your email here"
              required
              onChange={(event) => {
                setEmil(event.target.value);
              }}
              value={email}
            />

            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full"
              onClick={(event) => {
                event.preventDefault();
                alert(`${email} has been subscribed`);
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Section;
