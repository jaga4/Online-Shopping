import Mobile1 from '../Images/Iphone12d.jpg';
import Mobile2 from '../Images/Samsung Galaxy Z.jpg';
import Mobile3 from '../Images/iQOO Z9.jpg';
import Mobile4 from '../Images/realme narzo 70x.jpg';
import Mobile5 from '../Images/OppoF27 pro.jpg';
import Jewellery1 from '../Images/jewellery1.jpg';
import Jewellery2 from '../Images/Silver Necklace.jpg';
import Jewellery3 from '../Images/jewellery3.jpg';
import Jewellery4 from '../Images/JewellerySBC.jpg';
import Jewellery5 from '../Images/jewellery5.jpg';
import Laptop1 from '../Images/Lenovo 8EIN.jpg';
import Laptop2 from '../Images/Hp.jpg';
import Laptop3 from '../Images/Dell.jpg';
import Tshirt1 from '../Images/T-shirt1.jpg';
import Tshirt2 from '../Images/Tshirt2.jpg';
import Tshirt3 from '../Images/Tshirt3.jpg';
import Tshirt4 from '../Images/Tshirt4.jpg';
import Tshirt5 from '../Images/Tshirt5.jpg';
import Toy1 from '../Images/T-Rex.jpg';
import Toy2 from '../Images/Toy2.jpg';
import Toy3 from '../Images/Toy3.jpg';
import Toy4 from '../Images/Toy4.jpg';
import Toy5 from '../Images/Toy5.jpg';


