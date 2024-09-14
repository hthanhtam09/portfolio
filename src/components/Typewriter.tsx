import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const Typewriter: React.FC = () => {
  const [text] = useTypewriter({
    words: [
      `members: ['Tam Ho Thanh', 'Tho Le Duc']`,
      `technologies: ['ReactJs', 'React Native', 'Unity']`,
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 20,
  });

  return (
    <pre className="text-2xl font-mono m-0 whitespace-pre-wrap text-white">
      {`
        var myWebsite = { 
          name: 'Portfolio', 
          type: 'website', 
          location: 'Da Nang', 
          ${text}
        };
      `}
    </pre>
  );
};

export default Typewriter;
