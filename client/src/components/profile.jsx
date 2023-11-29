
import React, { useState } from 'react';
import Box from '@mui/material/Box'; // Assuming you are using Material-UI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Image from '../assets/Img/messi.jpg'
import Image2 from '../assets/Img/messi2.jpg'
import Image3 from '../assets/Img/messi3.jpg'
import Image4 from '../assets/Img/messi4.jpg'
import Image5 from '../assets/Img/messi5.webp'
import IconButton from '@mui/material/IconButton';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';

import Button from '@mui/material/Button';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VerifiedUser from '@mui/icons-material/VerifiedUser';
import '../assets/css/profile.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const Profile = () => {
  const [value, setValue] = useState(0); // State for managing the selected tab

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
<div className="flex items-center mt-[3.3rem] ml-[10rem] gap-[7rem]">
<div className='h-[160px] w-[160px] rounded-[50%] border-[gray] border-[2px] overflow-hidden ' >
<img src={Image} alt="Profile"  className='' />

</div>
<div className="element2 flex flex-col gap-[10px] justify-center items-center">
    <div className='flex items-center  gap-[15px]'>
        <p style={{fontWeight:'550'}}> leomessi</p>
        <VerifiedUser color="primary" fontSize="small" />
        <button style={{ fontWeight:'600' }} className='p-[6px_18px_6px_18px] bg-blue-500 text-white ml-[30px]  rounded-[8px]'>Follow</button>
        <button style={{ backgroundColor: 'rgb(230, 230, 230)',fontWeight:'600' }} className='p-[6px_18px_6px_18px]  rounded-[8px]'>Message</button>
        <button style={{ backgroundColor: 'rgb(230, 230, 230)',fontWeight:'600' }} className='p-[9.5px_10px_9.5px_10px]  rounded-[8px]'><svg aria-label="Similar accounts" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="16" role="img" viewBox="0 0 48 48" width="16"><title>Similar accounts</title><path clip-rule="evenodd" d="M46 41.5H18c-.8 0-1.5-.7-1.5-1.5v-1.5c0-5.5 4.5-10 10-10h11c5.5 0 10 4.5 10 10V40c0 .8-.7 1.5-1.5 1.5zm-14-16c-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5 9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5zm-16 1h-4.5V31c0 .8-.7 1.5-1.5 1.5H8c-.8 0-1.5-.7-1.5-1.5v-4.5H2c-.8 0-1.5-.7-1.5-1.5v-2c0-.8.7-1.5 1.5-1.5h4.5V17c0-.8.7-1.5 1.5-1.5h2c.8 0 1.5.7 1.5 1.5v4.5H16c.8 0 1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5z" fill-rule="evenodd"></path></svg></button> 
        <svg aria-label="Options" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="32" role="img" viewBox="0 0 24 24" width="32"><title>Options</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
    </div>
    <div className='flex justify-between gap-[5px] mt-[2rem] max-w-[442px] w-full'>
        <p><b>1,142</b> posts</p>
        <p><b>493</b> Followers</p>
        <p><b>307</b> Following</p>
    </div>
    <div className='flex justify-start max-w-[442px] w-full'>
        <p style={{fontWeight:'600'}} >Leo Messi</p>
    </div>
    <div className='flex justify-start mt-[0]  max-w-[442px] w-full'>
        <p className='text-gray-500' >Athlete</p>
    </div>
    <div className='flex justify-start  max-w-[442px] w-full'>
        <p className='text-black-500' >Bienvenidos a la cuenta oficial de Instagram de Leo Messi / Welcome to the official Leo Messi Instagram account</p>
    </div>
    <div className='flex justify-start items-center max-w-[442px] w-full'>
    <IconButton style={{marginTop:3}}>
      <LinkIcon />
    </IconButton>
    <Link  href="https://themessiexperience.com" target="_blank"       style={{ textDecoration: 'none', color: '#001f3f' }}
 rel="noopener noreferrer" color="inherit">
      themessiexperience.com
    </Link>
    </div>
    <div className='flex justify-start  max-w-[442px] w-full'>
        <p className='text-black-500' ><span className='text-gray-500'>Followed by </span>saiff___49, hasan_here_x, anas__here__<span className='text-gray-500'> + 24 more</span></p>
    </div>
</div>

</div>
<div className='w-full flex justify-center pt-[1.5rem]'>
    <div className='max-w-[1100px] w-full'>
        <div className='flex gap-[4rem]'>

<div className='flex flex-col items-center gap-[5px]'>
<div className='h-[75px] flex flex-col w-[75px] rounded-full overflow-hidden'><img src={Image} alt="" />
 </div>
 <p>Seleccion</p>

</div>
<div className='flex flex-col items-center gap-[5px]'>
<div className='h-[75px] flex flex-col w-[75px] rounded-full overflow-hidden'><img src={Image} alt="" />
 </div>
 <p>FCB</p>

</div>
<div className='flex flex-col items-center gap-[5px]'>
<div className='h-[75px] flex flex-col w-[75px] rounded-full overflow-hidden'><img src={Image} alt="" />
 </div>
 <p>Familia</p>

</div>
</div></div></div>

<div className='flex justify-center max-w-[1300px] w-full'>
      <Box className='flex justify-center max-w-[1100px] w-full gap-[180px]' sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Posts" />
          <Tab label="Saved" />
          <Tab label="Tagged" />
        </Tabs>
      </Box></div>
      {value === 0 &&
      <div className=' flex justify-center   mb-[3rem] mt-[3rem] max-w-[1300px] w-full'>
        <div className='flex flex-wrap justify-between gap-[5px] max-w-[1200px] w-full'>
       <div className='max-w-[396px] w-full'>
        <img src={Image5} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image5} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image5} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image5} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image5} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image5} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image5} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image5} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image5} alt="" />
        </div>
        </div>
        </div>}
      {value === 1 && <div className=' flex justify-center   mb-[3rem] mt-[3rem] max-w-[1300px] w-full'>
        <div className='flex flex-wrap justify-between gap-[5px] max-w-[1200px] w-full'>
       <div className='max-w-[396px] w-full'>
        <img src={Image4} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image4} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image4} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image4} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image4} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image4} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image4} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image4} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image4} alt="" />
        </div>
        </div>
        </div>}
      {value === 2 &&<div className=' flex justify-center   mb-[3rem] mt-[3rem] max-w-[1300px] w-full'>
        <div className='flex flex-wrap justify-between gap-[5px] max-w-[1200px] w-full'>
       <div className='max-w-[396px] w-full'>
        <img src={Image3} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image3} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image3} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image3} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image3} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image3} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image3} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image3} alt="" />
        </div>
          <div className='max-w-[396px] w-full'>
        <img src={Image3} alt="" />
        </div>
        </div>
        </div>}
      </div>
    
  );
};

export default Profile;