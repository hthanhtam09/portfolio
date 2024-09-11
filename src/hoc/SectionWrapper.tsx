import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

const SectionWrapper = (Component: React.FC) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`w-full h-full relative`}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
