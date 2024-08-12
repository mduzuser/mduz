import AboutMe from './AboutMe'
import Education from './Education'
import Work from './Work'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Opinions from './Opinions'
import HireMe from './HireMe'
import BlogPosts from './BlogPosts'
import ContactMe from './ContactMe'
import './home.css'
import Greeting from './Greeting'

function Home() {
  return (
    <>
      <div className="home__bg">
        <img src="images/bg.jpg"/>
      </div>

      <div className="home">
        <Greeting/>
      </div>

      <AboutMe/>
      <Education/>
      <Work/>
      <Skills/>
      <Portfolio/>
      <Opinions/>
      <HireMe/>
      <BlogPosts/>
      <ContactMe/>
    </>
  )
}

export default Home