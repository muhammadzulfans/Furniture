import React from "react";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import elips1 from "../assets/Ellipse 2.png";
import elips2 from "../assets/Ellipse 3.png";
import elips3 from "../assets/Ellipse 4.png";
import elips4 from "../assets/Ellipse 5.png";

const Teams: React.FC = () => {
     return (
          <div id="Team" className="bg-teamsColor py-56 ">
               <div className=" w-2/3 container mx-auto ">
                    <div className="w-2/3 container grid grid-cols-3">
                         <div className="col-start-1 -col-end-5">
                              <p className="mb-2 text-xs">T E A M S</p>
                              <div className="mb-10  text-3xl container w-1/2 leading-relaxed">
                                   <p>Projects are handled by professional certified teams</p>
                              </div>
                              <div className=" text-xs container w-80 leading-5">
                                   <p>Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc aliquet bibendum enim consectetur adipiscing.</p>
                              </div>

                              {/* BELUM SELESAI */}
                              <div className="py-20 flex ">
                                   <img src={elips1} />
                                   <img src={elips2} />
                                   <img src={elips3} />
                                   <img src={elips4} />
                              </div>
                         </div>

                         {/* Gambar */}
                         <div className="grid grid-cols-2 py-5 min-w-max">
                              <div className="px-5">
                                   <img src={team1} />
                              </div>
                              <div className="">
                                   <img src={team2} />
                                   <img className="py-5" src={team3} />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Teams;
