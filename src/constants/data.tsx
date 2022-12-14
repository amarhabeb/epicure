export class AppData
{
    static dishesArray: dishCard[]=[
        {   dishName: "Pad Ki Mao",
            dishContent: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chili Brown Coconut",
            restaurantName: 'Claro',
            isSpicy: true,
            isVegitarian: true,
            isVegan: true,
            pathToCover: "/resturants images/nithan-thai.svg",
            price: 88,
            dishTime: "Breakfast"},
        
            {   dishName: "ad Ki Mao",
                dishContent: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
                restaurantName: 'Claro',
                isSpicy: true,
                isVegitarian: true,
                isVegan: false,
                pathToCover: "/resturants images/nithan-thai.svg",
                price: 88,
                dishTime: "Breakfast"},

                {   dishName: "bbbb",
                dishContent: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
                restaurantName: 'Claro',
                isSpicy: true,
                isVegitarian: true,
                isVegan: false,
                pathToCover: "/resturants images/nithan-thai.svg",
                price: 88,
                dishTime: "Breakfast"},

                {   dishName: "bbbb",
                dishContent: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
                restaurantName: 'Claro',
                isSpicy: true,
                isVegitarian: true,
                isVegan: false,
                pathToCover: "/resturants images/nithan-thai.svg",
                price: 88,
                dishTime: "Lanch"},

                {   dishName: "bbbb",
                dishContent: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
                restaurantName: 'Claro',
                isSpicy: true,
                isVegitarian: true,
                isVegan: false,
                pathToCover: "/resturants images/nithan-thai.svg",
                price: 88,
                dishTime: "Dinner"}

];

    static resturantsArray:resturantCard[]=[
         
            {resturantName: 'Claro',
            chefName: "Ran Shmueli", 
            isPopular: true, 
            isNew: false, 
            isOpen: false, 
            pathToCover: "/resturants images/claro.svg",
            starsNumber: 5,
            dishes: this.dishesArray},

        
            {resturantName: 'Kab Kem',
             chefName: "Yariv Malili", 
             isPopular: true, 
            isNew: false, 
            isOpen: false, 
             pathToCover: "/resturants images/Kab kem.svg",
             starsNumber: 4,
             dishes: this.dishesArray},

       
            {resturantName: 'Messa', 
            chefName: "Aviv Moshe", 
            isPopular: true, 
            isNew: false, 
            isOpen: false, 
            pathToCover: "/resturants images/Messa.svg"
            ,
            starsNumber: 5,
            dishes: this.dishesArray},

        
            {resturantName: 'Nitan Thai', 
            chefName: "Shahaf Shabtay", 
            isPopular: false, 
            isNew: true, 
            isOpen: false, 
            pathToCover: "/resturants images/nithan-thai.svg",
            starsNumber: 1,
            dishes: this.dishesArray},

        
            {resturantName: 'Nitan Thai', 
            chefName: "Shahaf Shabtay", 
            isPopular: false, 
            isNew: true, 
            isOpen: false, 
            pathToCover: "/resturants images/nithan-thai.svg",
            starsNumber: 4,
            dishes: this.dishesArray},
        
            {resturantName: 'Claro',
            chefName: "Ran Shmueli", 
            isPopular: false, 
            isNew: true, 
            isOpen: false, 
            pathToCover: "/resturants images/claro.svg",
            starsNumber: 1,
            dishes: this.dishesArray},

        
            {resturantName: 'Kab Kem',
                chefName: "Yossi Shitrit", 
                isPopular: false, 
                isNew: false, 
                isOpen: true, 
                pathToCover: "/resturants images/Kab kem.svg",
                starsNumber: 2,
                dishes: this.dishesArray},

        
            {resturantName: 'Messa', 
            chefName: "Yossi Shitrit", 
            isPopular: true, 
                isNew: false, 
                isOpen: true, 
            pathToCover: "/resturants images/Messa.svg",
            starsNumber: 3,
            dishes: this.dishesArray},

        
            {resturantName: 'Nitan Thai', 
            chefName: "Yossi Shitrit", 
            isPopular: true, 
                isNew: false, 
                isOpen: true,  
            pathToCover: "/resturants images/nithan-thai.svg",
            starsNumber: 3,
            dishes: this.dishesArray},

        
            {resturantName: 'Nitan Thai', 
            chefName: "Ran Shmueli",
            isPopular: true, 
                isNew: false, 
                isOpen: true, 
            pathToCover: "/resturants images/nithan-thai.svg",
            starsNumber: 4,
            dishes: this.dishesArray}
        ];

    

    static pathToRatingImages: string[] = ['/desktopIcons/oneStar.png', '/desktopIcons/twoStars.png', '/desktopIcons/threeStars.png', '/desktopIcons/fourStars.png', '/desktopIcons/fiveStars.png'];

    static pathTospicyBig = "signatuteIcons/spicyBig.svg";

    static pathToSpicySmall = "signatuteIcons/SpicySmall.svg";

    static pathToVeganBig = "signatuteIcons/VeganBig.svg";

    static pathToVeganSmall = "signatuteIcons/VeganSmall.svg";

    static pathToVegetarianBig = "signatuteIcons/VegetarianBig.svg";

    static pathToVegetarianSmall = "signatuteIcons/VegetarianSmall.svg";

    static chefOfTheWeek:chef = {chefName:'Yossi Shitrit',
                                    firstName: "Yossi", 
                                    about: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
                                    pathToChefPicture: "chefsPictue/YossiShitrit.png"}
        
    static aboutUsFirstParagraph:string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
    eu ipsum. Cras porta malesuada eros, eget blandit
    turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
    dignissim a vestibulum.`

    static aboutUsSecondParagraph:string =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
    eu ipsum. Cras porta malesuada eros.`
                                

        
    } 



export interface resturantCard{
    resturantName:string;
    chefName:string;
    isPopular:boolean;
    isNew:boolean;
    isOpen:boolean;
    pathToCover:string;
    starsNumber:number;
    dishes: dishCard[];
    
}

export interface dishCard{
    dishName:string;
    restaurantName: string;
    dishContent:string;
    isSpicy:boolean;
    isVegitarian:boolean;
    isVegan:boolean;
    pathToCover:string;
    price:number;
    dishTime: "Breakfast" | "Lanch" | "Dinner";
}

export interface chef{
    chefName:string;
    firstName:string;
    about: string;
    pathToChefPicture: string;
}

export const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "10px",
    slidesToShow:1.5,
    speed: 500
  };