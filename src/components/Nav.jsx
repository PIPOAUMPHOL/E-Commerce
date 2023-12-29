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

function Nav() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-xl font-semibold">
          Ecommerce
        </a>
        <ul className="flex space-x-4">
          <li className="flex items-center">
            <a href="#" className="text-white flex items-center">
              <HomeIcon className="h-5 w-5 mr-1" />
              Home
            </a>
          </li>
          <li className="flex items-center">
            <a href="#" className="text-white flex items-center">
              <BeakerIcon className="h-5 w-5 mr-1" />
              Products
            </a>
          </li>
          <li className="flex items-center">
            <a href="#" className="text-white flex items-center">
              <ShoppingCartIcon className="h-5 w-5 mr-1" />
              Cart
            </a>
          </li>
          <li className="flex items-center">
            <a href="#" className="text-white flex items-center">
              <DevicePhoneMobileIcon className="h-5 w-5 mr-1" />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
