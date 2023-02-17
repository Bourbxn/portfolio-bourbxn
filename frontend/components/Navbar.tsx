import { CgMenu } from "@react-icons/all-files/cg/CgMenu";
import { CgClose } from "@react-icons/all-files/cg/CgClose";
import { FaGlassWhiskey } from "@react-icons/all-files/fa/FaGlassWhiskey";
import { useState } from "react";

const navbar: React.FC = () => {
  const paths = [
    { key: 1, name: "Home", path: "/" },
    { key: 2, name: "About", path: "/About" },
    { key: 3, name: "Skills", path: "/Skills" },
    { key: 4, name: "Education", path: "/Education" },
    { key: 5, name: "Project", path: "/Project" },
    { key: 6, name: "Experience", path: "/Experience" },
    { key: 7, name: "Contact", path: "/Contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <nav className="shadow-2xl w-full fixed top-0 lef-0 border-b-2 border-deep-purple">
        <div className="md:flex items-center justify-between bg-dark-ocean py-[1.8rem] md:px-[6rem] px-[3rem]">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
            <span className="mr-1 text-light-mint">
              <FaGlassWhiskey></FaGlassWhiskey>
            </span>
            Bourbxn
          </div>
          <div
            className="text-white absolute right-8 top-7 text-3xl cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          >
            {!open && <CgMenu></CgMenu>}
            {open && <CgClose></CgClose>}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-dark-ocean md:z-auto z-[-1] left-0 w-full
            md:w-auto md:pl-0 pl-12 transition-all ease-in duration-500 md:border-b-0 border-b-2 border-deep-purple ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            }`}
          >
            {paths.map((path) => (
              <li key={path.key} className="md:ml-7 md:my-0 my-7">
                <a
                  href={path.path}
                  className="text-white hover:text-light-mint duration-500"
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
