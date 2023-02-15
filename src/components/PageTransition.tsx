import { variants } from "@/animations/variants";
import { motion } from "framer-motion";
import Head from "next/head";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PageTransition = ({ children }: Props) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative", width: "100%" }}
    >
      {children}
    </motion.article>
  );
};
