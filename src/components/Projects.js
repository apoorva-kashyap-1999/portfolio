import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center mt-20" id="projects">
      <h1 className="text-3xl font-bold my-4"> Personal Projects </h1>
      <div className="flex justify-center items-center flex-wrap">
        <div className="flex flex-col justify-center items-center text-bold text-3xl m-2">
          Netflix-Clone
          <p className="w-full md:w-48 h-auto m-2 text-lg px-2">
            Built using ReactJs for frontend, Firebase for authentication,
            Tailwind CSS for styling , Redux Toolkit for state management
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-bold text-3xl m-2">
          Contacts-API
          <p className="w-full md:w-48 h-auto m-2 text-lg px-2">CRUD API built using NodeJS</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;


