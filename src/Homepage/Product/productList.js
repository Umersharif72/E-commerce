const prlist = [
    
    {
        id: "1",
        name:"Plugs",
        price:"RS 450",
        line:"Spark that ignite the fuel",
        discription:"Your spark plugs are what supply the spark that ignites the air/fuel mixture, creating the explosion which makes your engine produce power. These small but simple plugs create an arc of electricity across two leads which are not touching, but close enough together that electricity can jump the gap between them.",
        img:require("./product-1.png")

    },
    {
        id: "2",
        name:"Gear Box",
        price:"RS 60,000",
        line:"Automatic Transmission",
        discription:"The manual transmission consists of three shafts with constantly-intermeshed gears of different sizes. The input shaft connects to the engine, via the clutch. The countershaft is constantly meshed with the input shaft and has multiple gears.",
        img:require("./product-2.png")

    },
    {
        id: "3",
        name:"Tyres",
        price:"RS 52000",
        line:"Smooth Drive",
        discription:"The bead is a loop of high-strength steel cable coated with rubber. It gives the tire the strength it needs to stay seated on the wheel rim and to handle the forces applied by tire mounting machines when the tires are installed on rims.",
        img:require("./product-3.png")

    }
    
]




export function ProductList(){
    return prlist;
}