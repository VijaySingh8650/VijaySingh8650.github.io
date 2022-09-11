import { Heading , Box, SimpleGrid, Image, Input, Button} from '@chakra-ui/react';
import React from 'react'
import styles from "./home.module.css"
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs';
let style = {
  display:"inline"
}
const Home = () => {
   const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Vijay-Singh-Rathore.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Vijay-Singh-Rathore.pdf';
                alink.click();
            })
        })
    }

  return (
    <SimpleGrid id="home" className={styles.container}>
      <Box className={styles.box}>
        <Heading variant={["sm","base","md"]}>Hi, </Heading>
        <Box><Heading style={style} variant={["sm", "base", "md"]}> I'm </Heading><Heading variant={["sm", "base", "md"]} className={styles.name} style={style}>Vijay</Heading></Box>
        <Heading variant={["sm", "base", "md"]}>MERN Developer</Heading>

       

        <Button onClick={onButtonClick }
          className={styles.btn} mt="1rem" bg='#127369' color={"white"} variant={["sm", "base", "md"]}>Resume</Button>
        <Box className={styles.linkandgit}>
          <a href="https://github.com/VijaySingh8650" className={styles.icongit}>

          <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/vijay-singh-rathore-738860166/" className={styles.icongit}>

          <BsLinkedin />
          </a>
          
          <a href="https://twitter.com/VijaySi91629929" className={styles.icongit}>

          <BsTwitter />
          </a>
        </Box>
          
    
      </Box>
      <Box>
        <Image/>
      </Box>
    </SimpleGrid>
  )

}

export default Home;