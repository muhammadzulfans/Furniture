function Navbar() {
     return (
          <nav className="bg-navColor p-4 shadow-2xl shadow-black ">
               <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white font-bold font-serif text-xl">Furniture</div>
                    <ul className="flex space-x-9 ">
                         <li>
                              <a href="#Home" className="text-white hover:text-gray-300">
                                   home
                              </a>
                         </li>
                         <li>
                              <a href="#About" className="text-white hover:text-gray-300">
                                   about
                              </a>
                         </li>
                         <li>
                              <a href="#Services" className="text-white hover:text-gray-300">
                                   services
                              </a>
                         </li>
                         <li>
                              <a href="#Team" className="text-white hover:text-gray-300">
                                   team
                              </a>
                         </li>
                         <li>
                              <a href="#Blog" className="text-white hover:text-gray-300">
                                   blog
                              </a>
                         </li>
                         <li>
                              <a href="#Footer" className="text-white hover:text-gray-300">
                                   contact
                              </a>
                         </li>
                    </ul>
               </div>
          </nav>
     );
}

export default Navbar;
