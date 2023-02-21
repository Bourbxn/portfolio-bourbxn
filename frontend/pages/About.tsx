import { BsPersonFill } from "@react-icons/all-files/bs/BsPersonFill";

const About = () => {
  return (
    <div className="px-8">
      <div className="text-white flex justify-center items-center text-4xl pt-12 gap-2 md:pb-0 pb-10">
        <span>
          <BsPersonFill></BsPersonFill>
        </span>
        About me
      </div>
      <div className="min-h-[75vh] w-full flex justify-center items-center md:pb-0 pb-14">
        <div className="flex md:flex-row flex-col justify-center items-center text-white gap-10 md:gap-y-0 gap-y-12">
          <div>
            <img
              alt="my_profile"
              src="https://sv1.picz.in.th/images/2023/02/05/LRxiBz.jpg"
              className="shadow-lg md:w-[21rem] rounded-lg"
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg text-black md:w-[48rem] p-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            laudantium possimus minima incidunt consectetur magnam architecto
            distinctio laborum molestias assumenda hic porro, eos ullam nesciunt
            reprehenderit harum ut quidem officiis? Laborum ducimus magnam
            consectetur excepturi adipisci ab accusantium modi corporis
            consequatur architecto, tenetur aut, quasi, ea dolor? Quam
            recusandae reprehenderit perferendis, at totam aspernatur dolorum?
            Earum enim quae laudantium eius. Cumque perferendis velit eius
            suscipit ut, nemo consectetur assumenda labore modi odio aut dolor
            tempora temporibus quaerat nam autem ratione. Maxime sapiente ipsum
            quas temporibus dicta asperiores eum fugiat dignissimos? Ipsum, vel
            aut minus excepturi praesentium molestias dolores saepe voluptatibus
            repellendus dolor vero perferendis dolorem quisquam soluta,
            dignissimos ipsa. Dolor suscipit sunt accusantium possimus in
            repudiandae. Quos possimus natus ipsam.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
