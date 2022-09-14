import { Box, SimpleGrid, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'
import styles from "./project.module.css"
import image from "../Image/Lovoda.png"
import {BsGithub} from 'react-icons/bs';





export default function Projects() {
  return (
    <Box id="projects" className={styles.project} >
          <Text  color="#127369" className={styles.projects}>Projects</Text>
          <Box>
              
                  
              <SimpleGrid columns={[1,1,2]} className={styles.box} gap="2rem">
                  <Box className={styles.imagebox}>
                      
                  <Image src={image} className={styles.image}/>
                  </Box>
                  <Box>
                      <Text variant={["sm","base","md"]} className={styles.heading}>LOVODA is a women's fashion brand website that deals with earrings, rings, bags, necklaces, bracelets and many more.</Text> 
                  <Text variant={["sm","base","md"]}  className={styles.features}>
                      <b>Features: </b>
                      <br />
                            <b>1.</b> End-to-end product purchasing flow.
                              From signing in to Adding items to the cart, increasing their quantity, and deleting items.  
                       
                           
                     <br />
                     
                        <b>2.</b> Integrated the app with the backend using heroku and git. 
                                
                     
                              
                     
                  </Text>
                  <Text variant={["sm","base","md"]}  className={styles.responsibility}>
                          <b>Area Of Responsibility: </b>
                          <br />
                     <b>1.</b> Developed home page, Search products page, and different pages like necklaces, rings, earrings with all the functionality.
                    
                      <br />
                          
                      
                      <b>2.</b> Log-in and sign-up page with authentication to proceed further in website.
                  </Text>
                  <Text variant={["sm","base","md"]}  className={styles.stack}><b>Tech Stack: </b>HTML | CSS | ReactJS | Chakra UI</Text>
                      <Text variant={["sm", "base", "md"]} className={styles.time}>An individual 5-days  project </Text>

                        <Box mt="1rem" className={styles.btn}>
                          
                                  <Button bg='#127369' color={"white"} variant={["sm", "base", "md"]}>
                                      <a href="https://github.com/VijaySingh8650">
                          <Text variant={["sm", "base", "md"]}><BsGithub /></Text></a></Button>
              
                          <Button bg='#127369' color={"white"} variant={["sm", "base", "md"]} className={styles.btn2}>
                              <a href="https://lovoda-ecommerce-website.netlify.app/">
                              <Text variant={["sm", "base", "md"]}>Live</Text></a>
              </Button>
                          
                        </Box>
                      
                  </Box>
                  
        </SimpleGrid>
        

        <SimpleGrid columns={[1,1,2]} className={styles.box} gap="2rem">
                  <Box className={styles.imagebox}>
                      
                  <Image src={image} className={styles.image}/>
                  </Box>
                  <Box>
                      <Text variant={["sm","base","md"]} className={styles.heading}>LOVODA is a women's fashion brand website that deals with earrings, rings, bags, necklaces, bracelets and many more.</Text> 
                  <Text variant={["sm","base","md"]}  className={styles.features}>
                      <b>Features: </b>
                      <br />
                            <b>1.</b> End-to-end product purchasing flow.
                              From signing in to Adding items to the cart, increasing their quantity, and deleting items.  
                       
                           
                     <br />
                     
                        <b>2.</b> Integrated the app with the backend using heroku and git. 
                                
                     
                              
                     
                  </Text>
                  <Text variant={["sm","base","md"]}  className={styles.responsibility}>
                          <b>Area Of Responsibility: </b>
                          <br />
                     <b>1.</b> Developed home page, Search products page, and different pages like necklaces, rings, earrings with all the functionality.
                    
                      <br />
                          
                      
                      <b>2.</b> Log-in and sign-up page with authentication to proceed further in website.
                  </Text>
                  <Text variant={["sm","base","md"]}  className={styles.stack}><b>Tech Stack: </b>HTML | CSS | ReactJS | Chakra UI</Text>
                      <Text variant={["sm", "base", "md"]} className={styles.time}>An individual 5-days  project </Text>

                        <Box mt="1rem" className={styles.btn}>
                          
                                  <Button bg='#127369' color={"white"} variant={["sm", "base", "md"]}>
                                      <a href="https://github.com/VijaySingh8650">
                          <Text variant={["sm", "base", "md"]}><BsGithub /></Text></a></Button>
              
                          <Button bg='#127369' color={"white"} variant={["sm", "base", "md"]} className={styles.btn2}>
                              <a href="https://lovoda-ecommerce-website.netlify.app/">
                              <Text variant={["sm", "base", "md"]}>Live</Text></a>
              </Button>
                          
                        </Box>
                      
                  </Box>
                  
              </SimpleGrid>

             
          </Box>
    </Box>
  )
}
