import React, {useEffect} from "react";
import My_photo from "../../src/public/MyPic2023.jpeg";
// import { useHistory } from 'react-router-dom';

const AboutMe = () => {

  useEffect(() => {
    const previousPage = document.referrer;
    const isExternalLink = !previousPage.includes(window.location.origin);

    // If the previous page was an external link, redirect to the homepage
    if (isExternalLink) {
      window.location.href = window.location.origin; // Replace this with your homepage URL
    }
  }, []);

  const handleGitClick = () => {
    // Navigate to a specific route when the button is clicked
    window.location.href=('https://github.com/apoorva-kashyap-1999');
  };

  const handleLinkedInClick = () => {
    // Navigate to a specific route when the button is clicked
    window.location.href=('https://www.linkedin.com/in/apoorva-kashyap-6665bb189/');
  };

  return (
    <div className="flex flex-col" id="about">
      <div  className="flex flex-col items-center justify-center">
        <img
          className="w-44 mx-auto mt-20 rounded-lg hover:border"
          src={My_photo}
          alt="ME"
        />
        <h2 className="text-4xl  text-bold mt-4">Apoorva Kashyap</h2>
        <p className="w-72 h-36 mt-6 text-md">
          "Hello! I'm a passionate full-stack web developer specializing in the
          MERN Stack with 2.4 years of diverse experience. Currently serving as
          a Senior Software Engineer at LTI Mindtree. I am eagerly seeking exciting ventures where I can contribute
          my expertise, support growth, and further elevate my capabilities to
          chart new heights in my career."
        </p>
      </div>
      <div className="flex  items-center justify-center mt-40"> 
        <button className="bg-slate-300 px-4 py-2 mx-2 border rounded-xl" onClick={handleGitClick}>Github</button>
        <button className="bg-slate-300 px-4 py-2 mx-2 border rounded-xl" onClick={handleLinkedInClick}>LinkedIn</button>
      </div>
    </div>
  );
};

export default AboutMe;
