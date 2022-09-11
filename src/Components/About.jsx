import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./about.module.css";
export default function About() {
  return (
    <Box id="about">
          <Text variant={["sm", "base", "md"]} color="#127369" className={styles.about}>About</Text>
          <hr />
    </Box>
  )
}
