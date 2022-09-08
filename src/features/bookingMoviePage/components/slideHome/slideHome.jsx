import React from "react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper/core";
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import movie1 from "../../../../assets/mp4/onepiece.mp4";
import movie2 from "../../../../assets/mp4/avatar.mp4";
import movie3 from "../../../../assets/mp4/detroit.mp4";
import TrailerView from "../../../../components/trailerView/trailerView";
import "./slideHome.css";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

SlideHome.propTypes = {};
const moviesSlide = [
   {
      id: 1,
      name: "One Piece Film: Red",
      digital: "2D",
      movieDemo: movie1,
      movieLink: "https://www.youtube.com/watch?v=g7dE-HAmqWU",
   },
   {
      id: 2,
      name: "AVATAR",
      digital: "3D",
      movieDemo: movie2,
      movieLink: "https://www.youtube.com/watch?v=a8Gx8wiNbs8&t=36s",
   },
   {
      id: 3,
      name: "Detroit Become The Human",
      digital: "IMAX",
      movieDemo: movie3,
      movieLink: "https://www.youtube.com/watch?v=8a-EObAhYrg",
   },
];

function SlideHome(props) {
   return (
      <Swiper
         className="mySwiper swiper-container mySwiper"
         loop={true}
         centeredSlides={true}
         autoplay={{
            delay: 30000,
            disableOnInteraction: false,
         }}
         pagination={{
            clickable: true,
         }}
         navigation={true}
      >
         {moviesSlide.map((movie, index) => (
            <SwiperSlide className="swiper-slide" key={movie.id}>
               <section className="pageMovie">
                  <div>
                     <video src={movie.movieDemo} muted="true" autoplay="true" loop="true"></video>
                     <div className="overlay"></div>
                     <div className="slideVideo--content">
                        <div className="slideVideo--content__imdb d-flex align-items-center">
                           <i className="fas fa-star"></i>
                           <i className="fas fa-star"></i>
                           <i className="fas fa-star"></i>
                           <i className="fas fa-star"></i>
                           <i className="fas fa-star"></i>
                        </div>
                        <div className="slideVideo--content__name">{movie.name}</div>
                        <div className="slideVideo--content__digital">{movie.digital} Digital</div>
                        <div className="slideVideo--content__watch d-flex align-items-center">
                           <TrailerView trailer={movie.movieLink}></TrailerView>
                           <div className="slideVideo--content__watch-title">WATCH TRAILER</div>
                        </div>
                     </div>
                  </div>
               </section>
            </SwiperSlide>
         ))}
      </Swiper>
   );
}

export default SlideHome;
