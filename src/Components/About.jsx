import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./about.module.css";
export default function About() {
  return (
    <Box id="about" className={styles.container}>
          <Text variant={["sm", "base", "md"]} color="#127369" className={styles.about}>About</Text>
          <Text className={styles.name}  variant={["sm", "base", "md"]}>I am Vijay Singh Rathore</Text>
          <Text className={styles.aboutdetails}>Skilled web developer with some projects of experience in website development through MERN stack technology with willingness to enhance skill and  knowledge as a web developer.</Text>
    </Box>
  )
}
