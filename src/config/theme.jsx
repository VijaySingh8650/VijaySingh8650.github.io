import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
   
    components: {
        Heading: {
            variants: {
                sm: {
                  fontSize:"2rem"
                },
                base: {
                  fontSize:"3rem"
                },
                md: {
                  fontSize:"4rem"
                },
                
            }
        },
        Button: {
            variants: {
                sm: {
                  fontSize:".8rem"
                },
                base: {
                  fontSize:"1rem"
                },
                md: {
                  fontSize:"1.5rem"
                },
                
            }
    },
        Text: {
            variants: {
                sm: {
                  fontSize:".7rem"
                },
                base: {
                  fontSize:".8rem"
                },
                md: {
                  fontSize:".9rem"
                },
                
            }
        }
    }
})

export default theme;