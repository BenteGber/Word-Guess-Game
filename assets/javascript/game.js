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




//Current Word To guess
let currentWord;
let keyPressed;
let globalTemp = "1.8˚";
let dateCounter = 2018;
//
let allGuessedLetters = [``];
let allowedGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let correctGuessedLetters;
let wordDisplay = [];
let indexArray = [];

function GenerateWord() {
    currentWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
    correctGuessedLetters = currentWord.split("");
    for (var v = 0; v < currentWord.length; v++) {
        if (currentWord[v] === " ") {
            var index = v;
            var node = (` `);

        } else if (currentWord[v] === "(") {
            var index = v;
            var node = (`(`);

        } else if (currentWord[v] === ")") {
            var index = v;
            var node = (`)`);

        } else if (currentWord[v] === "-") {
            var index = v;
            var node = (`-`);

        } else {
            var index = v;
            var node = (`_`);
        }
        wordDisplay.push(node);
        indexArray = [] + index;

    }
    console.log(currentWord);
    console.log(wordDisplay);
}



function createLetterHolders() {

    var para = document.createElement(`p`);
    para.setAttribute("id", "letter-holder");

    for (var a = 0; a < currentWord.length; a++) {


        if (currentWord[a] === " ") {
            var node = document.createTextNode(`  `);

        } else if (currentWord[a] === "(") {
            var node = document.createTextNode(`( `);

        } else if (currentWord[a] === ")") {
            var node = document.createTextNode(`) `);

        } else if (currentWord[a] === "-") {
            var node = document.createTextNode(`- `);

        } else {
            var node = document.createTextNode(`- `);

        }

        para.appendChild(node);
        var element = document.getElementById("currentWordHolder");
        element.appendChild(para);
    }
    // $("#letter-holder").append(wordDisplay);
    console.log(wordDisplay.length);
}

//This happens when you load the page
function startGame() {
    $(document).ready();
    GenerateWord();
    createLetterHolders();
}
startGame();











let result = false;
function checkForCorrectLetters() {

    currentWord = currentWord.toLowerCase();
    for (var z = 0; z < currentWord.length; z++) {

        if (currentWord[z] === keyPressed) {
            wordDisplay.splice(z, 1, keyPressed);
            $("#letter-holder").append(wordDisplay);
            var displayedLetters = wordDisplay.join("");
            $("#letter-holder").text(displayedLetters.toUpperCase());
            result = true;
        }

    }

    console.log(result);
}






// This block happens when Key is Pressed
let validGuess = false;
document.onkeyup = function (event) {
    keyPressed = event.key.toLowerCase();

    for (var k = 0; k < allowedGuess.length; k++)
        if (keyPressed === allowedGuess[k]) {
            validGuess = true;
        } else {
            for (var j = 0; j < allGuessedLetters.length; j++) {
                if (keyPressed === allGuessedLetters[j]) {
                    alert('Already Guesed')
                    return;
                } else {
                    allGuessedLetters.push(keyPressed);
                }
            }
        }
    if (validGuess === false) {
        console.log("Invalid");
        return;
    }
    checkForCorrectLetters();

    return;
}


    //         return;

    //     } else {
//     }
// }
// function (keyPressed, allGuessedLetters) {}

// 

//     storePressedKeys();

    // console.log(keyPressed);
    // console.log(allGuessedLetters[0]);

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
