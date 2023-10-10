import React, { useState } from 'react'
import styles from './Testimonial.module.css'
import Reveal from '../Reveal/Reveal'
import testimonialData from '../../testimonialData'
import TestimonialSlider from './TestimonialSlider/TestimonialSlider'

const Testimonial = () => {

  const [curIndex, setCurIndex] = useState(0);

  const nextTestimonial = () => {
    setCurIndex((nextIndex) =>
    nextIndex === testimonialData.length - 1 ? 0 : nextIndex +1
    );
  };

  const previousTestimonial = () => {
    setCurIndex((previousIndex) =>
    previousIndex === 0 ? testimonialData.length -1 : previousIndex -1
    );
  };

  return (
    <section id='testimonial' className={styles['testimonial-slider']}>
        <Reveal>
            <div className='conteiner'>
              <h2>Favorites Quotes</h2>
                <TestimonialSlider
                  testimonial = {testimonialData[curIndex]}
                  nextTestimonial = {nextTestimonial}
                  previousTestimonial = {previousTestimonial}
                />
            </div>
        </Reveal>
    </section>
  )
}

export default Testimonial