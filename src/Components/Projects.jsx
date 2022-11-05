import { Box, SimpleGrid, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'
import styles from "./project.module.css"
import image from "../Image/Lovoda.png"
import banggood from "../Image/banggood.png"
import unsplash from "../Image/unsplash.png"
import cricbuzz from "../Image/cricbuzz.png"
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
                                      <a rel="noreferrer" href="https://github.com/VijaySingh8650" target="_blank">
                          <Text variant={["sm", "base", "md"]}><BsGithub /></Text></a></Button>
              
                          <Button bg='#127369' color={"white"} variant={["sm", "base", "md"]} className={styles.btn2}>
                              <a rel="noreferrer" href="https://lovoda-ecommerce-website.netlify.app/" target="_blank">
                              <Text variant={["sm", "base", "md"]}>Live</Text></a>
              </Button>
                          
                        </Box>
                      
                  </Box>
                  
        </SimpleGrid>

        {/* 2nd project */}
         <SimpleGrid columns={[1,1,2]} className={styles.box} gap="2rem">
                  <Box className={styles.imagebox}>
                      
                  <Image src={banggood} className={styles.image}/>
                  </Box>
                  <Box>
                      <Text variant={["sm","base","md"]} className={styles.heading}>BANGGOOD is a Global Leading Online Shop for Gadgets and Fashion.</Text> 
                  <Text variant={["sm","base","md"]}  className={styles.features}>
                      <b>Features: </b>
                      <br />
                            <b>1.</b> End-to-end product purchasing flow.
  
                       
                           
                     <br />
                     
                        <b>2.</b> From signing in to Adding items to the cart, increasing their quantity, and deleting items.  
                                
                     
                              
                     
                  </Text>
                  <Text variant={["sm","base","md"]}  className={styles.responsibility}>
                          <b>Area Of Responsibility: </b>
                          <br />
                     <b>1.</b> Created home page with all the functionality like adding items to cart.

                      <br />
                          
                      
                      <b>2.</b>Created cart page, where user can easily increase and decrease the quantity of products.
                  </Text>
                  <Text variant={["sm","base","md"]}  className={styles.stack}><b>Tech Stack: </b>HTML | CSS | Javascript</Text>
                      <Text variant={["sm", "base", "md"]} className={styles.time}>A collaborative project, built in 5 days by a team of 6 developers.</Text>

                        <Box mt="1rem" className={styles.btn}>
                          
                                  <Button bg='#127369' color={"white"} variant={["sm", "base", "md"]}>
                                      <a rel="noreferrer" href="https://github.com/VijaySingh8650/Banggood-Website" target="_blank">
                          <Text variant={["sm", "base", "md"]}><BsGithub /></Text></a></Button>
              
                          <Button bg='#127369' color={"white"} variant={["sm", "base", "md"]} className={styles.btn2}>
                              <a rel="noreferrer" href="https://prismatic-bubblegum-5ec055.netlify.app/" target="_blank">
                              <Text variant={["sm", "base", "md"]}>Live</Text></a>
              </Button>
                          
                        </Box>
                      
                  </Box>
                  
              </SimpleGrid>


        {/* 3rd project */}

        <SimpleGrid columns={[1,1,2]} className={styles.box} gap="2rem">
                  <Box className={styles.imagebox}>
                      
                  <Image src={unsplash} className={styles.image}/>
                  </Box>
                  <Box>
                      <Text variant={["sm","base","md"]} className={styles.heading}>UNSPLASH is a high resolution pictures providing website.</Text> 
                  <Text variant={["sm","base","md"]}  className={styles.features}>
                      <b>Features: </b>
                      User can easily search for any kind of pictures with high resolutuion.
                     
                              
                     
                  </Text>
                  <Text variant={["sm","base","md"]}  className={styles.responsibility}>
                          <b>Area Of Responsibility: </b>
                          <br />
                           Created home page with searching functionality using unsplash api.
                  </Text>
                  <Text variant={["sm","base","md"]}  className={styles.stack}><b>Tech Stack: </b>HTML | CSS | Javascript</Text>
                      <Text variant={["sm", "base", "md"]} className={styles.time}>A mini project.</Text>

                        <Box mt="1rem" className={styles.btn}>
                          
                                  <Button bg='#127369' color={"white"} variant={["sm", "base", "md"]}>
                                      <a rel="noreferrer" href="https://github.com/VijaySingh8650/Unsplash-Clone" target="_blank">
                          <Text variant={["sm", "base", "md"]}><BsGithub /></Text></a></Button>
              
                          <Button bg='#127369' color={"white"} variant={["sm", "base", "md"]} className={styles.btn2}>
                              <a rel="noreferrer" href="https://unsplash-js.netlify.app/" target="_blank">
                              <Text variant={["sm", "base", "md"]}>Live</Text></a>
              </Button>
                          
                        </Box>
                      
                  </Box>
                  
              </SimpleGrid>




              {/* 4th project */}
               <SimpleGrid columns={[1,1,2]} className={styles.box} gap="2rem">
                  <Box className={styles.imagebox}>
                      
                  <Image src={cricbuzz} className={styles.image}/>
                  </Box>
                  <Box>
                      <Text variant={["sm","base","md"]} className={styles.heading}>Cricbuzz is an Indian cricket website which features news, articles, live scores of matches, videos. They also offer mobile app. </Text> 
                  <Text variant={["sm","base","md"]}  className={styles.features}>
                      <b>Features: </b>
                      <br />
                            <b>1.</b> It updates you with the current matches, their scores, past matches and more details about each and every match.
  
                       
                           
                     <br />
                     
                        <b>2.</b> It also updates you regarding the match news through pictures and videos. 
                     
                              
                     
                  </Text>
                  <Text variant={["sm","base","md"]}  className={styles.responsibility}>
                          <b>Area Of Responsibility: </b>
                          <br />
                           Created homepage to show some news related to the matches and the current matches and their socres.
                  </Text>
                  <Text variant={["sm","base","md"]}  className={styles.stack}><b>Tech Stack: </b>HTML | CSS | Javascript</Text>
                      <Text variant={["sm", "base", "md"]} className={styles.time}>A collaborative project, built in 5 days by a team of 5 developers.</Text>

                        <Box mt="1rem" className={styles.btn}>
                          
                                  <Button bg='#127369' color={"white"} variant={["sm", "base", "md"]}>
                                      <a rel="noreferrer" href="https://github.com/VijaySingh8650/cricbuzz" target="_blank">
                          <Text variant={["sm", "base", "md"]}><BsGithub /></Text></a></Button>
              
                          <Button bg='#127369' color={"white"} variant={["sm", "base", "md"]} className={styles.btn2}>
                              <a rel="noreferrer" href="https://luxury-douhua-2f73cb.netlify.app/index.html" target="_blank">
                              <Text variant={["sm", "base", "md"]}>Live</Text></a>
              </Button>
                          
                        </Box>
                      
                  </Box>
                  
              </SimpleGrid>
        

       
        




        

             
          </Box>
    </Box>
  )
}
