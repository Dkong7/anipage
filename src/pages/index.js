import React, {useState} from 'react'
import FrontComponent from '../components/FrontComponent'
import TextoPro from '../components/TextoPro';
import AniCards from '../components/AniCards';
import {CardObj1, } from '../components/AniCards/Data'


const Home = () => {



  return (
     <>
      <FrontComponent/>
      <TextoPro/>
      <AniCards {...CardObj1}/>
     </>
  )
};

export default Home