import BackToTopButton from "../HomePage/BackToTopComponent";
import Footer from "../HomePage/FooterComponent";
import NavbarComponent from "../HomePage/Navbar";
import src from '../Images/AboutImage.jpg';
import './AboutUs.css'; // Import the custom CSS file
import Carousel from 'react-bootstrap/Carousel';
import man1 from '../Images/man1.png';
import man2 from '../Images/man2.png';
import man3 from '../Images/man3.png';
import OurFeaturesComponent from "../HomePage/OurFeatures";

const AboutUsComponent = () => {
    return (
        <div>
            <NavbarComponent />
            <div className="py-5 my-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="text-capitalize"><u>About Us</u></h2>
                    </div>
                    <div className="row d-flex justify-content-center custom-row">
                        <div className="col-md-5 d-flex justify-content-center custom-column">
                            <img src={src} className="img-fluid rounded shadow-lg" alt="about" />
                        </div>
                        <div className="col-md-5 custom-column">
                            <div>
                                <h3>Our Project</h3>
                                <p className="mt-3">
                                    Online Shopping Website is a comprehensive e-commerce platform, enabling users to browse, search,
                                    and purchase products from various categories. The website offers an intuitive interface with featured products
                                    and promotions on the homepage, allowing users to register, log in, and manage their profiles. Key functionalities
                                    include a product catalog, search, shopping cart, secure checkout and payment options, user authentication, order
                                    history, admin dashboard, reviews and ratings, and a responsive design for accessibility across devices. The
                                    project aims to deliver a seamless and secure online shopping experience while providing administrators with
                                    efficient management capabilities.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center my-5 py-5 rounded">
                        <div className="col-md-10 col-10 mx-auto">
                            <Carousel fade className="bg-secondary bg-opacity-25 custom-carousel" style={{ borderRadius:"50px"}}>
                                <Carousel.Item>
                                    <div className="profile-container">
                                        <img src={man1} className="rounded-circle img-fluid profile-img" alt="man1" />
                                        <div className="profile-content">
                                            <h3>Jagadeesh</h3>
                                            <p className="mt-2"> He is a "Front End Developer" specializes in creating visually appealing and user-friendly web interfaces.
                                                Proficient in HTML, CSS, and JavaScript to build responsive and interactive websites.
                                                Collaborates with designers to transform creative visions into functional web pages.
                                                Ensures cross-browser compatibility and optimizes performance for seamless user experiences.
                                                Continuously learns and adapts to emerging web technologies and best practices.
                                                </p><br></br>
                                                
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="profile-container">
                                        <img src={man2} className="rounded-circle img-fluid profile-img" alt="man2" />
                                        <div className="profile-content">
                                            <h3>Pavan</h3>
                                            <p>He a Back End Developer focuses on server-side logic, databases, and application integration.
                                            Expert in programming languages such as Java, Python, Ruby, and PHP to build robust server applications.
                                            Designs and maintains databases, ensuring data integrity and efficient storage solutions.
                                            Collaborates with front end developers to create seamless and responsive user experiences.
                                            Continuously enhances system performance, security, and scalability to meet growing demands.
                                              </p><br></br>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="profile-container">
                                        <img src={man3} className="rounded-circle img-fluid profile-img" alt="man3" />
                                        <div className="profile-content">
                                            <h3>Pradeep</h3>
                                            <p>A UI/UX Developer specializes in creating intuitive and engaging user interfaces and experiences.
                                                Proficient in design tools like Sketch, Figma, and Adobe XD, as well as front-end technologies.
                                                Collaborates with stakeholders to understand user needs and translate them into functional designs.
                                                Focuses on usability, accessibility, and aesthetics to enhance user satisfaction and interaction.
                                                Continuously tests and iterates designs based on user feedback and emerging trends.
                                                </p><br></br>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <OurFeaturesComponent/>
                </div>

            </div>
            <Footer />
            <BackToTopButton />
        </div>
    );
}

export default AboutUsComponent;
