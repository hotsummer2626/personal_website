import React, { useState } from "react";
import styles from "./ProjectItem.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ProjectModal from "./ProjectModal/ProjectModal";

const ProjectItem = ({ project }) => {
  const [isViewMoreButtonActive, setIsViewMoreButtonActive] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);

  return (
    <div className={styles.container}>
      <Swiper navigation={true} modules={[Navigation]}>
        {project.imgs.map((img, index) => (
          <SwiperSlide className={styles.imgWrapper} key={index}>
            <img src={img} alt="project screenshot" />
          </SwiperSlide>
        ))}
      </Swiper>
      <h3>{project.name}</h3>
      <div
        className={`${styles.viewMoreButton} ${
          isViewMoreButtonActive && styles.active
        }`}
        onMouseDown={() => setIsViewMoreButtonActive(true)}
        onMouseUp={() => setIsViewMoreButtonActive(false)}
        onClick={() => setIsModalShow(true)}
      >
        <span>View More</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <ProjectModal
        isModalShow={isModalShow}
        setIsModalShow={setIsModalShow}
        project={project}
      />
    </div>
  );
};

export default ProjectItem;
