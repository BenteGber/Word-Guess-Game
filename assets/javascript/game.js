let wordLibrary = [
    "Refrigerant Management",
    "Wind Turbines (Onshore)",
    "Reduced Food Waste",
    "Plant-Rich Diet",
    "Tropical Forests",
    "Educating Girls",
    "Family Planning",
    "Solar Farms",
    "Silvopasture",
    "Rooftop Solar",
    "Regenerative Agriculture",
    "Temperate Forests",
    "Peatlands",
    "Tropical Staple Trees",
    "Afforestation",
    "Conservation Agriculture",
    "Tree Intercropping",
    "Geothermal",
    "Managed Grazing",
    "Nuclear",
    "Clean Cookstoves",
    "Wind Turbines (Offshore)",
    "Farmland Restoration",
    "Improved Rice Cultivation",
    "Concentrated Solar",
    "Electric Vehicles",
    "District Heating",
    "Multistrata Agroforestry",
    "Wave and Tidal",
    "Methane Digesters (Large)",
    "Insulation",
    "Ships",
    "LED Lighting (Household)",
    "Biomass",
    "Bamboo",
    "Alternative Cement",
    "Mass Transit",
    "Forest Protection",
    "Indigenous Peoples’ Land Management",
    "Trucks",
    "Solar Water",
    "Heat Pumps",
    "Airplanes",
    "LED Lighting (Commercial)",
    "Building Automation",
    "Water Saving - Home",
    "Bioplastic",
    "In-Stream Hydro",
    "Cars",
    "Cogeneration",
    "Perennial Biomass",
    "Coastal Wetlands",
    "System of Rice Intensification",
    "Walkable Cities",
    "Household Recycling",
    "Industrial Recycling",
    "Smart Thermostats",
    "Landfill Methane",
    "Bike Infrastructure",
    "Composting",
    "Smart Glass",
    "Women Smallholders",
    "Telepresence",
    "Methane Digesters (Small)",
    "Nutrient Management",
    "High-speed Rail",
    "Farmland Irrigation",
    "Waste-to-Energy",
    "Electric Bikes",
    "Recycled Paper",
    "Water Distribution",
    "Biochar",
    "Green Roofs",
    "Trains",
    "Ridesharing",
    "Micro Wind",
    "Energy Storage (Distributed)",
    "Energy Storage (Utilities)",
    "Grid Flexibility",
    "Microgrids",
    "Net Zero Buildings",
    "Retrofitting"
];


// var myArray = [
//     "Apples",
//     "Bananas",
//     "Pears"
// ];

// var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

// document.body.innerHTML = randomItem;


let currentWord;
let allowedGuesses;
let correctGuesses;
let keyPressed;
let globalTemp;
let dateCounter = 2018;
// let wordElement = document.getElementById(`word`);
let guessedLetters = [``];

function GenerateWord() {
    currentWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
    console.log(currentWord);
}
function createLetterHolders() {
    for (a = 0; a < currentWord.length; a++) {
        var para = document.createElement(`p`);
        var node = document.createTextNode(`_`);
        para.appendChild(node);
        var element = document.getElementById("currentWordHolder");
        element.appendChild(para);
    }
}

function startGame() {
    $(document).ready();
    GenerateWord();
    createLetterHolders();


}
startGame();








function checkForKeyPress() {
    for (var i = 0; i < guessedLetters.length; i++) {
        if (keyPressed == guessedLetters[i]) {
            alert("already guessed");
            return;
        }
    }
}
function checkForCorrectLetters() {
    for (z = 0; z < currentWord.length; z++) {
        if (currentWord.toLowerCase()[z] == keyPressed) {
            console.log("yup");

        }
    }
}
Function





document.onkeyup = function (event) {
    keyPressed = event.key.toLowerCase();
    checkForKeyPress();
    checkForCorrectLetters();
    guessedLetters.push(keyPressed);
    console.log(guessedLetters);
    return;
}


    //         return;

    //     } else {
//     }
// }
// function (keyPressed, guessedLetters) {}

// 

//     storePressedKeys();

    // console.log(keyPressed);
    // console.log(guessedLetters[0]);

//     if (globalTemp < 1.8) {
//        console.log (`win`);
//        return;
//     }else if (globalTemp> 2.7 || dateCounter === 2050){
//     console.log (`lose`)}
//     return;
// }else {
//        ; 
//         if (keyPressed === )
// }
// }
// startGame();
