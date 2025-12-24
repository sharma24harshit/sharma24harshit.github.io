import {
  Button, Flex,Heading,Image,Stack,Text,useBreakpointValue,
} from '@chakra-ui/react'
import "./aboutMe.css";

export default function AboutMe({AboutRef}) {

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

};

  return (
    <Stack minH={'90vh'} direction={{ base: 'column', md: 'row' }} className='main_box' ref={AboutRef}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              HI I'AM HARSHIT
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              A FULL STACK WEB DEVELOPER
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black.500'}>
          A self-motivated and ambitious Full Stack Web Developer with
           proficiency in JavaScript, React, HTML and CSS. Passionate 
           about coding and strongly interested in working in a product-based company.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={handleDownloadClick}
              >
              RESUME
            </Button>
        
              <Button rounded={'full'}>
              <a href="https://github.com/sharma24harshit" target='_blank' rel="noreferrer">GITHUB</a></Button>
            
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'My Image'}
          objectFit={'cover'}
          src={
            'Harshit Sharma.jpg'
          }
          borderRadius={"full"}
          className='hero_img'
        />
      </Flex>
    </Stack>
  )
}
