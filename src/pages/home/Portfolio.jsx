import './home.css'

function Portfolio() {
  return (
    <>
      <div className="portfolio">
        <span id='portfolio'></span>
          <div className="container">
               <div className="portfolio__links">
                  <div className="portfolio__link">
                      <div className="portfolio__link-img">
                          <img src="images/blog.webp"  className="portfolio__link-imgImg" />
                      </div>

                      <div className="portfolio__link-view">
                        <p className="portfolio__link-title">1. Blog Posts</p>
                        <p className="portfolio__link-type">(Java Scripts)</p>
                        <p className="portfolio__link-visit">Go to Website</p>
                      </div>
                  </div>

                  <div className="portfolio__link">
                      <div className="portfolio__link-img">
                          <img src="images/quiz.jpg"  className="portfolio__link-imgImg" />
                      </div>

                      <div className="portfolio__link-view">
                        <p className="portfolio__link-title">2. Quiz App</p>
                        <p className="portfolio__link-type">(Java Scripts)</p>
                        <p className="portfolio__link-visit">Go to Website</p>
                      </div>
                  </div>

                  <div className="portfolio__link">
                      <div className="portfolio__link-img">
                          <img src="images/todo.jpeg"  className="portfolio__link-imgImg" />
                      </div>

                      <div className="portfolio__link-view">
                        <p className="portfolio__link-title">3. To Do List</p>
                        <p className="portfolio__link-type">(Java Scripts)</p>
                        <p className="portfolio__link-visit">Go to Website</p>
                      </div>
                  </div>

                  <div className="portfolio__link">
                      <div className="portfolio__link-img">
                          <img src="images/movie.png"  className="portfolio__link-imgImg" />
                      </div>

                      <div className="portfolio__link-view">
                        <p className="portfolio__link-title">4. Movies App</p>
                        <p className="portfolio__link-type">(Java Scripts)</p>
                        <p className="portfolio__link-visit">Go to Website</p>
                      </div>
                  </div>

                  <div className="portfolio__link">
                      <div className="portfolio__link-img">
                          <img src="images/player.jpg"  className="portfolio__link-imgImg" />
                      </div>

                      <div className="portfolio__link-view">
                        <p className="portfolio__link-title">5. Music Player</p>
                        <p className="portfolio__link-type">(Java Scripts)</p>
                        <p className="portfolio__link-visit">Go to Website</p>
                      </div>
                  </div>

                  <div className="portfolio__link">
                      <div className="portfolio__link-img">
                          <img src="images/tictac.png"  className="portfolio__link-imgImg" />
                      </div>

                      <div className="portfolio__link-view">
                        <p className="portfolio__link-title">6. Tic Tao Tic</p>
                        <p className="portfolio__link-type">(Java Scripts)</p>
                        <p className="portfolio__link-visit">Go to Website</p>
                      </div>
                  </div>
               </div>

              <div className="portfolio__link-load">
                   <button className="portfolio__link-more">LOAD MORE</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default Portfolio