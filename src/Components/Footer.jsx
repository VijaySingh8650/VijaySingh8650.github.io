import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./footer.module.css";
import { BsLinkedin, BsGithub, BsTwitter,BsFillTelephoneFill } from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

export default function Footer() {
  
   

  return (
      <Box id="contact">
          
          <Text  color="#127369" className={styles.get}>Contact</Text>
          <Text className={styles.name}>Vijay Singh Rathore</Text> 

          <Box className={styles.container}>
                  <a rel="noreferrer" target="_blank" href="https://github.com/VijaySingh8650">
              <Text variant={["sm","base","md"]} className={styles.box}>
                      
                  <BsGithub className={styles.icons}/>
                  Github 
              </Text>
                  </a>
                  <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/vijay-singh-rathore-738860166/">
              <Text variant={["sm","base","md"]}  className={styles.box}>
                      
                      <BsLinkedin className={styles.icons} />
                      
                  Linkedin
              </Text>
                  </a>
                  <a rel="noreferrer" target="_blank" href="https://twitter.com/VijaySi91629929">
                  <Text variant={["sm","base","md"]}  className={styles.box}>
                      
                  <BsTwitter className={styles.icons}/>
                  Twitter
                   </Text>
              </a>
              
              

             
              
          </Box>
          <Box className={styles.container1}>
              
              <a rel="noreferrer" target="_blank" href="mailto:rathorevijay995@gmail.com">
                  
                <Text variant={["sm","base","md"]}  className={styles.box1}>
                  <AiOutlineMail className={styles.icons}/>
                 rathorevijay995@gmail.com 
                </Text>
              </a>
              <a  href="tel:+917619702306">
                  
              <Text variant={["sm","base","md"]}  className={styles.box1}>
                  <BsFillTelephoneFill  className={styles.icons}/>
                  +91-7619702306
              </Text>
              </a>
              
          </Box>
          
          <Text color="grey" mb="1rem" variant={["sm","base","md"]}> © 2024 copyright all right reserved </Text>
        
      </Box>
  )
}
