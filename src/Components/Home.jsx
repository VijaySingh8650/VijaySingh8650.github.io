import { Heading , Box, SimpleGrid, Image,  Button} from '@chakra-ui/react';
import React  from 'react'

import styles from "./home.module.css"
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import image from "../Image/VijayPic.png";
let style = {
  display:"inline"
}


const Home = () => {
 

 


   const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Vijay-Singh-Rathore-Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Vijay-Singh-Rathore-Resume.pdf';
                alink.click();
            })
        })
  }
  


  return (
    <SimpleGrid id="home" className={styles.container} columns={[1, 1, 2]}>
      <Box>
        <Image src={image} className={styles.image} />
      </Box>

      <Box>
        <Heading variant={['sm', 'base', 'md']}>Hi, </Heading>
        <Box>
          <Heading style={style} variant={['sm', 'base', 'md']}>
            {' '}
            I'm{' '}
          </Heading>
          <Heading
            variant={['sm', 'base', 'md']}
            className={styles.name}
            style={style}
          >
            Vijay
          </Heading>
        </Box>

        <Heading variant={['sm', 'base', 'md']}>Software Developer</Heading>

        <Button
          onClick={onButtonClick}
          className={styles.btn}
          mt="1rem"
          bg="#127369"
          color={'white'}
          variant={['sm', 'base', 'md']}
        >
          Resume
        </Button>

        <Box className={styles.linkandgit}>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/VijaySingh8650"
            className={styles.icongit}
          >
            
              <BsGithub />
            
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/vijay-singh-rathore-738860166/"
            className={styles.icongit}
          >
            
              <BsLinkedin />
            
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/VijaySi91629929"
            className={styles.icongit}
          >
          
          
            <BsTwitter />
            
          </a>
        </Box>
      </Box>
    </SimpleGrid>
  );

}

export default Home;
