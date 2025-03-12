import { motion } from "motion/react";

const TitleForSection = ({ h4Text, h2Text, pText }) => {
  return (
    <>
      {h4Text && (
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg font-Ovo!"
        >
          {h4Text}
        </motion.h4>
      )}

      {h2Text && (
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-Ovo!"
        >
          {h2Text}
        </motion.h2>
      )}

      {pText && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo!"
        >
          {pText}
        </motion.p>
      )}
    </>
  );
};

export default TitleForSection;
