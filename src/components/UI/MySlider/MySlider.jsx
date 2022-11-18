import Carousel from 'react-bootstrap/Carousel';
import './MySlider.css'

function MySlider({children,img}) {
  return (
    <Carousel>
      {img?.map((img, index)=>(
        <Carousel.Item src={index}>
        <img
          className="img"
          style={{objectFit: 'cover', height:'70vh'}}
          src={img.src}
          alt="First slide"
        />
        </Carousel.Item>
      ))}
      
    </Carousel>
  );
}

export default MySlider;