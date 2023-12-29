import {
  ComputerDesktopIcon,
  MusicalNoteIcon,
  ShoppingBagIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import { categories } from "../../data/categories";

function SectionProductCategories() {
  return (
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
  );
}

export default SectionProductCategories;
