import React from "react";

const About = () => {
  return (
    <div className="about-container min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-black text-white">
      {/* Centered content */}
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl mb-6">
          Hey there! I'm Harish, a passionate Web Developer with experience in
          building highly responsive websites and web apps. My journey started
          with curiosity and a love for technology, and I've been coding ever
          since.
        </p>
        <p className="text-lg mb-4">
          I specialize in front-end technologies like React.js, Tailwind CSS,
          and love crafting interactive, smooth user experiences. Apart from
          coding, I'm a huge fan of clean design, tech trends, and learning
          something new every day.
        </p>
        <p className="text-lg mb-4">
          In my free time, I enjoy exploring new frameworks, contributing to
          open-source projects, and sharing my knowledge with others in the tech
          community.
        </p>
        <p className="text-lg mb-4">
          Let's connect, collaborate, and build something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
