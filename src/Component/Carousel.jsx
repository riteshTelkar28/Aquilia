import React from 'react';
import Slider from 'react-slick';
import c1 from '../../public/images/c1.jpg';
import c2 from '../../public/images/c2.jpg';
import c3 from '../../public/images/c3.jpg';

const slickStyles = `
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
    transition: all 0.5s ease;
  }
  .slick-slide.slick-active {
    display: block;
  }
  .slick-slide img {
    display: block;
  }
  .slick-center .card-container {
    transform: scale(1.2);
    z-index: 2;
  }
  .slick-slide:not(.slick-center) .card-container {
    transform: scale(0.8);
    opacity: 0.6;
  }
`;

const Carousel = () => {
  const cards = [
    { id: 1, image: c1 },
    { id: 2, image: c2 },
    { id: 3, image: c3 },
    { id: 4, image: c1 }, // duplicate
    { id: 5, image: c2 }, // duplicate
    { id: 6, image: c3 }, // duplicate
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: slickStyles }} />
      <div className="w-full h-[500px] py-16 bg-black">
        <div className="max-w-16xl mx-auto px-4">
          <div className="relative">
            <Slider {...settings}>
              {cards.map((card) => (
                <div key={card.id} className="px-4">
                  <div className="card-container transition-all duration-500 ease-in-out">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="relative overflow-hidden">
                        <img
                          src={card.image}
                          // alt={Slide ${card.id}}
                          className="w-full h-80 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;