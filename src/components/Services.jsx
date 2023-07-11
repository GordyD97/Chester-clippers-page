import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto">
      {/* next line down needs to have the cards stacked in a grid. adding the class to the div below does not give them the correct property.  */}
      <div className="grid grid-rows-1 grid-cols-3">
        {/* this is the seperation between the container and the actuall product card.  */}
        <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div class="px-4 py-2">
            <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
              Premium Hair cuts
            </h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </p>
          </div>

          <img
            class="object-cover w-full h-48 mt-2"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
            alt="NIKE AIR"
          />

          <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
            
            <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              Learn more
            </button>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////// */}
        <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div class="px-4 py-2">
            <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
              Hair washing station
            </h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </p>
          </div>

          <img
            class="object-cover w-full h-48 mt-2"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
            alt="NIKE AIR"
          />

          <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
            
            <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              Learn more
            </button>
          </div>
        </div>
        {/* //////////////////////////////////////////////////////////// */}
        <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div class="px-4 py-2">
            <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
              Community insight
            </h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </p>
          </div>

          <img
            class="object-cover w-full h-48 mt-2"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
            alt="NIKE AIR"
          />

          <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
            {/* removed price tag from each card then turned the add to cart button to learn more button will add modal to that button for each card.  */}
            <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
