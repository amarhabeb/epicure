export class AppData
{
    static resturantsArray:{resturant: resturantCard}[]=[
        { resturant:
            {resturantName: 'Claro',
            chefName: "Ran Shmueli", 
            isPopular: true, 
            isNew: false, 
            isOpen: true, 
            pathToCover: "resturants images/claro.svg"}},

        { resturant:
            {resturantName: 'Kab Kem',
             chefName: "Yariv Malili", 
             isPopular: true, 
             isNew: true, 
             isOpen: true, 
             pathToCover: "resturants images/Kab kem.svg"}},

        { resturant:
            {resturantName: 'Messa', 
            chefName: "Aviv Moshe", 
            isPopular: false, 
            isNew: false, 
            isOpen: false, 
            pathToCover: "resturants images/Messa.svg"}},

        { resturant:
            {resturantName: 'Nitan Thai', 
            chefName: "Shahaf Shabtay", 
            isPopular: true, 
            isNew: false, 
            isOpen: false, 
            pathToCover: "resturants images/nithan-thai.svg"}},

        { resturant:
            {resturantName: 'Nitan Thai', 
            chefName: "Shahaf Shabtay", 
            isPopular: true, "isNew": false, 
            isOpen: false, 
            pathToCover: "resturants images/nithan-thai.svg"}},
    ]

    
};

export interface resturantCard{
    resturantName:string;
    chefName:string
    isPopular:boolean
    isNew:boolean
    isOpen:boolean
    pathToCover:string
}