import Link from "next/link";
import { motion } from "framer-motion";
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

const CustomDiv = ({ children, className }: CustomDivProps) => {
  return <div className={className}>{children}</div>;
};

const Card = ({ index, title, icon, name, isProfile }: CardProps) => {
  return (
    <Tilt className="xs:w-[250px] w-full z-50 cursor-pointer">
      <Link href={isProfile ? "#" : `/profile/${name}`} passHref>
        <motion.div
          initial={{ translateX: -100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: index * 0.5,
            duration: 5,
          }}
          className="w-full p-[1px] rounded-[20px] bg-white/5 backdrop-blur-[2px]"
        >
          <CustomDiv
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="border rounded-md py-5 px-12 min-h-[280px] flex justify-center gap-3 items-center flex-col"
          >
            <img src={icon.src} alt="member" className="w-16 h-16 rounded-full" />
            {!isProfile && (
              <span className="dark:text-dark text-light text-[20px] font-bold text-center">
                {name.replace(/-/g, " ")}
              </span>
            )}
            <h3 className="dark:text-dark text-light text-[16px] font-light text-center">
              {title}
            </h3>
          </CustomDiv>
        </motion.div>
      </Link>
    </Tilt>
  );
};

export default Card;
