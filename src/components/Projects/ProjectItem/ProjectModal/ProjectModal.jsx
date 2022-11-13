import React from "react";
import styles from "./ProjectModal.module.scss";
import Modal from "../../../Modal/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ProjectModal = ({ isModalShow, setIsModalShow, project }) => {
  return (
    <Modal isShow={isModalShow} setIsShow={setIsModalShow}>
      <div className={styles.container}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className={styles.imgs}
        >
          {project.imgs.map((img, index) => (
            <SwiperSlide className={styles.imgWrapper} key={index}>
              <img src={img} alt="project screenshot" />
            </SwiperSlide>
          ))}
        </Swiper>
        <h3>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.techStacks}>
          {project.techStacks.map((tech, index) => (
            <div key={index} className={styles.imgWrapper}>
              <img src={tech} alt="tech logo" />
            </div>
          ))}
        </div>
        <div className={styles.closeButton}>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setIsModalShow(false)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
