import React from "react";

const CareerSummary = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-3xl font-bold m-4">Career Summary</h3>
      <ul className="text-lg text-center max-w-lg">
        <li>⭐MERN Developer with 2.4 Years of experience in LTIMindtree</li>
        <li>⭐Experienced working on maintaining and developing UI components using ReactJs and TDS (Client design component system)</li>
        <li>⭐Integration and API Handling: Integrated various APIs within the Node.js middle layer enabling efficient communication between UI and microservices</li>
        <li>⭐Experience in writing unit tests using Jest and Mocha for both UI and Node.js components</li>
        <li>⭐Involved in data handling, including loading data into MongoDB and utilizing SQL for additional data sources</li>
        <li>⭐Deployed UI and Node.js middle layer using Jenkins CI/CD pipeline</li>
      </ul>
    </div>
  );
};

export default CareerSummary;
