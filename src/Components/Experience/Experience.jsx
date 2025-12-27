import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import {
    Box,
    Flex,
    Stack,
    Text,
    Heading,
    Icon,
    useColorModeValue
  } from "@chakra-ui/react";
  import "./experience.css"

  const Experience = () => {
    const cardBg = useColorModeValue("white", "gray.800");
  
    return (
        <>
        <Text className='section_title' >EXPERIENCE</Text>

      <Stack spacing={8} position="relative">
        {experiences.map((exp, index) => (
          <Flex key={index} gap={3} align="center" px={5}>
            {/* Timeline Icon + Line */}
            <Flex direction="column" align="center">
              <Box
                p={2}
                borderRadius="xl"
                border={'1px solid #90cdf4'}
                color="white"
              >
                <Icon as={exp.icon} boxSize={8} color={'blue.400'} />
              </Box>
  
            </Flex>
  
            {/* Content Card */}
            <Box
              p={5}
              bg={cardBg}
              boxShadow={'xl'}
              borderRadius="lg"
              w="100%"
              className='exp_div'
              border="2px solid #90cdf4"
            >
              <Text fontSize="sm" fontWeight="bold" color="gray.500">
                {exp?.duration}
              </Text>
  
              <Heading size="md" mt={1}>
                {exp?.role}
              </Heading>
  
              <Text fontWeight="bold" color={'blue.400'}>
                {exp?.company}
              </Text>
  
                    {
                        exp?.points?.map((point, point_index) => (
                            <Flex direction="row" align="center" gap={1} key={point_index} >
                                <MdOutlineSubdirectoryArrowRight />
                                <Text mt={1}>{point}</Text>
                            </Flex>
                        ))
                    }    
            </Box>
          </Flex>
        ))}
      </Stack>
      </>
    );
  };
  
  export default Experience;
  


export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Galific Solutions",
    type: "Full-time",
    duration: "Jan 2025 - Sept 2025",
    description:
      "Worked on scalable React applications focusing on performance and UI consistency.",
    points: [
      "Developed the complete frontend of a LinkedIn lead generation platform and launched it for testing within one month.",
      "Built a digital marketing analytics platform using React.js, Chart.js, and REST APIs, led a 2-member team and delivered the demo version in two months.",
      "Enhanced the PostgreSQL backend by integrating email verification and OTP authentication features to improve security and user experience."
    ],
    icon: MdOutlineKeyboardDoubleArrowRight
  },
  {
    role: "Frontend Developer",
    company: "InstaPe Synergies Pvt. Ltd.",
    type: "Full-time",
    duration: "Oct 2024 - Dec 2024",
    description:
      "Worked on scalable React applications focusing on performance and UI consistency.",
    points: [
      "Developed responsive React.js frontends and collaborated closely with backend teams to ensure seamless API integrations and efficient data flow.",
      "Integrated payment gateway solutions on the Instape platform, improving checkout flow and enhancing overall user experience by 15%.",
      "Implemented reusable UI components using React.js, enhancing code maintainability and reducing development time by up to 25%"
    ],
    icon: MdOutlineKeyboardDoubleArrowRight
  },
  {
    role: "Software Engineer",
    company: "Pipli.ai",
    type: "Full-time",
    duration: "July 2023 - Oct 2024",
    description:
      "Focused on frontend development and UI optimization.",
    points: [
      "Built the frontend for a platform enabling chartered accountants to manage multiple retailers invoices and edit extracted invoice data",
      "Developed the UI for a retailer web app allowing management of multiple stores from one dashboard and supported key client onboarding.",
      "Fixed UI bugs and optimized performance, improving app stability and increasing speed by 25–30%"
    ],
    icon: MdOutlineKeyboardDoubleArrowRight
  }
];
