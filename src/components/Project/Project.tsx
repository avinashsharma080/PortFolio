import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3> Authorized Vehicle Entry using YOLO</h3>
              <p>
              Implemented a comprehensive security solution leveraging Computer Vision with OpenCV, YOLO (You Only Look
              Once), and OpenALPR for efficient vehicle monitoring within residential premises. Utilized YOLO to create bound
              ing boxes around vehicles and license plates, enabling precise identification. The extracted license plate images were
              then processed through OpenALPR to obtain the corresponding number plates.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Deep Learning</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>Hostel Management system</h3>
              <p>
              Developed a comprehensive Hostel Management System app using Flutter, which seamlessly integrates a visual
              representation of the hostel map. The app features an interactive map displaying individual rooms, each linked to
              detailed occupant information.Upon clicking a room on the map, users can access pertinent details about the current occupant.We also added feature such
              that warden can allot and de-allot rooms and check occupancy
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Flutter,SQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3> Nerve Image Segmentation Using CNN</h3>
              <p>
              Adapted a traditional Convolutional Neural Network (CNN) architecture for a specialized task—segmentation of the
              nerve section from ultrasound images of the neck. This involved fine-tuning the network’s architecture and training
              parameters to enhance its capability to accurately identify and delineate the nerve region within ultrasound images.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python, CNN ,Pytorch</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3> Open Souce Contribution </h3>
              <p>
              Pytorch-ignite : Implemented dark mode functionality using Vue.js and resolved issues with the CI/CD pipeline for
              the PyTorch Ignite Codegenerator repository.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>CI/CD, Vuejs</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}