import React, { ReactNode } from 'react';
import Slider from 'react-slick';

interface Image {
    url: string;
    text?: string;
}

const ImageCarousel = ({ images }: { images: Image[] }) => {
  const settings = {
    dots: false,         // Enable navigation dots
    infinite: true,      // Enable infinite scrolling
    speed: 500,          // Transition speed between slides (in ms)
    slidesToShow: 1,     // Number of slides visible at once
    slidesToScroll: 1,   // Number of slides to scroll at a time
    autoplay: true,      // Enable autoplay
    autoplaySpeed: 5000, // Speed of autoplay (in ms, 2000 = 2 seconds)
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
            <div>
                <a href={image.url} target={'_blank'}>
                    <img src={image.url} alt={(index + 1).toString()} />
                </a>
                <p style={{ color: '#9ca3af', fontStyle: 'italic' }}>{image.text}</p>
            </div>
            ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
