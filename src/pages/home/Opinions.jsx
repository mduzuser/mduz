import './home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';

function Opinions() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows:false
  };

  return (
    <>
      <div className="container">
         <div className="opinions">

          <p id='testimonials' className="opinions__title">CLIENT TESTIMONIALS</p>

         <Slider {...settings}>
             {
              data.map((item)=>(
                <div className="opinion">
                <div className="opinion__img">
                    <img src={item.img} alt="user" />
                </div>

                <p className="opinion__user">{item.name}</p>

                <p className="opinion__title">{item.title}</p>

                <p className="opinion__description">
                 " {item.description}"
                </p>
           </div>
              ))
             }
        </Slider>
         </div>
      </div>
    </>
  )
}

const data = [
  {
    id:1,
    name: 'John Doe',
    img:"images/1.jpeg",
    title: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ipsum et purus eleifend consectetur.'
  },
  {
    id:2,
    name: 'Jane Smith',
    img:"images/3.jpg",
    title: 'Product Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ipsum et purus eleifend consectetur.'
  },
  {
    id:3,
    name: 'David Johnson',
    img:"images/2.jpeg",
    title: 'UX/UI Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ipsum et purus eleifend consectetur.'
  },
  {
    id:4,
    name: 'Mike Wilson',
    img:"images/4.jpg",
    title: 'Project Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ipsum et purus eleifend consectetur.'
  },
  {
    id:5,
    name: 'Michael Brown',
    img:"images/6.jpg",
    title: 'QA Engineer',
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ipsum et purus eleifend consectetur.'
  }

]

export default Opinions