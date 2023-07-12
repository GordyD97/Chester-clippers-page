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
          <h3 className="text-white mt-4">
            Home of the chester Clipper's where we provide good service to make a better tomrrow for the young men in our community.
          </h3>
          <p>
            Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions.
          </p>
        </div>
      </div>

      {/* Large Card 1 */}
      <div className="container mx-auto mt-12 bg-gray-600">
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
      <div className="container mx-auto mt-12 bg-blue-800">
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
