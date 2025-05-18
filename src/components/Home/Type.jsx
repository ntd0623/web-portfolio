import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "🛠️ Web Dev Intern ",
          "Learning React, Node.js, Laravel 🚀",
          "Aspiring Full-Stack Developer 🌐",
          "On My Way to Becoming a Full-Stack Wizard 🧙‍♂️",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
