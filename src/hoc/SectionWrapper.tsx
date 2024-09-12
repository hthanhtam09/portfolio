import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

const SectionWrapper = <P extends object>(Component: React.ComponentType<P>) =>
  function HOC(props: P) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`w-full h-full relative`}
      >
       <Component {...props} />
      </motion.section>
    );
  };

export default SectionWrapper;
