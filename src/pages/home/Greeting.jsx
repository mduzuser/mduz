import Typewriter from 'typewriter-effect'
import './home.css'

function Greeting() {
  return (
    <div>
      <div className="container">
          <div className="greeting">
              <p className="greeting__hello">Hello !</p>
              <p className="greeting__name">
                  I'm
                  <span>
                  <Typewriter
                    options={{
                    strings: ['Marcuse Dev'],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 150
                    }}
                  />
                  </span>
              </p>
              <p className="greeting__prof">Front End Developer (React Js)</p>
          </div>
      </div>
    </div>
  )
}

export default Greeting