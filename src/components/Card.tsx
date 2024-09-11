import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Tilt } from "react-tilt";

type CustomDivProps = {
  children: React.ReactNode;
  options: {
    max: number;
    scale: number;
    speed: number;
  };
  className: string;
};

type CardProps = {
  index: number;
  title: string;
  icon: {
    src: string;
  };
  name: string;
  isProfile?: boolean;
};

const CustomDiv = ({ children, options, className }: CustomDivProps) => {
  return <div className={className}>{children}</div>;
};

const Card = ({ index, title, icon, name, isProfile }: CardProps) => {
    const router = useRouter()
    const redirectProfile = (profileName: string) => {
        if (isProfile) return
        router.push(`/profile/${profileName}`)
    }

    return (
    <Tilt className="xs:w-[250px] w-full z-50 bg-white/10 backdrop-blur-sm">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        onClick={() => redirectProfile(name)}
      >
        <CustomDiv
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="border rounded-md py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon.src}
            alt="web-development"
            className="w-16 h-16 rounded-full"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </CustomDiv>
      </motion.div>
    </Tilt>
    
  );
};

export default Card;
