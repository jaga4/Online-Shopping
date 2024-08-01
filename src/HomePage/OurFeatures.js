import Card from 'react-bootstrap/Card';
const OurFeaturesComponent=()=>{
 const featuresArr=[
{
    name:"Free Shipping Method",
    iconName:"bi bi-truck",
    desc:`Enjoy free shipping on your orders with our standard delivery option.
          Get your items delivered to your doorstep at no extra cost.`

 },
 {
    name:"Secure Payment System",
    iconName:"bi bi-lock-fill",
    desc:`Experience peace of mind with our secure payment system.
          Your transactions are protected with advanced encryption technology.`

 },
 {
    name:"Promotions New Products on the HomePage",
    iconName:"bi bi-cast",
    desc:`Discover the latest promotions and new products featured on our homepage.
          Stay updated with fresh arrivals and exclusive offers daily.`
 }
]

    return(
        <div className='container'>
     <div className='text-center m-5'>
             <h1 className='text-capitalize'> <u>Our Features</u></h1>
         </div>
         <div className='row justify-content-center'> 
            {
                featuresArr.map((e,i)=>(
                    <div key={i} className='col-md-4 col-12 mb-5 d-flex'>
                         <Card className='mx-auto text-center' style={{ width: '20rem' }}>
                            <Card.Header>
                            <i className={e.iconName} style={{fontSize:"2rem"}}></i>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{e.name}
                                </Card.Title>
                                <Card.Text>
                                {e.desc}
                                </Card.Text>
                                </Card.Body>
                            </Card>

                    </div>
                ))

            }
             </div>
            </div>

    )
}
export default OurFeaturesComponent;