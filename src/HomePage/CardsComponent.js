import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardsComponent.css'
import {Link} from 'react-router-dom';
const CardsComponent = (props)=>{
    return(
        <div className='container'>
        <div className='text-center m-5'>
            <h1 className='text-capitalize'> <u>{props.Title}</u></h1>
        </div>
        <div className='row justify-content-center'> 
            {
                props.Products.map((e,i)=>(
                    <div key={i} className='col-md-4 col-12 mb-5 d-flex'>
                        <Card className='mx-auto text-center' style={{ width: '20rem' }}>
                            <Card.Header>
                            <Card.Img variant="top" src={e.src} />
                            {e.New && (
                            <div className='new-product'>
                            <span className='badge py-2 px-3 badge-pill badge-danger'>New</span>
                            </div>
                             )}
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{e.name}
                                    <div className='product-rating'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star"></i>
                                    </div>
                                </Card.Title>
                                <Card.Text>
                                {e.desc}
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                     <div className="price-tag">
                                    <h4>{e.price}</h4>
                                </div>
                                <Button variant="primary" as={Link} to={`/products-view/${e.id}`}  className='w-100'>View</Button>
                                </Card.Footer>
                            </Card>
                        </div>
                ))

            } 
            </div>

        </div>
    )
}
export default CardsComponent;