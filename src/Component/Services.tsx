import React from "react";

const Services: React.FC = () => {
     return (
          <div id="Services" className="bg-aboutColor pt-32 pb-36">
               <div className="container w-2/3 mx-auto">
                    <div className=" grid grid-cols-2 gap-64">
                         <h1 className="font-medium mt-4 text-4xl">
                            01. Interior design
                         </h1>
                         <div className="w-5/6">
                              <p>Interior design is the art of designing spaces to suit a person's lifestyle and aesthetic preferences. In an ever-evolving world, interior design is not just about arranging furniture...</p>
                              <button className="mt-6 font-mono mb-6">LEARN MORE</button>
                         </div>
                    </div>
                    
                    <hr className=" border-black" />

                    <div className=" grid grid-cols-2 gap-64 mt-12">
                         <h1 className="font-medium mt-4 text-4xl">
                            02. Furniture design
                         </h1>
                         <div className="w-5/6">
                              <p>Furniture design is the art of creating furniture that is both beautiful and functional. On our blog, you will find the story behind the creative.</p>
                              <button className="mt-6 font-mono mb-6">LEARN MORE</button>
                         </div>
                    </div>

                    <hr className=" border-black" />

                    <div className=" grid grid-cols-2 gap-64 mt-12">
                         <h1 className="font-medium mt-4 text-4xl">
                            03. Landscape design
                         </h1>
                         <div className="w-5/6">
                              <p>Landscape design connects exterior spaces with the natural surroundings. Through this blog, we will guide you in designing your garden..</p>
                              <button className="mt-6 font-mono mb-6">LEARN MORE</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Services;
