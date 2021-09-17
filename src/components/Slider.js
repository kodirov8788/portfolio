import Slider from "awesome-react-carousel";
import { CgEnter } from "react-icons/cg";
import { Link } from "react-router-dom";

const Carousel = () => {
  const slides = [
    <img src="https://i.ibb.co/yhgnphj/YOUTUBE-CLONE.jpg" alt="youtube" />,
    <img src="https://i.ibb.co/742Z7nW/WEIGHT-CONVERTER.jpg" alt="youtube" />,
    <img src="https://i.ibb.co/QHw6xqv/TODO-LIST.jpg" alt="youtube" />,
    <img
      src="https://i.ibb.co/QM8bRZx/WEATHER-APPLICATION.jpg"
      alt="youtube"
    />,
    <img src="https://i.ibb.co/PzxTB5g/SIMPLE-CALCULATOR.jpg" alt="youtube" />,
    <img src="https://i.ibb.co/jr77kX9/SIDEBAR.jpg" alt="youtube" />,
    <img src="https://i.ibb.co/zP29By1/SALARY-APPLICATION.jpg" alt="youtube" />,
    <img src="https://i.ibb.co/1Zhnx3X/HOME-CLOCK.jpg" alt="youtube" />,
    <img src="https://i.ibb.co/d2KL6G9/FUNCTIONAL-TABLE.jpg" alt="youtube" />,
    <img src="https://i.ibb.co/cxtW6r4/DARK-LIGHT-MODE.jpg" alt="youtube" />,
    <img src="https://i.ibb.co/fpMh463/BOOKLIST.jpg" alt="youtube" />,
    <img src="https://i.ibb.co/Tqg8762/whats-app.jpg" alt="youtube" />,
    <img src="https://i.ibb.co/h2Pvyx8/APPLE-CALCULATOR.jpg" alt="youtube" />,
  ];

  return (
    <div className="slider__scroll">
      <Slider
        slides={slides}
        slidesToShow={1}
        speed={2000}
        autoplay={true}
        arrows={false}
        autoplaySpeed={3000}
      />
      <div className="home__IconsContainer">
        <div className="home__techIcons">
          <h5>Move To Projects</h5>
          <Link to="/project">
            <CgEnter />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
