import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./about.module.css";
export default function About() {
  return (
    <Box id="about" className={styles.container}>
          <Text color="#127369" className={styles.about}>About</Text>
          <Text className={styles.name}>I am Vijay Singh Rathore</Text>
          <Text variant={["sm","base","md"]} className={styles.aboutdetails}>Goal-oriented Software Developer with 2+ years of experience in designing and implementing innovative web solutions. Adept at analyzing, solving complex coding problems, writing clean and reusable code, and crafting polished user interfaces.</Text>
    </Box>
  )
}
