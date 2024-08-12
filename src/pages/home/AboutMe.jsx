import './home.css'

function AboutMe() {
  return (
    <>
      <div className="container">
         <div className="about">
             <div className="aboutMe">
                <div className="aboutMe__img">
                    <div className="aboutMe__img-img">
                        <img src="images/hero.jpg" alt="user" />

                        <div className="aboutMe__img-frame"></div>
                    </div>
                </div>

                <div className="aboutMe__description">
                   <p id='about' className="about__title">About Me</p>

                   <p className="about__text">
                     Hello! I’m Marcuse (Rayimjonov Mukhammad Ali). Web Developer with over 8
                     years of experience. Experienced with all stages of the development cycle
                    for dynamic web projects. Having an in-depth knowledge including advanced
                    HTML5, CSS3, SASS, JavaScript, Redux Toolkit, React JS. Strong background in management
                    and leadership.
                  </p>

                 <p className="about__me">
                    <span className="about__me-main">Name:</span>
                    Marcuse
                 </p>
                 <p className="about__me">
                    <span className="about__me-main"> Date of birth:</span>
                    01 January 2003
                 </p>
                 <p className="about__me">
                    <span className="about__me-main">Nationality:</span>
                    Citizen Of Uzbek
                 </p>
                 <p className="about__me">
                    <span className="about__me-main">Address:</span>
                   101 New Village street. Fergana Quva MFY.
                 </p>
                 <p className="about__me">
                    <span className="about__me-main">Phone:</span>
                    (+998) 90 - 405-2311, (+998) 90 - 411-2311
                 </p>
                 <p className="about__me">
                    <span className="about__me-main">Mail:</span>
                    mrmarcusedev@gmail.com
                 </p>
                </div>
             </div>

             <div className="aboutMe__hobby"></div>
         </div>
      </div>
    </>
  )
}

export default AboutMe