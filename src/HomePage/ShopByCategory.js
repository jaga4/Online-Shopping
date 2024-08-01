import Card from 'react-bootstrap/Card';
import Mobile from '../Images/phoneSBC.jpg';
import Laptop from '../Images/LaptopsSBC.jpg';
import Clothes from '../Images/ClothesSBC.jpg';
import Jewellery from '../Images/JewellerySBC.jpg';
import Toys from '../Images/toysSBC.jpg';
import { Link } from 'react-router-dom';
const ShopByCategory=()=>{
    const cartArray=[Laptop,Mobile,Clothes,Jewellery,Toys];
    return(
        <div className='container-fluid'>
            <div className='text-center m-5'>
                <h1 className='text-capitalize'> <u>Shop By Category</u></h1>
            </div>
            <div className='row justify-content-center'>  
            {
                cartArray.map((e,i)=>(
                     
                <div key={i} className='col-md-4 col-12 mb-5'>
                <Link to={'/category'}>
                <Card className="mx-auto" style={{ width: '20rem'}}>
                <Card.Img variant="top" src={e} />
                </Card>
                </Link>
                </div> 
                ))
        
            }
        </div>
        </div>
    )
}
export default ShopByCategory;