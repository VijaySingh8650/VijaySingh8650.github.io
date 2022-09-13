import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./footer.module.css";
import { BsLinkedin, BsGithub, BsTwitter,BsFillTelephoneFill } from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

export default function Footer() {
  
   

  return (
      <Box id="contact">
          
          <Text variant={["sm", "base", "md"]} color="#127369" className={styles.get}>Get In Touch</Text>
          <Text className={styles.name}  variant={["sm", "base", "md"]}>Vijay Singh Rathore</Text> 

          <Box className={styles.container}>
                  <a href="https://github.com/VijaySingh8650">
              <Box className={styles.box}>
                      
                  <BsGithub className={styles.icons}/>
                  <Text className={styles.name}>Github</Text> 
              </Box>
                  </a>
                  <a href="https://www.linkedin.com/in/vijay-singh-rathore-738860166/">
              <Box className={styles.box}>
                      
                      <BsLinkedin className={styles.icons} />
                      
                  <Text className={styles.name}>Linkedin</Text> 
              </Box>
                  </a>
                  <a href="https://twitter.com/VijaySi91629929">
                  <Box className={styles.box}>
                      
                  <BsTwitter className={styles.icons}/>
                  <Text className={styles.name}>Twitter</Text> 
                   </Box>
              </a>
              
              <a href="mailto:rathorevijay995@gmail.com">
                  
              <Box className={styles.box}>
                  <AiOutlineMail className={styles.icons}/>
                  <Text className={styles.name}>Email</Text> 
              </Box>
             </a>

              <a href="tel:+917619702306">
                  
              <Box className={styles.box}>
                  <BsFillTelephoneFill  className={styles.icons}/>
                  <Text className={styles.name}>Call</Text> 
              </Box>
            </a>
              
          </Box>
          <Text mb="1rem"> © 2022 copyright all right reserved </Text>
        
      </Box>
  )
}
