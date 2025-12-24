import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdMailOutline,
  MdOutlineEmail,
} from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'
import { FaLinkedin } from "react-icons/fa";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import copy from 'clipboard-copy'; 
import { Tooltip } from '@chakra-ui/react'

export default function Contact({ ContactRef }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const form = useRef();
  const [toolTipVal, settoolTipVal] = useState("Copy Email");

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs.send("service_rbab8tl", "template_now8hmn", {
      from_name: name,
      message: content,
      from_email: email,
    }, {
      publicKey: '-0KUZbxLOTKsPa4Vu',
    }).then(
      () => {
        console.log('SUCCESS!');
        setName("");
        setEmail("");
        setContent("");
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }

  const handleCopyClick = async () => {
    settoolTipVal("Copy Email")
    try {
      await copy("sharma78655533@gmail.com"); 
      settoolTipVal("Email Copied")
      console.log('Text copied successfully!');
    } catch (error) {
      console.error('Unable to copy text:', error);
    }
  };


  return (
    <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden" ref={ContactRef} >
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        +91-9877313720
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        sharma78655533@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Mohali, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                      <Tooltip hasArrow label={toolTipVal} bg='gray.200' color='black' closeOnClick={false}>
                   <IconButton
                      aria-label="email"
                      size="lg"
                      bg="#02054B"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<MdMailOutline size="28px" color='white' />}
                      onClick={handleCopyClick}
                    />             
                    </Tooltip>
                    <a href="https://github.com/sharma24harshit" target='_blank'>
                      <IconButton
                        aria-label="github"
                        size="lg"
                        bg="#02054B"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px" color='white' />}
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/harshit-sharma-86624515b/" target='_blank'>
                      <IconButton
                        aria-label="linkedin"
                        size="lg"
                        bg="#02054B"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<FaLinkedin size="28px" color='white' />}
                      /></a>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <form ref={form} onSubmit={sendMessage}>
                        <FormControl id="name">
                          <FormLabel>Your Name <span style={{ color: 'red' }}>*</span></FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" placeholder='Your Name' value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Email <span style={{ color: 'red' }}>*</span></FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" placeholder='Your Email' value={email}
                              onChange={(e) => setEmail(e.target.value)} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message <span style={{ color: 'red' }}>*</span></FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="Your Message"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}
                            type="submit"
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}
