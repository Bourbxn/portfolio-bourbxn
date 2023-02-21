import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";

const home = () => {
  return (
    <div className="flex justify-center items-center h-[85vh] p-8">
      <div>
        <h1 className="text-white md:text-[6rem] text-[3.5rem] font-bold animate-topic bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
          JAKKAPAT P.
        </h1>
        <h2 className="text-gray-400 md:text-[1.5rem] text-[1rem] flex justify-center items-center">
          I'm a passionate full-stack developer
        </h2>
        <div className="flex md:flex-row flex-col space-y-6 md:space-y-0 justify-center items-center md:space-x-8 pt-12">
          <a href="https://github.com/Bourbxn/" target="_blank">
            <button
              className="bg-[#e5e7ea] text-black border-2 border-[#e5e7ea] w-44 py-3 rounded-lg font-bold flex justify-center items-center gap-2
              hover:bg-transparent hover:text-[#e5e7ea] duration-500"
            >
              <span className="text-xl">
                <AiFillGithub></AiFillGithub>
              </span>
              Github
            </button>
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <button
              className="bg-transparent text-[#5b9def] border-2 border-[#5b9def] w-44 py-3 rounded-lg font-bold flex justify-center items-center gap-2
              hover:bg-[#5d6af2] hover:text-[#e5e7ea] duration-500 hover:border-[#e5e7ea]"
            >
              <span className="text-xl">
                <AiFillLinkedin></AiFillLinkedin>
              </span>
              LinkedIn
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default home;
