import React from 'react'
import "./projects.css"
import {
  Heading, Avatar, Box, Center, Text,
  Stack, Button, Badge, useColorModeValue, SimpleGrid, Image,
} from '@chakra-ui/react'

function Projects({ProjectsRef}) {
  return (
    <div ref={ProjectsRef}>
      <Text className='section_title' >PROJECTS</Text>
      <SimpleGrid  minChildWidth={{md:'430px' , base:'full'}} gridRowGap='90px' gridColumnGap={{md:'70px' ,sm:'40px', base:'5px'}} width={{md:"90%" ,sm:"95%", base:"100%"}} margin="auto" 
            marginTop={"50px"} marginBottom={"50px"}
            >
    {ProjectData.map((item)=>(
      <Center py={6} px={4}  >
        <Box
          maxW={{md:'400px' ,sm:'300px', base:'full'}} w={'full'}
          bg={'white'} className='project_div'
          boxShadow={'2xl'} rounded={'lg'} p={6}
          textAlign={'center'}>
            <Box>
        <Image objectFit='cover' src={item?.BigImg} alt="img1" />
        </Box>
          <Heading fontSize={'2xl'} fontFamily={'body'} mt={4} mb={'5'} >
            {item?.Projectname}
          </Heading>
          <Text
            textAlign={'left'} fontSize={{sm:'l', base:'l'}}
            color={'gray.800'} >
            {item?.description}
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
           {item.stacks.map((el)=>(
             <Badge
             px={{sm:2, base:1}} py={{sm:1, base:0}}  bg={'gray.200'}
             fontWeight={'400'}>
             {el}
           </Badge>
           ))}
          </Stack>
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1} fontSize={'sm'} rounded={'full'} 
              onClick={()=>window.open(item?.gitHubLink)}
              >
             Git Hub
            </Button>
            <Button
              flex={1} fontSize={'sm'} rounded={'full'} bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              onClick={()=>window.open(item?.LiveLink)}
              >
              Live
            </Button>
          </Stack>
        </Box>
      </Center>
    ))}
 </SimpleGrid>
      
    </div>
  )
}

export default Projects

const ProjectData = [
  {
    BigImg: "projectImg1.PNG",
    Projectname: "VirtualShop.com",
    description: "A team of five members built a front-end clone of the IndustryBuying webpage within a time span of five days. The project included features such as a login page, products page, and add/delete functionality for products in the cart.",
    stacks: ["React", "Redux", "JAVASCRIPT", "HTML","CSS"],
    gitHubLink: "https://github.com/sharma24harshit/Industrybuying.com-clone",
     LiveLink: "https://minishop-nine.vercel.app/"
  },
  {
    BigImg: "projectImg2.PNG",
    Projectname: "Rentish.com",
    description: "A team of five members built a front-end clone of the Zoomcar webpage within a time span of five days. The project included features such as a login page, location page, and functionality to rent a particular car.",
    stacks: ["React", "Redux", "JAVASCRIPT", "HTML","CSS"],
    gitHubLink: "https://github.com/sharma24harshit/Rentish.com-clone",
     LiveLink: "https://playful-kashata-5541e9.netlify.app/"
  },
  {
    BigImg: "projectImg3.PNG",
    Projectname: "Allure.com",
    description: "Built a front-end clone of the Sephora webpage individually within a time span of five days. The project included features such as a products page, add-to-cart functionality, and the ability to delete a product from the cart.",
    stacks: ["React", "JAVASCRIPT", "HTML","CSS"],
    gitHubLink: "https://github.com/sharma24harshit/Sephora.com-clone/tree/main", 
    LiveLink: "https://alluremock.netlify.app/"
  },
  {
    BigImg: "projectImg4.PNG",
    Projectname: "HomeDecor.com",
    description: "A team of four members built a front-end clone of the Overstock webpage within a time span of five days. The project included features such as a login page, products page, and add/delete functionality for products in the cart.",
    stacks: ["JAVASCRIPT", "HTML","CSS"],
    gitHubLink: "https://github.com/sharma24harshit/Overstock.com-clone/tree/main",
    LiveLink: "https://fabulous-cheesecake-0c3aef.netlify.app/index.html"
  }
]