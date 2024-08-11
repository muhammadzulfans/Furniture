function Navbar() {
     return (
          <div className="bg-navColor p-4 w-full z-50 fixed shadow-2xl shadow-black">
               <div className="container mx-auto flex justify-between items-center ">
                    <div className="text-white font-medium font-mono text-xl">Furniture <span className="font-serif font-medium text-slate-300">I n t e  r i o r</span></div>
                    <ul className="flex space-x-10 font-light ">
                         <li>
                              <a href="#Home" className="text-white hover:text-gray-400 scroll-m-8 hover:scroll-m-0">
                                   home
                              </a>
                         </li>
                         <li>
                              <a href="#About" className="text-white hover:text-gray-400 scroll-m-8 hover:scroll-m-0">
                                   about
                              </a>
                         </li>
                         <li>
                              <a href="#Services" className="text-white hover:text-gray-400 scroll-m-8 hover:scroll-m-0">
                                   services
                              </a>
                         </li>
                         <li>
                              <a href="#Team" className="text-white hover:text-gray-400">
                                   team
                              </a>
                         </li>
                         <li>
                              <a href="#Blog" className="text-white hover:text-gray-400">
                                   blog
                              </a>
                         </li>
                         <li>
                              <a href="#Footer" className="text-white hover:text-gray-400">
                                   contact
                              </a>
                         </li>
                    </ul>
               </div>
          </div>
     );
}

export default Navbar;
