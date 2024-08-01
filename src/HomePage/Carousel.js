import Carousel from 'react-bootstrap/Carousel';
import src from '../Images/slider1.jpg';
import src1 from '../Images/slider2.jpg';
import src2 from '../Images/slider3.jpg';

const CarousleComponent=()=>{
    return(
        <Carousel className='m-4'>
        <Carousel.Item style={{ height: '300px' }}>
        <img
          className="d-block w-100"
          src={src} // Placeholder image
          alt="First slide"
          style={{ height: '100%', objectFit: 'cover' }}
        />
          
          <Carousel.Caption>
            <h3>All Variety Of Clothes</h3>
            <p>Shirt, T-Shirt, Skirt, Pants, Jeans, Jacket, Trouser and more..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '300px' }}>
        <img
          className="d-block w-100" style={{ height: '100%', objectFit: 'cover' }}
          src={src1} // Placeholder image
          alt="First slide"
        />
         
          <Carousel.Caption>
            <h3>All Variety Of Jewellery</h3>
            <p>Gemstone, Crystal,Silver,Gunmetal,Gold, and Handcrafted Jewellery and more..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '300px' }}>
        <img
          className="d-block w-100"
          src={src2} // Placeholder image
          alt="First slide"
          style={{ height: '100%', objectFit: 'cover' }}
        />
        
          <Carousel.Caption>
            <h3>All Types Of Electronic Devices</h3>
            <p>
              Computers,Laptops,Mobiles,Television and more..
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  
    )
}

export default CarousleComponent;