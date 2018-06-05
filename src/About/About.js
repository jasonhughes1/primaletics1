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
                  <img className='about-1'   src={require('../assets/about1.jpg')} alt="image of the ocean" />
        </div>
        <div className='image-1'>
                  <img className='about-2'   src={require('../assets/about2.jpg')} alt="image of the ocean" />
        </div>
          <div className='image-2'>
                    <img className='about-3'   src={require('../assets/about3.jpg')} alt="mike kicking" />
        </div>
          <div className='image-3'>
                    <img className='about-4'   src={require('../assets/about4.jpg')} alt="marisa in car" />
        </div>
          <div className='image-4'>
                    <img className='about-5'   src={require('../assets/about5.jpg')} alt="marisa in car" />
        </div>
          <div className='image-6'>
                    <img className='about-6'   src={require('../assets/about6.jpg')} alt="marisa in car" />
        </div>
          <div className='image-7'>
                    <img className='about-6'   src={require('../assets/about6.jpg')} alt="marisa in car" />
        </div>
          <div className='image-8'>
                    <img className='about-8'   src={require('../assets/about6.jpg')} alt="marisa in car" />
        </div>
          <div className='image-9'>
                    <img className='about-9'   src={require('../assets/about9.jpg')} alt="marisa in car" />
        </div>
          <div className='image-10'>
                    <img className='about-10'   src={require('../assets/about10.jpg')} alt="marisa in car" />
        </div>
          <div className='image-11'>
                    <img className='about-11'   src={require('../assets/about11.jpg')} alt="marisa in car" />
        </div>
          <div className='image-12'>
                    <img className='about-12'   src={require('../assets/about12.jpg')} alt="marisa in car" />
        </div>
          <div className='image-13'>
                    <img className='about-13'   src={require('../assets/about13.jpg')} alt="marisa in car" />
        </div>
          <div className='image-14'>
                    <img className='about-14'   src={require('../assets/about14.jpg')} alt="marisa in car" />
        </div>
          <div className='image-15'>
                    <img className='about-15'   src={require('../assets/about15.jpg')} alt="marisa in car" />
        </div>
          <div className='image-16'>
                    <img className='about-16'   src={require('../assets/about16.jpg')} alt="marisa in car" />
        </div>
          <div className='image-17'>
                    <img className='about-17'   src={require('../assets/about17.jpg')} alt="marisa in car" />
        </div>
          <div className='image-18'>
                    <img className='about-18'   src={require('../assets/about12.jpg')} alt="marisa in car" />
        </div>
          <div className='image-19'>
                    <img className='about-19'   src={require('../assets/about19.jpg')} alt="marisa in car" />
        </div>
          <div className='image-20'>
                    <img className='about-20'   src={require('../assets/about20.jpg')} alt="marisa in car" />
        </div>
          <div className='image-21'>
                    <img className='about-21'   src={require('../assets/about21.jpg')} alt="marisa in car" />
        </div>
          <div className='image-22'>
                    <img className='about-22'   src={require('../assets/about22.jpg')} alt="marisa in car" />
        </div>
          <div className='image-23'>
                    <img className='about-23'   src={require('../assets/about23.jpg')} alt="marisa in car" />
        </div>
          <div className='image-24'>
                    <img className='about-24'   src={require('../assets/about24.jpg')} alt="marisa in car" />
        </div>
          <div className='image-25'>
                    <img className='about-25'   src={require('../assets/about25.jpg')} alt="marisa in car" />
        </div>

      </Slider>
      <div className='bios'>
      <div className='mike-container'>
        <h1 className='mike-name'>Mike Pastor</h1>
        <img className='mike-bio'   src={require('../assets/mike-grapple.jpg')} alt="mike grappling" />
        <p className='bio-text'>Mike Pastor has dedicated himself to a life helping others achieve their physical, mental and spiritual goals. He is the co-founder, with his wife, of a movement academy in Puerto Rico where he works with all ages to achieve their individual goals.

Mike has over two decades of training in Brazilian Jiu Jitsu, kickboxing, boxing and mixed martial arts. He has studied with world champions in these fields, completed his training in Muay Thai in Thailand and has spent the last four months training BJJ with over 13 schools around the world. He is MovNat Tier 2 certified, 200hr YTT, Functional Movement Screen certified, Neufit certified and has trained extensively in muscle and joint rehabilitation.

Mike’s philosophy and dedication come from a difficult childhood that labeled him, punished him and eventually led him into run-ins with the law.  He used that time to focus on understanding the complex forces that led him down this path and has used that wisdom to be a better teacher and mentor to others. His focus is on a compassionate and empathetic method that brings lasting change to his clients. Mike believes we are all a collection of our interpretations of the world around us. A world that affects how we move, react and engage with ourselves and each other. He believes that health and wellness involve our minds, bodies, relationships, and environments. His goal is a lasting change in all of these endeavors for his clients. </p>
</div>
<div className='marisa-container'>
  <h1 className='marisa-name'>Marisa Hughes</h1>
  <img className='marisa-bio'   src={require('../assets/pants.jpg')} alt="mike grappling" />
  <p className='bio-text'>Marisa Hughes, and her husband, co-founded The Movement Academy in Puerto Rico teaching their own program Primaletics; a combination of physical strength and mobility while never ignoring the mental and emotional history of the client.  Understanding the mind/ body connection is the only way to truly help someone create a meaningful connection that leads to lasting change. We all have different interpretations and perceptions of experiences and that's a beautiful thing, it’s incumbent for the trainer to see this as way into helping their client not as a barrier to change.
   As a competitive gymnast, Marisa was able to grow out of her introverted childhood and she saw what athletics could do for one’s confidence and self esteem.
   Marisa has a BS in nutrition for Fordham University, and has completed her 200 hour yoga teacher training. She is tier 2 MovNat certified, Neufit certified and a Holistic Health Coach through Institute of Integrated Nutrition. She studies Brazilian jiu jitsu and has completed an exhaustive course in Muay Thai in Thailand. She has travelled extensively, studying with masters in exercise physiology and physical rehab. She is currently studying the advanced and master Neuro Linguistics Programming certifications (NLP).</p>
</div>
      <div className='james-container'>
        <h1 className='james-name'>James Connolly</h1>
            <img className='james-bio'   src={require('../assets/james-kitchen.jpg')} alt="james in the kitchen" />
        <p className='bio-text'>James Connolly is an artist, chef, non-proft founder and documentary film producer.  He focuses primarily on physical and mental health and social justice issues.  His non-profit is centered around issues of wellness and diet in inner-city public schools and teaches around 1500 kids a week in 18 schools across New York City.  His documentary film production team has produced films from Transmilitary, a film about active duty military transgender soldiers to Michael Moore’s latest documentary, Where to Invade Next, where Moore explores issues like mass incarceration, school food, criminal justice and student debt.  James lives in New York City with his three children. </p>
        </div>
      </div>
    </div>
    )
  }
}

export default About;
