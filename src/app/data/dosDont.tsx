
// the general strucutre of a do or don't item object
export type DosDontItem = {
    id: string;
    title: string;
    icon: 
    | "clothes"
    | "shoes"
    | "bags"
    | "accessories"
    | "decor"
    | "kitchenware"
    | "media"
    | "collectibles"
    | "small-electronics"
    | "damaged"
    | "bedding"
    | "kids"
    | "pets"
    | "ceiling-lights"
    | "furniture"
    ;
    description: string;
}


// all dos items
export const DOS: DosDontItem[] = [
    {
        id: "clothing",
        title: "Clothing",
        description: "Gently used men's and women's clothing" ,
        icon: "clothes"
    },
        {
        id: "shoes",
        title: "Shoes",
        description: "Gently used men's and women's footwear" ,
        icon: "shoes"
    },
    {
        id: "bags",
        title: "Bags",
        description: "Gently used handbags, totes, backpacks, wallets, and more" ,
        icon: "bags"
    },
    {
        id: "accessories",
        title: "Accessories",
        description: "Jewelry, belts, hats, scarves, and other small accessories" ,
        icon: "accessories"
    },
    {
        id: "decor",
        title: "Home Decor",
        description: "Small showpieces, lamps, vases, and more" ,
        icon: "decor"
    },
    {
        id: "kitchenware",
        title: "Kitchenware",
        description: "Pots, pans, silverware, glasses, plates, and other items commonly used in kitchens" ,
        icon: "kitchenware"
    },
    {
        id: "media",
        title: "Media",
        description: "Books, CDs, DVDs, Comics, and Vinyl records" ,
        icon: "media"
    },
    {
        id: "collectibles",
        title: "Collectibles and Knick-knacks",
        description: "Any collectibles or small knick-knacks (figurines, cards, stationery, and more)" ,
        icon: "collectibles"
    },
    {
        id: "electronics",
        title: "Small electronics",
        description: "Small electronics such as headpohones, certain kitchen appliances, phones, and more" ,
        icon: "small-electronics"
    },

];


// all don't items
export const DONTS: DosDontItem[] = [
    {
        id: "damaged",
        title: "Damaged Items (Unusable)",
        description: "No torn, soiled, stained, or otherwise damaged goods" ,
        icon: "damaged"
    },
    {
        id: "bedding",
        title: "Bedding",
        description: "No mattresses, pillows, blankets, sheets" ,
        icon: "bedding"
    },
    {
        id: "kids",
        title: "Children's Items",
        description: "No kids toys, clothings, and other items" ,
        icon: "kids"
    },
        {
        id: "pets",
        title: "Pet's Items",
        description: "No pet carriers, bedding, crates, toys, food, and other items" ,
        icon: "pets"
    },
    {
        id: "ceiling-lights",
        title: "Ceiling Lights",
        description: "No ceiling Lights" ,
        icon: "ceiling-lights"
    },
    {
        id: "furniture",
        title: "Furniture",
        description: "No furniture; in special cases, small items may be accepted after prior approval by email" ,
        icon: "furniture"
    },
];