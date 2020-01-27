import  React from "react";
import { motion } from "framer-motion";
import MenuItem from "./menu-item";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = () => (
  <motion.div variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.div>
);

const itemIds = [0, 1, 2, 3, 4];

export default Navigation 