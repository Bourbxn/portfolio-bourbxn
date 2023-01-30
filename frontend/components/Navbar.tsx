import { CgMenu } from "@react-icons/all-files/cg/CgMenu";
import { CgClose } from "@react-icons/all-files/cg/CgClose";
import { useState } from "react";

const Navbar: React.FC = () => {
  const Links = [
    {
      key: 1,
      name: "Home",
      link: "/",
    },
    {
      key: 2,
      name: "About",
      link: "/About",
    },
    {
      key: 3,
      name: "Skills",
      link: "/Skills",
    },
    {
      key: 4,
      name: "Contact",
      link: "/Contact",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-[#03001C] p-5 md:px-32 md:py-7 md:flex md:items-center md:justify-between text-white border-b-[2px] border-[#301E67]">
      <div className="flex justify-between items-center">
        <a className="text-xl cursor-pointer">Bourbxn</a>
        <span
          className="text-3xl cursor-pointer md:hidden "
          onClick={() => {
            setOpen(!open);
            console.log(open);
          }}
        >
          {!open && <CgMenu className="text-white" />}
          {open && <CgClose className="text-white" />}
        </span>
      </div>
      <ul
        className={` md:flex md:items-center text-xl z-[-1] md:z-auto  w-full left-0 md:w-auto md:py-0 py-10 md:static absolute bg-[#03001C]
        md:pl-0 pl-7 md:opacity-100 opacity-0 transition-all ease-in duration-500 space-y-3 md:space-y-0 ${
          open ? "opacity-100 top-8" : "top-[-400px]"
        } `}
      >
        {Links.map((link) => (
          <li key={link.key}>
            <a
              href={link.link}
              className="mx-5 hover:text-[#B6EADA] duration-500"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
