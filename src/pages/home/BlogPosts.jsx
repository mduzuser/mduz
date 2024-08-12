import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import './home.css'

function BlogPosts() {
  return (
    <>
      <div className="container">
          <div className="blog">
          <p id='blog' className="blog__title">Blog Posts</p>

              <div className="posts">
                  <div className="post">
                      <div className="post__img">
                          <img src="images/post.jpg" alt="img" />
                      </div>

                      <div className="post__details">
                          <p className="post__title">
                              Montu is Going to Breakup with Tuntuni
                          </p>

                          <div className="post__detail">
                              <p className="post__date">18, March, 2017 </p>
                              <span></span>
                              <p className="post__comments">33 Compents</p>
                          </div>

                          <p className="post__info">
                              There are many variations of passages of the Lorem Ipsum available, but
                              the majority have suffered alteration in some form, by injected humour,
                              or randomised.
                          </p>

                          <button className="post__btn">
                               Read More
                               <MdOutlineKeyboardArrowRight className='post__btn-icon'/>
                          </button>
                      </div>
                  </div>

                  <div className="post">
                      <div className="post__img">
                          <img src="images/post2.jpg" alt="img" />
                      </div>

                      <div className="post__details">
                          <p className="post__title">
                              Montu is Going to Breakup with Tuntuni
                          </p>

                          <div className="post__detail">
                              <p className="post__date">18, March, 2017 </p>
                              <span></span>
                              <p className="post__comments">33 Compents</p>
                          </div>

                          <p className="post__info">
                              There are many variations of passages of the Lorem Ipsum available, but
                              the majority have suffered alteration in some form, by injected humour,
                              or randomised.
                          </p>

                          <button className="post__btn">
                               Read More
                               <MdOutlineKeyboardArrowRight className='post__btn-icon'/>
                          </button>
                      </div>
                  </div>

                  <div className="post">
                      <div className="post__img">
                          <img src="images/post3.jpg=ws720x480" alt="img" />
                      </div>

                      <div className="post__details">
                          <p className="post__title">
                              Montu is Going to Breakup with Tuntuni
                          </p>

                          <div className="post__detail">
                              <p className="post__date">18, March, 2017 </p>
                              <span></span>
                              <p className="post__comments">33 Compents</p>
                          </div>

                          <p className="post__info">
                              There are many variations of passages of the Lorem Ipsum available, but
                              the majority have suffered alteration in some form, by injected humour,
                              or randomised.
                          </p>

                          <button className="post__btn">
                               Read More
                               <MdOutlineKeyboardArrowRight className='post__btn-icon'/>
                          </button>
                      </div>
                  </div>
              </div>

              <button className="blog__btn">LOAD MORE</button>
          </div>
      </div>
    </>
  )
}

export default BlogPosts