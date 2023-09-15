import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    heading1: "",
    paragraph1: "",
    heading2: "",
    paragraph2: "",
    heading3: "",
    paragraph3: "",
    subheading1: "",
    subheading2: "",
    subheading3: "",
    subheading4: "",
    subheading5: "",
    subheading6: "",
    subheading7: "",
    subheading8: "",
    subheading9: "",
    paragraph4: "",
    paragraph5: "",
    paragraph6: "",
    paragraph7: "",
    paragraph8: "",
    paragraph9: "",
    paragraph10: "",
  });
  

  async function fetchData() {
    try {
      const res = await fetch("https://tech-server-x48n.onrender.com/data");
      const parsedData = await res.json();
      console.log(parsedData.data);
      setData(parsedData.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      <nav className="flex mt-10 ml-28">
        <div className="flex w-1/2">
          <img className="w-12" src="round.png" />
          <h1 className="font-bold text-2xl m-2">Warkhu</h1>
        </div>
        <ul className="flex ml-24 h-10">
          <li className="ml-8  hover:text-customGreen hover:cursor-pointer">
            Blog
          </li>
          <li className="ml-8  hover:text-customGreen hover:cursor-pointer">
            Services
          </li>
          <li className="ml-8  hover:text-customGreen hover:cursor-pointer">
            About Us
          </li>
          <li className="ml-8  hover:text-customGreen hover:cursor-pointer">
            Career
          </li>
          <li className="ml-8  hover:text-customGreen hover:cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>

      <div className="flex ml-28 h-[100vh]">
        <div className="w-1/2 my-20">
          <h1 className="text-5xl font-bold">
            {data.title}
          </h1>
          <p className="mt-10">
            {data.subtitle}
          </p>
          <div className="flex mt-10">
            <button className="bg-customGreen text-white border rounded-2xl p-2 w-32 my-5">
              Get Started
            </button>
            <img className="w-24 h-10 my-6 mx-10" src="pulse.png" />
          </div>
        </div>
        <img className="hidden md:block" src="hero.jpg" />
      </div>

      <h2 className="text-4xl font-bold text-center">
        {data.heading1}
      </h2>
      <div className="grid grid-cols-3 gap-4 mx-28 my-20 text-center">
        <div className="p-10 border rounded-md">
          <div className="flex justify-center">
            <img className="w-24" src="phone.png" />
          </div>
          <h4 className="font-bold text-2xl">{data.subheading1}</h4>
          <p>
           {data.paragraph1}
          </p>
        </div>
        <div className="p-10 border rounded-md">
          <div className="flex justify-center">
            <img className="w-24" src="pool.png" />
          </div>
          <h4 className="font-bold text-2xl">{data.subheading2}</h4>
          <p>
            {data.paragraph2}
          </p>
        </div>
        <div className="p-10 border rounded-md">
          <div className="flex justify-center">
            <img className="w-28 h-24" src="rest.png" />
          </div>
          <h4 className="font-bold text-2xl">{data.subheading3}</h4>
          <p>
            {data.paragraph3}
          </p>
        </div>
        <div className="p-10 border rounded-md">
          <div className="flex justify-center">
            <img className="w-24" src="phone.png" />
          </div>
          <h4 className="font-bold text-2xl">{data.subheading4}</h4>
          <p>
            {data.paragraph4}
          </p>
        </div>
        <div className="p-10 border rounded-md">
          <div className="flex justify-center">
            <img className="w-24" src="card.png" />
          </div>
          <h4 className="font-bold text-2xl">{data.subheading5}</h4>
          <p>
            {data.paragraph5}
          </p>
        </div>

        <div className="p-10 border rounded-md">
          <div className="flex justify-center">
            <img className="w-24" src="home.png" />
          </div>
          <h4 className="font-bold text-2xl">{data.subheading6}</h4>
          <p>
           {data.paragraph6}
          </p>
        </div>
      </div>

      <div className="flex mx-28 my-20">
        <img className="w-1/2" src="research.png" />
        <div className="ml-10">
          <img className="w-20" src="magnifier.png" />
          <h2 className="font-bold text-2xl m-2">{data.subheading7}</h2>
          <div className="bg-customGreen font-bold py-1 px-4"></div>
          <p className="mt-10">
            {data.paragraph7}
          </p>
        </div>
      </div>

      <div className="flex mx-28 my-20">
        <div>
          <img className="w-20" src="magnifier.png" />
          <h2 className="font-bold text-2xl m-2">{data.subheading8}</h2>
          <div className="bg-customGreen font-bold py-1 px-4"></div>
          <p className="mt-10">
           {data.paragraph8}
          </p>
        </div>
        <img src="work.png" className="w-1/2" />
      </div>

      <div className="flex mx-28 my-20">
        <img className="w-1/2" src="group.png" />
        <div className="ml-5">
          <img className="w-20" src="magnifier.png" />
          <h2 className="font-bold text-2xl m-2">{data.subheading9}</h2>
          <div className="bg-customGreen font-bold py-1 px-4"></div>
          <p className="mt-10">
           {data.paragraph9}
          </p>
        </div>
      </div>

      <h2 className="font-bold text-4xl text-center my-20">{data.heading2}</h2>
      <div className="flex mx-28 my-10 gap-10">
        <div className="p-4 w-1/3 border rounded-md">
          <div className="flex">
            <img className="w-10 h-10" src="arrow.png " />
            <h3 className="font-bold text-3xl m-2 text-customGreen">Premium</h3>
          </div>
          <p>Lite Plan</p>
          <span>
            <span className="font-bold text-2xl">$11</span>/month for user
          </span>
          <br />
          <button className="bg-customGreen px-5 my-4 text-white">
            Get Started
          </button>
          <ul className="my-10">
            <li>
              <span className="font-bold text-4xl text-customGreen">*</span>{" "}
              Lorem, ipsum dolor.
            </li>
            <li>
              <span className="font-bold text-4xl text-customGreen">*</span>{" "}
              Lorem, ipsum dolor.
            </li>
            <li>
              <span className="font-bold text-4xl text-customGreen">*</span>
              Lorem, ipsum dolor.
            </li>
          </ul>
          <button className="bg-customGreen  w-full  my-5 text-white">
            Learn More
          </button>
        </div>

        <div className="p-4 w-1/3 border rounded-md">
          <div className="flex">
            <img className="w-10 h-10" src="arrow.png " />
            <h3 className="font-bold text-3xl m-2 text-customGreen">Lite</h3>
          </div>
          <p>Lite Plan</p>
          <span>
            <span className="font-bold text-2xl">$11</span>/month for user
          </span>
          <br />
          <button className="bg-customGreen px-5 my-4 text-white">
            Get Started
          </button>
          <ul className="my-10">
            <li>
              <span className="font-bold text-4xl text-customGreen">*</span>{" "}
              Lorem, ipsum dolor.
            </li>
            <li>
              <span className="font-bold text-4xl text-customGreen">*</span>{" "}
              Lorem, ipsum dolor.
            </li>
            <li>
              <span className="font-bold text-4xl text-customGreen">*</span>
              Lorem, ipsum dolor.
            </li>
          </ul>
          <button className="bg-customGreen  w-full  my-5 text-white">
            Learn More
          </button>
        </div>

        <div className="p-4 w-1/3 border rounded-md">
          <div className="flex">
            <img className="w-10 h-10" src="arrow.png " />
            <h3 className="font-bold text-3xl m-2 text-customGreen">Pro</h3>
          </div>
          <p>Lite Plan</p>
          <span>
            <span className="font-bold text-2xl">$11</span>/month for user
          </span>
          <br />
          <button className="bg-customGreen px-5 my-4 text-white">
            Get Started
          </button>
          <ul className="my-10">
            <li>
              <span className="font-bold text-4xl text-customGreen">*</span>{" "}
              Lorem, ipsum dolor.
            </li>
            <li>
              <span className="font-bold text-4xl text-customGreen">*</span>{" "}
              Lorem, ipsum dolor.
            </li>
            <li>
              <span className="font-bold text-4xl text-customGreen">*</span>
              Lorem, ipsum dolor.
            </li>
          </ul>
          <button className="bg-customGreen w-full  my-5 text-white">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex px-28 my-20 bg-blue-50">
        <div className="w-1/2">
          <h2 className="font-bold text-4xl mt-32">
           {data.heading3}
          </h2>
          <p className="mt-5">
            {data.paragraph10}
          </p>
        </div>
        <img src="next.png" alt="image" />
      </div>

      <h2 className="font-bold text-4xl mt-20 text-center">
        What our fans are saying about us
      </h2>
      <p className="text-center m-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
        reiciendis?
      </p>
      <div className="flex gap-2 justify-center mx-28 my-10">
        <div className=" w-1/3">
          <div className="flex justify-center">
            <img className="w-40" src="profile.png" alt="image" />
          </div>
          <h3 className="font-bold text-2xl text-center">Name</h3>
          <p className="m-4 text-center">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className=" w-1/3">
          <div className="flex justify-center">
            <img className="w-40" src="profile.png" alt="image" />
          </div>
          <h3 className="font-bold text-2xl text-center">Name</h3>
          <p className="m-4 text-center">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className=" w-1/3">
          <div className="flex justify-center">
            <img className="w-40" src="profile.png" alt="image" />
          </div>
          <h3 className="font-bold text-2xl text-center">Name</h3>
          <p className="m-4 text-center">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </>
  );
}

export default App;
