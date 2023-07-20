"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper CSS
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// Swiper Modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ProjectCardAlpha } from "./project-card";

const projects = [
  {
    id: 1,
    title: "zoo rush thumb expression rays start adjective slept major da.",
    img: "project-1.jpg",
  },
  {
    id: 2,
    title: "equally pot pain spite inch wore substance forgotten s.",
    img: "project-2.jpg",
  },
  {
    id: 3,
    title: "is thirty floating entirely fierce complex pair news occur.",
    img: "project-3.jpg",
  },
  {
    id: 4,
    title: "sitting rope globe deeply none .",
    img: "project-4.jpg",
  },
  {
    id: 5,
    title: "live mountain carried claws orange party differen.",
    img: "project-5.jpg",
  },
  {
    id: 6,
    title: "but no century wherever rush tropical hearing camera smallest.",
    img: "project-6.jpg",
  },
  {
    id: 7,
    title:
      "spring mind orange skill where additional chest occasionally moveme.",
    img: "project-7.jpg",
  },
  {
    id: 8,
    title: "figure win expect bow motor rate yourself one angle sh.",
    img: "project-8.jpg",
  },
];

const ProjectSlider = () => {
  const items = projects;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      // navigation
      // pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },

        1140: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} className="max-sm:px-4">
          <ProjectCardAlpha title={item.title} img={item.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSlider;
