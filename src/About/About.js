import Slider from 'react-slick';
import React from 'react';
import css from './About.css';
import { NavLink } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';

class About extends React.Component {
  render() {

    var settings = {
      arrows: true,
      dots: true,
      draggable: true,
      swipeToSlide: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <div className='image-display'>
      <Route path='/' component={Header} />
      <div className='logo-container'>
        <img className="logo" src={require('../assets/bear.png')} alt="logo" />
      </div>
      <h3 className='about-title'>A little about us...</h3>
      <Slider {...settings}>
        <div className='image-0'>
                  <img className='mikeandmarisa'   src={require('../assets/mikeandmarisa.jpg')} alt="image of the ocean" />
        </div>
        <div className='image-1'>
                  <img className='ocean-image'   src={require('../assets/ocean.JPG')} alt="image of the ocean" />
        </div>
          <div className='image-2'>
                    <img className='mikekick'   src={require('../assets/mikekick.jpg')} alt="mike kicking" />
        </div>
          <div className='image-3'>
                    <img className='pants'   src={require('../assets/pants.jpg')} alt="marisa in car" />
        </div>
          <div className='image-4'>
                    <img className='primativecooking'   src={require('../assets/primitivecooking.jpg')} alt="marisa in car" />
        </div>
          <div className='image-5'>
                    <img className='pistol'   src={require('../assets/pistol.jpg')} alt="marisa in car" />
        </div>

      </Slider>
      <div className='bios'>
      <div className='mike-container'>
        <h1 className='mike-name'>Mike Pastor</h1>
        <p className='bio-text'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
</div>
<div className='marisa-container'>
  <h1 className='marisa-name'>Marisa Hughes</h1>
  <p className='bio-text'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malnce the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
</div>
      <div className='james-container'>
        <h1 className='james-name'>James Connolly</h1>
        <p className='bio-text'>Contrary to popular belief, Lorem Ipsum is not tur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </div>
      </div>
    </div>
    )
  }
}

export default About;
