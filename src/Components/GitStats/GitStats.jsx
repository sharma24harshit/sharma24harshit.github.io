import React from 'react';
import "./gitStats.css"
import { Box, Image, Text } from '@chakra-ui/react';

const GitStats = () => {
    const username = 'sharma24harshit';
    const [data, setData] = React.useState([]);
  


    return (
      <div>
        <Text className='section_title' >GITHUB Stats</Text>
        <Box className='gitStats_div' width={{md:'70%' , base:'full'}} >
        <Image className='img1' src={`https://github-readme-stats.vercel.app/api?username=${username}&count_private=true&show_icons=true&hide_border=false`} alt="stats" />
        <Image className='img2' src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&count_private=true&show_icons=true&hide_border=false`} alt="language used" />
        </Box>
      </div>
    );
}

export default GitStats
