import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box style={{marginTop:'1.2rem'}} width={400} height={250} component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '1.5rem', paddingTop:'4px'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'}  gap={'0.5rem'}
              alignItems={'center'} fontSize={'1rem'} py={'0.5rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
         </Box>
            <Box>
               <hr style={{background: 'black', color: 'black',borderColor: 'black', height: '0.1rem',width: '25rem',marginBottom:"1rem",marginTop:"1rem"}} />
            </Box>
      </Box>
      
   );
}

export default PortfolioBlock;