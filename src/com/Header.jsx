
import {useEffect, useState} from "react";
import {GifState} from "../context/Context";
import GifSearch from "./gif-serach";
import {Link} from "react-router-dom";
import Filter from "./Filter";
import {HiEllipsisVertical, HiMiniBars3BottomRight} from "react-icons/hi2";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);


  const fetchGifCategories = async () => {
    const res = await fetch("/categories.json");
    const {data} = await res.json();
    setCategories(data);
  };


  useEffect(() => {
    fetchGifCategories();
  }, []);

  return (
    <nav>
      <div class="relative flex gap-4 justify-between items-center mb-2">
        <Link to={"/"} class="flex gap-2">
          <img src="/logo.svg" alt="Giphy Logo" class="w-8" />
          <h1 class="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        <div class="font-bold text-md flex gap-2 items-center">
          {categories?.slice(0, 5).map((category) => {
            return (
              <Link
                class="px-4 py-1 transition ease-in-out hover:gradient border-b-4  lg:block"
                key={category.name}
                to={`/${category.name_encoded}`}
              >
                {category.name}
              </Link>
            );
          })}

          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical
              size={35}
              class={`py-0.5 transition ease-in-out hover:gradient ${
                showCategories ? "gradient" : ""
              } border-b-4 cursor-pointer hidden lg:block`}
            />
          </button>
     
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiMiniBars3BottomRight
              class="text-sky-400 block lg:hidden"
              size={30}
            />
          </button>
         
        </div>

        {showCategories && (
          <div class="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span class="text-3xl font-extrabold">Categories</span>
            <hr class="bg-gray-100 opacity-50 my-5" />
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {categories?.map((category) => {
                return (
                  <Link
                    onClick={() => setShowCategories(false)}
                    class="transition ease-in-out font-bold"
                    key={category.name}
                    to={`/${category.name_encoded}`}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <GifSearch filter={Filter} setFilter={Filter} />
    </nav>
  );
};

export default Header;