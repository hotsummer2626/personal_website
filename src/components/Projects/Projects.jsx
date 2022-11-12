import React, { useState } from "react";
import styles from "./Projects.module.scss";
import { projectList } from "../../static";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [isViewMoreButtonActive, setIsViewMoreButtonActive] = useState(false);

  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <div className={styles.listWrapper}>
        {projectList.map((project) => (
          <div className={styles.listItem} key={project.id}>
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
            >
              <span>View More</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
