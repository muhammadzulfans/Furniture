import React from "react";
import img1 from "../assets/IMG1.png";
import img2 from "../assets/IMG2.png";
import img3 from "../assets/IMG3.png";

const About: React.FC = () => {
     return (
          <div id="About" className="bg-aboutColor py-28">
               <div className=" w-2/3 container mx-auto col-start-auto">
                    <div className=" w-2/3 container ">
                         <p className="mb-2 text-xs">A B O U T</p>
                         <p className="mb-5 font-medium text-3xl">Welcome to the world of design we created.</p>
                         <p className="text-xs w-1/2">
                              We are space crafters who bring dreams to life in design. With a touch of creativity and care, we design spaces that speak for your lifestyle. Our inspiration comes from the beauty of the surroundings and the uniqueness
                              of each individual. We are committed to transforming every space into a place that is beautiful, functional and harmonious.
                         </p>
                    </div>

                    <div className=" py-10 container grid grid-cols-4">
                         <div className="">
                              <img className="" src={img1} />
                         </div>
                         <div className="">
                              <img className="" src={img2} />
                         </div>
                         <div className="">
                              <img className="" src={img3} />
                              <div className="py-10 space-y-16 gap-4 ">
                                   <div className="text-center">
                                        <h2 className="text-2xl font-bold">2K+</h2>
                                        <p>Project Done</p>
                                   </div>

                                   <div className="text-center">
                                        <h2 className="text-2xl font-bold">20+</h2>
                                        <p>Project Done</p>
                                   </div>

                                   <div className="text-center">
                                        <h2 className="text-2xl font-bold">300+</h2>
                                        <p>Project Done</p>
                                   </div>
                                   <div className="text-center">
                                        <button className="border border-black py-2 px-8 rounded-full hover:bg-black hover:text-white transition-colors duration-300">Learn About</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default About;
