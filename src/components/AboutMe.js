import React from "react";
import My_photo from "../../src/public/MyPic2023.jpeg";

const AboutMe = () => {
  return (
    <div  className="flex flex-col">
      <div  className="flex flex-col items-center justify-center">
        <img
          className="w-44 mx-auto mt-20 rounded-lg"
          src={My_photo}
          alt="ME"
        />
        <h2 className="text-4xl  text-bold mt-4">Apoorva Kashyap</h2>
        <p className="w-72 h-36 mt-6 text-md">
          "Hello! I'm a passionate full-stack web developer specializing in the
          MERN Stack with 2.4 years of diverse experience. Currently serving as
          a Senior Software Engineer at LTI Mindtree, I thrive on crafting
          robust solutions that bridge innovation with practicality. My journey
          in software engineering has been a quest for excellence, constantly
          seeking new opportunities to apply my skills and drive organizational
          growth. I am eagerly seeking exciting ventures where I can contribute
          my expertise, support growth, and further elevate my capabilities to
          chart new heights in my career."
        </p>
      </div>
      <div className="flex  items-center justify-center mt-80"> 
        <button className="bg-slate-300 px-4 py-2 mx-2 border rounded-xl">Github</button>
        <button className="bg-slate-300 px-4 py-2 mx-2 border rounded-xl">LinkedIn</button>
      </div>
    </div>
  );
};

export default AboutMe;
