import Carousel from "react-bootstrap/Carousel";
import maPhoto from "../../src/imageInSrc.jpg";

function UncontrolledExample() {
  return (
    <Carousel
      style={{ width: "400px", margin: "20px auto" }}
      className="Carousel"
    >
      <Carousel.Item>
        <img className="d-block w-100" src={maPhoto} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imageInPublic.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
