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
                         <p className="text-xs w-1/2 leading-5">
                              We are space crafters who bring dreams to life in design. With a touch of creativity and care, we design spaces that speak for your lifestyle. Our inspiration comes from the beauty of the surroundings and the uniqueness
                              of each individual. We are committed to transforming every space into a place that is beautiful, functional and harmonious.
                         </p>
                    </div>

                    <div className=" py-10 container grid grid-cols-4 justify-between">
                         <div className="">
                              <img className="" src={img1} />
                         </div>
                         <div className="">
                              <img className="" src={img2} />
                         </div>
                         <div className="justify-between">
                              <img src={img3} />
                              <div className="pt-20 flex">
                                   <div className="px-8 text-center">
                                        <h2 className=" text-5xl pb-3">2K+</h2>
                                        <p className="text-start font-mono">PROJECTS DONE</p>
                                   </div>

                                   <div className=" px-8 text-center">
                                        <h2 className="text-5xl pb-3">20+</h2>
                                        <p className="text-start font-mono">PRO TEAMS</p>
                                   </div>
                              </div>
                         </div>
                         <div className="px-6">
                              <div className="text-center">
                                   <button className="font-mono border border-black py-2 px-16 mt-52 rounded-full hover:bg-black hover:text-white transition-colors duration-300">LEARN ABOUT</button>
                              </div>
                              <div className="px-20 text-center mt-16 pt-2">
                                   <h2 className="text-5xl pb-3">300+</h2>
                                   <p className="font-mono text-start">GLOBAL CLIENTS</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default About;
