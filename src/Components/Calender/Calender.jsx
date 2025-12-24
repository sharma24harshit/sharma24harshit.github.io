import React from 'react';
import "./calender.css"
import { Box, Text } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';
import ActivityCalendar from 'react-activity-calendar';

const Calender = () => {
    const username = 'sharma24harshit';
     const apiUrl = `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;
  
    const [data, setData] = React.useState([]);
  
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          const jsonData = await response.json();
          console.log(jsonData)
          setData(jsonData?.contributions);
        } catch (error) {
          console.error('Error fetching GitHub data:', error);
        }
      };
  
      fetchData();
    }, [apiUrl]);
  
    const minimalTheme = {
        // light: [ '#ebedf0','#9be9a8','#40c463','#30a14e','#216e39'],
        dark: [ '#ebedf0','#9be9a8','#40c463','#30a14e','#216e39'],
      };

    return (
      <div>
        <Text className='section_title' >MY GITHUB CALENDAR</Text>
        <Box className='calender_div' width={{md:'70%' , base:'full'}}>
        {/* <GitHubCalendar username="sharma24harshit" 
        year='last' colorScheme='light'
        style={{width:"inherit"}}
        /> */}
        <ActivityCalendar data={data} theme={minimalTheme}
        style={{width:"100%"}}
        labels={{
            legend: {
              less: "Less",
              more: "More"
            },
            months: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            totalCount: "{{count}} contributions in {{year}}",
            weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
          }}
        />
        </Box>
      </div>
    );
}

export default Calender
