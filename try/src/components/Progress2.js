import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ProgressBar2(props) {
  return (
//removed display: 'flex', from line 10
    <Box sx={{ alignItems: 'center', }}>    
      <Box sx={{ width: '100%', mr: 1,}}>
        <LinearProgress style={{backgroundColor:'#385682', height:'19px'}} variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }} >
        <Typography variant="body2" color="#C7DDFF" >{`${Math.round(
          props.value,
        )}%`} Completed </Typography>
      </Box>
    </Box>
  );
}

ProgressBar2.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel2() {
  const [progress, setProgress] = React.useState(5);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 5));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);


  //<ProgressBar value={progress} /> ----------Determine the size of the box
  return (
    <Box sx={{ width: '100%' }} >
      <ProgressBar2 value={progress}/>
    </Box>
  );
}