const productArr=[
    {
      id:'1',
      name:"iQOO Z9 5G (Graphene Blue, 8GB RAM, 256GB Storage)",
      src:Mobile3,
      desc:`Z9 5G (Graphene Blue, 8GB RAM, 128GB Storage) | Dimensity 7200 5G Processor | Sony IMX882 OIS Camera | 
            120Hz AMOLED with 1800 nits Local Peak Brightness | 44W Charger in The Box`,
      price:`₹20,999`,
      category: "Mobile",
    },
    {
        id:'2',
        name:"Apple iPhone 12 (Blue, 128 GB)",
        src:Mobile1,
        desc:`Dive into a world of crystal-clear visuals with this iPhone’s Super Retina XDR Display.
             This beast of a smartphone packs the A14 Bionic chip to make for blazing-fast performance speeds.`,
        New:true,
        price:`₹39,999`,
        category: "Mobile",
     },
     {
        id:'3',
        name:"realme NARZO 70x 5G (Forest Green, 6GB RAM,128GB Storage",
        src:Mobile4,
        desc:`The phone comes with a 6.72-inch touchscreen display offering a resolution of 2400x1080 pixels (FHD+).
              It comes with 4GB, 6GB of RAM. `,
        price:`₹14,999`,
        category: "Mobile",
     },
     {
        id:'4',
        name:"SAMSUNG Galaxy Z Flip3 5G (Cream, 128 GB) (8 GB RAM)",
        src:Mobile2,
        desc:`Whether you want to fold it into your pocket, put it into your purse, 
             or slip it into your jeans this Samsung Galaxy Z Flip 3 5G lets you do all of it with ease.`,
        New:true,
        price:`₹37,999`,
        category: "Mobile",
     },
     {
        id:'5',
        name:"OPPO F27 Pro+ 5G (Midnight Navy, 8GB RAM, 256GB Storage)",
        src:Mobile5,
        desc:`The Cosmos Ring Design, with its layers of outer rings and three-dimensional camera structure adds a touch of luxury and elegance.`,
        price:`₹29,999`,
        category: "Mobile",
     },
     {
        id:'6',
        name:"Brass Gold-plated Gold Jewel Set  (Pack of 1)",
        src:Jewellery1,
        desc:`Include relevant details such as the type of metal, gemstone used,
              purity scale, and any unique design elements that make the piece stand out.`,
        New:true,
        price:`₹50,999`,
        category: "Jewellery",

     },
     {
        id:'7',
        name:"ANAYRA Pure Silver Necklace Set For Women",
        src:Jewellery2,
        desc:`ANAYRA Pure Silver Necklace Set For Women, 925 Silver jewelry Set, Gifts,
         Women Necklace Set Design, Elegant jewelry Set For Women, Birthday Gift For Women`,
        price:`₹8,99`,
        category: "Jewellery",
     },
     {
         id:'8',
         name:"Traditional Temple Necklace Jewellery Set for Women (14822s) (Golden)",
         src:Jewellery3,
         desc:`Shining Diva Fashion Latest Stylish Design Fancy Pearl Choker 
               Traditional Temple Necklace Jewellery Set for Women (14822s) (Golden)`,
        price:`₹5,99`,
        category: "Jewellery",
     },
     {
        id:'9',
        name:"Gold Plated Wedding Bridal Dulhan Jewellery Set for Women Girls",
        src:Jewellery4,
        desc:`Peora Golden Indian Traditional Gold Plated Wedding Bridal Dulhan Jewellery Set for Women Girls`,
        price:`₹17,99`,
        category: "Jewellery",

     },
     {
        id:'10',
        name:"Atasi International Crystals Silver Plated Kundan Necklace Jewellery Set ",
        src:Jewellery5,
        desc:`Atasi International Crystals Silver Plated Kundan Necklace Jewellery Set 
              with Earrings and Maang Tikka for Party, Wedding, Engagement`,
        price:`₹2,99` ,
        category: "Jewellery",    
     },
     { 
        id:'11',
        name:"Lenovo IdeaPad 3 Intel Intel Core i3 10th Gen 10110U - (8 GB/256 GB SSD/Windows 11 Home)",
        src:Laptop1,
        desc:`Featuring an Intel Core 10th Gen processor, this laptop lets you experience lag-free performance. 
             And thanks to its 8 GB RAM and 256 GB SSD storage, this fast laptop helps you achieve your productivity goals.`,
        New:true,
        price:`₹34,999`,
        category: "Laptop",

     },
     {
        id:'12',
        name:"HP Laptop 15, 13th Gen Intel® Core™ i5-1334U, 15.6-inch(39.6 cm), FHD, 8GB DDR4(3200 MHZ),512GB SSD.",
        src:Laptop2,
        desc:`HP Laptop 15, 13th Gen Intel® Core™ i5-1334U, 15.6-inch(39.6 cm), FHD,
              8GB DDR4(3200 MHZ),512GB SSD,MSO,Dual speakers,Win 11, Natural Silver, 1.6kg, 15-fd0220TU`,
        price:`₹52,990`,
        category: "Laptop",
     },
     {
        id:'13',
        name:"Dell 15 Thin & Light Laptop, Intel Core i5-1235U Processor/16GB DDR4/512GB SSD/Intel UHD Graphics/15.6",
        src:Laptop3,
        desc:`Dell 15 Thin & Light Laptop, Intel Core i5-1235U Processor/16GB DDR4/512GB SSD/Intel UHD Graphics/15.6" (39.62cm)
               FHD Display/Windows 11 + MSO'21/15 Month McAfee/Carbon Black/Spill-Resistant KB/1.69kg`,
        price:`₹54,990`,
        category: "Laptop",
     },
     {
        id:'14',
        name:"AUSK T-shirt",
        src:Tshirt2,
        desc:`AUSK T-shirt for Mens Double Stripes on Chest`,
        price:`₹208`,
        category: "Tshirt",

     },
     {
           id:'15',
           name:"Lymio Men T-Shirt",
           src:Tshirt3,
           desc:`Lymio Men T-Shirt || T-Shirt for Men || Plain T Shirt || T-Shirt (Polo-18-21)`,
           price:`₹379`,
           category: "Tshirt",


     },
     {
        id:'16',
        name:"Men Colorblock Round Neck Cotton Blend White, Black T-Shirt",
        src:Tshirt1,
        desc:`A T-shirt (also spelled tee shirt, or tee for short) is a style of fabric shirt named after the T shape of its body and sleeves.`,
        New:true,
        price:`₹699`,
        category: "Tshirt",

     },
     {
       id:'17',
       name:"I ENTERPRISE Cotton Blend T-Shirt",
       src:Tshirt4,
       desc:`I ENTERPRISE Cotton Blend Regular Fit Round Neck Plain Solid Full Sleeve T-Shirt for Men-&-Boys`,
       price:`₹399` ,
       category: "Tshirt",
     },
     {
        id:'18',
        name:"GRECIILOOKS Men's T-Shirt",
        src:Tshirt5,
        desc:`GRECIILOOKS Men's Regular Fit T-Shirt`,
        price:`₹399`,
        category: "Tshirt",
     },
     {
        id:'19',
        name:"Toybot T-Rex Dinosaur Toys with Biting Roaring Sound Effect Will Shake Head Swing Tail",
        src:Toy1,
        desc:`Dinosaur Toys - Activate The T-Rex Dinosaur Toy with Biting, Roaring Features, Head and Tail Wagging, and Lights. 
              Realistic Tyrannosaurus Rex Multifunction RC Trex Toys for Kids Ages 3-5. `,
        New:true,
        price:`₹499`,
        category: `Toy`,
     },
     {
        id:'20',
        name:"Galaxy Hi-Tech® Pioneer Bot Robot Colorful Lights and Music",
        src:Toy2,
        desc:`Galaxy Hi-Tech® Pioneer Bot Robot Colorful Lights and Music | 
              All Direction Movement Dancing Robot Toys for Boys and Girls multi-colour`,
        price:`₹589`,
        category: "Toy",
     },
     {
        id:'21',
        name:"GRAPHENE Exciting Pack of 2 Monster Trucks for Boys 3-7 Years Old, Friction Powered Car Toys",
        src:Toy3,
        desc:`GRAPHENE Exciting Pack of 2 Monster Trucks for Boys 3-7 Years Old, Friction Powered Car Toys,
             Durable High-Density Alloy and Non-Toxic Plastic, Non-Slip Tires for Educational Play`,
        price:`₹155`,
        category: "Toy",
     },
     {
        id:'22',
        name:"EITHEO Baby Groot Pen Stand and Planter Pot - Multi-Functional Table Organizer",
        src:Toy4,
        desc:`EITHEO Baby Groot Pen Stand and Planter
             Pot - Multi-Functional Table Organizer and Decorative Showpiece - 16cm, PVC Material (Design 3)`,
        price:`₹399` ,
        category: "Toy",   
     },
     {
        id:'23',
        name:"Wowheads Spiderman Infinity Wars Figurine",
        src:Toy5,
        desc:`Wowheads Spiderman Infinity Wars Figurine 1/6 Scale Polyresin Fragile Handmade`,
        price:`₹2,399`,
        category: "Toy",
     }
    ]

    export default productArr; 