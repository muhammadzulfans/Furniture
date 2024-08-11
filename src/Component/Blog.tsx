import React from "react";
import blog1 from "../assets/Rectangle 15.png";
import blog2 from "../assets/Rectangle 15 (1).png";
import blog3 from "../assets/Rectangle 15 (2).png";

const Blog: React.FC = () => {
     return (
          <div id="Blog" className="bg-aboutColor pt-20 pb-28">
               <div className=" w-2/3 container mx-auto text-center">
                    <p className="text-xs mb-3">B L O G</p>
                    <h1 className="font-bold font-mono text-3xl">The latest article</h1>

                    <div className=" flex grid-col-3 pt-8">
                         <div className="pl-4 flex flex-row justify-center">
                              <div className="-2 p-4">
                                   <img src={blog1} />
                                   <p className="w-96 text-start pb-9">Posuere urna nec tincidunt praesent egestas maecenas.</p>
                                   <button className="">LEARN MORE</button>
                              </div>

                              <div className="-2 p-4">
                                   <img src={blog2} />
                                   <p className="w-96 text-start pb-9">Posuere urna nec tincidunt praesent egestas maecenas.</p>
                                   <button className="">LEARN MORE</button>
                              </div>

                              <div className="-2 p-4">
                                   <img src={blog3} />
                                   <p className="w-96 text-start pb-9">Posuere urna nec tincidunt praesent egestas maecenas.</p>
                                   <button className="">LEARN MORE</button>
                              </div>
                         </div>
                    </div>

                    <hr className="border-black " />
               </div>
          </div>
     );
};

export default Blog;
