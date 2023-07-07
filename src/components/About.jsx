import React from "react";

const About = () => {
  return (
    <div>
      {/* Jumbotron */}
      <div className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl text-white font-bold">
            Welcome to Our Shop
          </h1>
          <p className="text-white mt-4">
            Home of the chester Clipper's where we provide good service to make a better tomrrow for the young men in our community.
          </p>
        </div>
      </div>

      {/* Large Card 1 */}
      <div className="container mx-auto mt-12">
        <div className="flex">
          <div className="w-1/2 p-4">
            <img
              src="path_to_image"
              alt="Image 1"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold">Card 1 Title</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel est turpis. Vivamus sollicitudin tellus non justo tincidunt
              tincidunt.
            </p>
          </div>
        </div>
      </div>

      {/* Large Card 2 */}
      <div className="container mx-auto mt-12">
        <div className="flex">
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold">Card 2 Title</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel est turpis. Vivamus sollicitudin tellus non justo tincidunt
              tincidunt.
            </p>
          </div>
          <div className="w-1/2 p-4">
            <img
              src="path_to_image"
              alt="Image 2"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
