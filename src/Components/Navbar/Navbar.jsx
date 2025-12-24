import {
    Box, Flex, Avatar, HStack, IconButton, Button, Menu, MenuButton,
    MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, Text,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import "./navbar.css";

const Links = ['Home', 'About Me', 'Skills', 'Projects', 'Contact', 'Resume']
// const NavLink = (props) => {
//     const { children } = props

//     return (
//         <Box
//             as="a"
//             px={2}
//             py={1}
//             rounded={'md'}
//             _hover={{
//                 textDecoration: 'none',
//                 bg: useColorModeValue('#90cdf4'),
//             }}
//             href={'#'}>
//             {children}
//         </Box>
//     )
// }

export default function Navbar({skillsCLick,scrollToAboutMe,scrollToProjects,scrollToContact}) {
    const { isOpen, onOpen, onClose } = useDisclosure();


    const handleDownloadClick = () => {
        const pdfFilePath = 'Harshit-Sharma-Resume.pdf';
    
        fetch(pdfFilePath)
        .then(response => response.blob())
        .then(blob => {
          const blobUrl = URL.createObjectURL(blob);
    
          const anchor = document.createElement('a');
          anchor.href = blobUrl;
          anchor.download = 'Harshit-Sharma-Resume.pdf';
          anchor.target = '_blank';
    
          document.body.appendChild(anchor);
          anchor.click();
          URL.revokeObjectURL(blobUrl);
        })
        .catch(error => {
          console.error('Error fetching PDF:', error);
        });
    
    }

    const clickFunc = (i)=>{
    if(i===1 || i===0){
        scrollToAboutMe();
        onClose();
    }
    else if(i===2){
        skillsCLick(); onClose();
    }
    else if(i===3){
        scrollToProjects(); onClose();
    }
    else if(i===4){
        scrollToContact(); onClose();
    }
    else if(i===5){
       handleDownloadClick(); onClose();
    }
    } 
    

    return (
        <>
            <Box bg={useColorModeValue("#90cdf4")} px={4} className='navbar' >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={10} alignItems={'center'}>
                        <Text key={"top"} className='Title' >HARSHIT</Text>
                        <HStack as={'nav'} spacing={2} display={{ base: 'none', md: 'flex' }} fontWeight={'600'} >
                            {Links.map((link,i) => (
                                <Button key={link}
                                onClick={()=>clickFunc(i)}
                                bg={"#90cdf4"}
                                _hover={{
                                    bg: '#90cdf4',
                                  }}
                                >{link}</Button>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={'Harshit Sharma.jpg'}
                                />
                            </MenuButton>
                            <MenuList>
                                <a href="https://github.com/sharma24harshit" target='_blank' rel="noreferrer">
                                <MenuItem>GITHUB</MenuItem>
                                </a>
                                <a href="https://www.linkedin.com/in/harshit-sharma-86624515b/" target='_blank' rel="noreferrer">
                                <MenuItem>LinkedIn</MenuItem>
                                </a>
                                <MenuDivider />
                                <MenuItem
                                onClick={handleDownloadClick}
                                >Resume</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link,i) => (
                                <Button key={link}
                                onClick={()=>clickFunc(i)}
                                bg={"#90cdf4"}
                                _hover={{
                                    bg: '#90cdf4',
                                  }}
                                >{link}</Button>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}
