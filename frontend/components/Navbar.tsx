import { CgMenu } from "@react-icons/all-files/cg/CgMenu";
import { CgClose } from "@react-icons/all-files/cg/CgClose";
import { useState } from "react";

const navbar: React.FC = () => {
  const paths = [
    { key: 1, name: "Home", path: "/" },
    { key: 2, name: "Service", path: "/" },
    { key: 3, name: "About", path: "/" },
    { key: 4, name: "Blog's", path: "/" },
    { key: 5, name: "Contact", path: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <nav className="shadow-md w-full fixed top-0 lef-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
            <span className="mr-1">Logo</span>
            Bourbxn
          </div>
          <div
            className="text-black absolute right-8 top-5 text-2xl cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          >
            {!open && <CgMenu></CgMenu>}
            {open && <CgClose></CgClose>}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full
            md:w-auto md:pl-0 pl-9 transition-all ease-in duration-500 ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            }`}
          >
            {paths.map((path) => (
              <li key={path.key} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={path.path}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {path.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default navbar;
