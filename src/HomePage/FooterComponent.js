import './FooterComponent.css'; 
const Footer=()=>{
    const iconsArray=["bi bi-facebook","bi bi-twitter-x","bi bi-google","bi bi-instagram","bi bi-linkedin","bi bi-github"]
    const ProductsArray=["Clothes","Electronic Devices","Toys","Jewellery"];
    const LinksArray=["Pricing","Settings","Orders","Help"];
    const ContactArray=[
        {name:"Andhra Pradesh, 533255, INDIA",iconName:"bi bi-house-door-fill" },
        {name:"xyz@gmail.com",iconName:"bi bi-envelope-fill"},
        {name:"+91 9087654321",iconName:"bi bi-telephone-fill"},
        {name:"+91 1234567890",iconName:"bi bi-telephone-fill"}
    ];
    return(
        <footer className='footer'>
            <section className='social-media'>
             <div className='social-media-text'>
               Get connected with us on social networks:
              </div>
              <div className='social-icons'>
                {
                    iconsArray.map((e,i)=>(
                        <a key={i} href='#!' className='text-reset'>
                        <i className={e}></i>
                      </a>
                    ))
                }
          
         </div>  
            </section>

            <section className='footer-content'>
            <div className='footer-columns'>
          <div className='footer-column'>
            <h6 className='footer-title'>
              <i className="bi bi-gem"></i> Online Shopping</h6>
              <p style={{textAlign:"justify"}}>
               Online Shopping is a form of electronic commerce which allows consumers to directly buy goods or services
               from a seller over the Internet using a web browser or a mobile app.
              </p>
            </div>
            <div className='footer-column'>
            <h6 className='footer-title'>Products</h6>
            { 
            ProductsArray.map((e,i)=>(
                <p key={i}><a href='#!' className='text-reset'>{e}</a></p>
            ))
            
            } 
            </div>
            <div className='footer-column'>
            <h6 className='footer-title'>Useful links</h6>
            {
                LinksArray.map((e,i)=>(
                    <p key={i}><a href='#!' className='text-reset'>{e}</a></p>
                ))
            }
            </div>
            <div className='footer-column'>
            <h6 className='footer-title'>Contact</h6>
            {
                ContactArray.map((e,i)=>(
                    <p key={i}><i className={e.iconName}></i> {e.name}</p>
                ))
            }
            </div>
            </div>
            </section>
            <div className='footer-bottom'>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='#!'>
          OnlineShopping.com
        </a>
      </div>
        </footer>

    )
}
export default Footer;