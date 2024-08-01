
import Mobile1 from '../Images/Iphone12d.jpg';
import Mobile2 from '../Images/Samsung Galaxy Z.jpg';
import Jewellery1 from '../Images/jewellery1.jpg';
import Laptop1 from '../Images/Lenovo 8EIN.jpg';
import Tshirt1 from '../Images/T-shirt1.jpg';
import Toy1 from '../Images/T-Rex.jpg';
import CardsComponent from './CardsComponent';

const LatestProducts=()=>{
    const LatestArr=[
    {   id:"2",
        name:"Apple iPhone 12 (Blue, 128 GB)",
        src:Mobile1,
        desc:`Dive into a world of crystal-clear visuals with this iPhone’s Super Retina XDR Display.
             This beast of a smartphone packs the A14 Bionic chip to make for blazing-fast performance speeds.`,
        New:true,
        price:`₹39,999`
     },
     {  id:'4',
        name:"SAMSUNG Galaxy Z Flip3 5G (Cream, 128 GB) (8 GB RAM)",
        src:Mobile2,
        desc:`Whether you want to fold it into your pocket, put it into your purse, 
             or slip it into your jeans this Samsung Galaxy Z Flip 3 5G lets you do all of it with ease.`,
        New:true,
        price:`₹37,999`
     },
     {  id:'6',
        name:"Brass Gold-plated Gold Jewel Set  (Pack of 1)",
        src:Jewellery1,
        desc:`Include relevant details such as the type of metal, gemstone used,
              purity scale, and any unique design elements that make the piece stand out.`,
         New:true,
         price:`₹50,999`

     },{
        id:'11',
        name:"Lenovo IdeaPad 3 Intel Intel Core i3 10th Gen 10110U - (8 GB/256 GB SSD/Windows 11 Home)",
        src:Laptop1,
        desc:`Featuring an Intel Core 10th Gen processor, this laptop lets you experience lag-free performance. 
             And thanks to its 8 GB RAM and 256 GB SSD storage, this fast laptop helps you achieve your productivity goals.`,
        New:true,
        price:`₹34,999`

     },{
        id:'16',
        name:"Men Colorblock Round Neck Cotton Blend White, Black T-Shirt",
        src:Tshirt1,
        desc:`A T-shirt (also spelled tee shirt, or tee for short) is a style of fabric shirt named after the T shape of its body and sleeves.`,
        New:true,
         price:`₹6,99`

     },{
        id:'19',
        name:"Toybot T-Rex Dinosaur Toys with Biting Roaring Sound Effect Will Shake Head Swing Tail",
        src:Toy1,
        desc:`Dinosaur Toys - Activate The T-Rex Dinosaur Toy with Biting, Roaring Features, Head and Tail Wagging, and Lights. 
              Realistic Tyrannosaurus Rex Multifunction RC Trex Toys for Kids Ages 3-5. `,
        New:true,
        price:`₹4,99`

     }]
   
    return(
       <div>
       <CardsComponent Products={LatestArr} Title="Latest Products" />
       </div>
    )
}
export default LatestProducts;