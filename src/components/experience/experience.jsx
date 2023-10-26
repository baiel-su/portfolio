import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {motion} from "framer-motion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export const Experience = () => {
  return (
    <div className="xs:px-2     ">
      <h1 className="text-center p-5 text-[orange] text-4xl mb-5">
        Experience
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(239, 178, 96)" }}
          date="2013-2018"
          className=""
          iconClassName="bg-gray-300"
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="text-lg text-gray-800 font-bold">
            Kadamjay Semetey High School, Kyrgyzstan
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "rgb(239, 178, 96)" }}
          date="2020-2023"
          dateClassName="sm:text-gray-50"
          iconClassName="bg-gray-300"
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="text-lg text-gray-800 font-bold">
            North American University, Houston, Texas
          </h3>
          <p>BS in Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(239, 178, 96)" }}
          date="2013-2018"
          className=""
          iconClassName="bg-gray-300"
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="text-lg text-gray-800 font-bold">
            Kadamjay Semetey High School, Kyrgyzstan
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
