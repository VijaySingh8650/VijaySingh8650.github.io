import { Box } from '@chakra-ui/react'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from "./navbar.module.css";

export default function navbar() {
  return (
    <Box className={styles.navbar}>
          <Box className={styles.logo}>
             V 
          </Box>
          <Box>
              <AnchorLink href="#home" className={styles.subtitle}>Home</AnchorLink>
              <AnchorLink href="#about" className={styles.subtitle}>About</AnchorLink>
              <AnchorLink href="#skills" className={styles.subtitle}>Skills</AnchorLink>
              <AnchorLink href="#projects" className={styles.subtitle}>Projects</AnchorLink>
              <AnchorLink href="#contact" className={styles.subtitle}>Contact</AnchorLink>
          </Box>
    </Box>
  )
}
