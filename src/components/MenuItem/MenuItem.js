import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GrHome , GrContact , GrUserFemale , GrCode } from "react-icons/gr";
import {
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#4400FF"];
// const text = ["Home", "About Me", "Projects", "Contact"];

const listItems = [
  {
    listIcon: <GrHome />,
    listText: "Home",
    listPath: '/'
  },
  {
    listIcon: <GrUserFemale />,
    listText: "About Me",
    listPath: '/about'
  },
  {
    listIcon: <GrCode />,
    listText: "Projects",
    listPath: '/projects'
  },
  {
    listIcon: <GrContact />,
    listText: "Contact Me",
    listPath: '/contact'

  }
]

export const MenuItem = ({ i }) => {
  return (
    <div>
      {listItems.map((lsItem, key) => (
        <motion.li
          key={key} component={Link} to={lsItem.listPath}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ListItemIcon >
            {lsItem.listIcon}
          </ListItemIcon>
          <ListItemText primary={lsItem.listText} />



        </motion.li>
      ))}
    </div>
  );
};
