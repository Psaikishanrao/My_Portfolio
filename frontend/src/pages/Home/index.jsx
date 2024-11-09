import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Project from './Project'
import Courses from './Courses'
import Contact from './Contact'
import Footer from './Footer'
import LeftSider from './LeftSider';

function Home() {
  return (
    <>
    <Header/>
    <div className='bg-primary px-40 sm:px-5'>
       <Intro/>
       <About/>
       <Experiences />
       <Project/>
       <Courses/>
       <Contact/>
       <Footer />
       <LeftSider/>
    </div>

</>
  )
}

export default Home