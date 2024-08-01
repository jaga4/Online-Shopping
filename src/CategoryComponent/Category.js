import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Mobile from '../Images/phoneSBC.jpg';
import Laptop from '../Images/LaptopsSBC.jpg';
import Clothes from '../Images/ClothesSBC.jpg';
import Jewellery from '../Images/JewellerySBC.jpg';
import Toys from '../Images/toysSBC.jpg';
import { Link } from 'react-router-dom';
import NavbarComponent from '../HomePage/Navbar';
import Footer from '../HomePage/FooterComponent';
import BackToTopButton from '../HomePage/BackToTopComponent';
const Category=()=>{
    let CategoryArr=[
        {
            Title:"Laptops",
            name:"Laptop",
            src:Laptop,
            desc:`Discover our range of high-performance laptops for all your needs.
                  Experience powerful computing with sleek and portable designs.`
        },
        {
            Title:"Mobiles",
            name:"Mobile",
            src:Mobile,
            desc:`Explore our latest collection of smartphones and accessories.
                  Stay connected with cutting-edge technology and innovative features.`
        },
        {
            Title:"Clothes",
            name:"Tshirt",
            src:Clothes,
            desc:`Browse our stylish and comfortable clothing collection.
                  Discover the latest fashion trends for every occasion.`
        },
        {
            Title:"Jewellery",
            name:"Jewellery",
            src:Jewellery,
            desc:`Explore our exquisite collection of fine jewellery.
                  Find the perfect piece to complement your style and elegance.`
        },
        {
            Title:"Toys",
            name:"Toy",
            src:Toys,
            desc:`Discover our fun and educational toys for all ages.
                  Spark joy and creativity with our wide selection of playthings.`
        }
    ]
    return(
        <div>
            <NavbarComponent/>
        <div className='container-fluid'>
            <div className='text-center m-5'>
                <h1 className='text-capitalize'> <u>Category</u></h1>
            </div>
            <div className='row justify-content-center'>  
            {
                CategoryArr.map((e,i)=>(
                     
                <div key={i} className='col-md-4 col-12 mb-5'>
                <Card className="mx-auto" style={{ width: '18rem'}}>
                <Card.Img variant="top" src={e.src} />
                <div className="card-body">
                <h5 className="card-title">{e.Title}</h5>
                <p className="card-text">{e.desc}</p>
                <Button variant="primary" as={Link} to={`/products?category=${e.name}`} className='w-100'>View</Button>
                </div>
                </Card>
                </div> 
                ))
        
            }
        </div>
        </div>
        <Footer/>
        <BackToTopButton/>
        </div>
    )
}
export default Category;