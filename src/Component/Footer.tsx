import React from "react";
import fb from "../assets/Facebook.png";
import tw from "../assets/Twitter.png";
import lkn from "../assets/Linkedin.png";
import ig from "../assets/Instagram.png";

const Footer: React.FC = () => {
     return (
          <div id="Footer" className="bg-aboutColor pt-16 pb-7">
               <div className="bg-footerColor py-40">
                    <div className="container w-2/3 mx-auto">
                         <div className="w-full mx-auto max-w-screen-xl container  md:flex md:justify-between mb-16">
                              <ul className="flex flex-wrap items-center mt-3 text-sm font-light gap-14 sm:mt-0">
                                   <li>
                                        <a href="#" className="text-black">
                                             home
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-black">
                                             about
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-black">
                                             services
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-black">
                                             team
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-black">
                                             blog
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-black">
                                             contact
                                        </a>
                                   </li>
                              </ul>
                              <span className="text-sm font-mono text-black mb-3 sm:mt-4">I N T E R I O R</span>
                         </div>
                         <div className=" container mx-auto ">
                              <hr className="border-black " />
                         </div>

                         <div className="w-full container max-w-screen-xl mx-auto md:flex md:justify-between grid grid-cols-3 mt-12">
                              <div className="flex grid-cols-4 gap-5 container ">
                                   <img src={fb} />
                                   <img src={tw} />
                                   <img src={lkn} />
                                   <img src={ig} />
                              </div>
                              <div className="border-l border-black h-12"></div>
                              <div className="w-4/6">
                                   <div className="text-right">
                                        <p className="">Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="text-center text-lg justify-center pt-7 font-mono font-medium">
                    <span>© PLUG-IN 2022</span>
               </div>
          </div>
     );
};

export default Footer;
