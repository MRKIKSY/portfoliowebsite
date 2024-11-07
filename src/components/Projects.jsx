import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";
import testimage from "../assets/mr-kiksy-cypto-checker.png";
import webdesign from "../assets/mr-kiksy-website-design.png";

const projects = [
  {
    id: 1,
    name: "JobListingWebsite",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "https://jobmarketfrontend.onrender.com/",
  },
  {
    id: 2,
    name: "Live Web Design Class",
    technologies: "MERN Stack",
    image: webdesign,
    github: "https://full-stack-supabase-user-management.onrender.com/#",
  },
  {
    id: 4,
    name: "Cypto Currency Price Checker",
    technologies: "MERN Stack",
    image: testimage,
    github: "https://cyptopricechecker.onrender.com/",
  },
  {
    id: 5,
    name: "Mr Kiksy Contact Management System",
    technologies: "MERN stack",
    image: bookMSImage,
    github: "https://frontendcontactmanagementsystem.onrender.com/",
  },
  {
    id: 6,
    name: "E Assignment Learning Platform",
    technologies: "MERN stack",
    image: bookMSImage,
    github: "https://elearningplatform.onrender.com/",
  },
  {
    id: 7,
    name: "Online BookStore",
    technologies: "MERN stack",
    image: bookMSImage,
    github: "https://e-assignment-platform.onrender.com/",
  },
  {
    id: 8,
    name: "Vanilla Javascript Online Projects",
    technologies: "MERN stack",
    image: bookMSImage,
    github: "https://mrkiksyjavascriptprojects.netlify.app/",
  },
  {
    id: 9,
    name: "Online File Storage System",
    technologies: "MERN stack",
    image: bookMSImage,
    github: "https://fire-c392.onrender.com/",
  },
  {
    id: 10,
    name: "Newsletter subscription system",
    technologies: "MERN stack",
    image: bookMSImage,
    github: "https://newsletterfrontend.onrender.com",
  },
  {
    id: 11,
    name: "Video to Image Converter",
    technologies: "Frontend",
    image: bookMSImage, // Replace with a specific image if available
    github: "https://videotoimageconverter.netlify.app/",
  },
  {
    id: 12,
    name: "Video Merger App",
    technologies: "Node.js, Render",
    image: bookMSImage, // Replace with a specific image if available
    github: "https://videomerger-web-application-1.onrender.com/",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to Navigate Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
