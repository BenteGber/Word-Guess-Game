
// I cut back on my total  word options for time's sake.
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
    // "Regenerative Agriculture",
    // "Temperate Forests",
    // "Peatlands",
    // "Tropical Staple Trees",
    // "Afforestation",
    // "Conservation Agriculture",
    // "Tree Intercropping",
    // "Geothermal",
    // "Managed Grazing",
    // "Nuclear",
    // "Clean Cookstoves",
    // "Wind Turbines (Offshore)",
    // "Farmland Restoration",
    // "Improved Rice Cultivation",
    // "Concentrated Solar",
    // "Electric Vehicles",
    // "District Heating",
    // "Multistrata Agroforestry",
    // "Wave and Tidal",
    // "Methane Digesters (Large)",
    // "Insulation",
    // "Ships",
    // "LED Lighting (Household)",
    // "Biomass",
    // "Bamboo",
    // "Alternative Cement",
    // "Mass Transit",
    // "Forest Protection",
    // "Indigenous Peoples’ Land Management",
    // "Trucks",
    // "Solar Water",
    // "Heat Pumps",
    // "Airplanes",
    // "LED Lighting (Commercial)",
    // "Building Automation",
    // "Water Saving - Home",
    // "Bioplastic",
    // "In-Stream Hydro",
    // "Cars",
    // "Cogeneration",
    // "Perennial Biomass",
    // "Coastal Wetlands",
    // "System of Rice Intensification",
    // "Walkable Cities",
    // "Household Recycling",
    // "Industrial Recycling",
    // "Smart Thermostats",
    // "Landfill Methane",
    // "Bike Infrastructure",
    // "Composting",
    // "Smart Glass",
    // "Women Smallholders",
    // "Telepresence",
    // "Methane Digesters (Small)",
    // "Nutrient Management",
    // "High-speed Rail",
    // "Farmland Irrigation",
    // "Waste-to-Energy",
    // "Electric Bikes",
    // "Recycled Paper",
    // "Water Distribution",
    // "Biochar",
    // "Green Roofs",
    // "Trains",
    // "Ridesharing",
    // "Micro Wind",
    // "Energy Storage (Distributed)",
    // "Energy Storage (Utilities)",
    // "Grid Flexibility",
    // "Microgrids",
    // "Net Zero Buildings",
    // "Retrofitting"
];
let wordDisplay = [];
let keyPressed = document.onkeyup = function (event) {
    keyPressed = event.key.toLowerCase();
    word.checkGuess();
}
let remainingGuesses = 0;

let winningWord;



let Score = {
    maxTemp: 4.5,
    winningTemp: 0,
    currentTemp: 1.8,
    yearCounter: 2018,
    adjustScoreLoss: function () {
        this.currentTemp = (((this.currentTemp * 10) + 2) / 10);
        $('#thermometer').text(this.currentTemp + "˚");
    },
    adjustScoreWin: function () {
        this.currentTemp = (((this.currentTemp * 10) + -2) / 10);
        console.log(this.currentTemp + "*********************");
        $('#thermometer').text(this.currentTemp + "˚");
    },

}

let WordObject = {
    currentWord: "",
    correctLetters: [],
    validGuesses: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    allCurrentGuesses: [],
    generateWord: function () {
        // genterates a random word from the array and creates 3 vairiables by which to display and confirm.

        // currentWord is the actual word
        this.currentWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
        this.correctLetters = this.currentWord.toLowerCase();
        // correctLetters is the current word split into an Array
        this.correctLetters = this.correctLetters.split("");
        var para = document.createElement(`p`);
        para.setAttribute("id", "letter-holder");
        for (var v = 0; v < this.currentWord.length; v++) {

            if (this.currentWord[v] === " ") {
                var index = v;
                var node = (` `);
                var node2 = document.createTextNode(`  `);

            } else if (this.currentWord[v] === "(") {
                var index = v;
                var node = (`(`);
                var node2 = document.createTextNode(`( `);

            } else if (this.currentWord[v] === ")") {
                var index = v;
                var node = (`)`);
                var node2 = document.createTextNode(`) `);

            } else if (this.currentWord[v] === "-") {
                var index = v;
                var node = (`-`);
                var node2 = document.createTextNode(`- `);

            }
            else if (this.currentWord[v] === "’") {
                var index = v;
                var node = (`’`);
                var node2 = document.createTextNode(`’ `);

            } else {
                var index = v;
                var node = (`_`);
                var node2 = document.createTextNode(`_ `);
            }
            // and wordDisplay is a global arrray that holds the currently displayed letters
            wordDisplay.push(node);
            para.appendChild(node2);
            $("#currentWordHolder").append(para);
            indexArray = [] + index;


        }
        console.log(this.currentWord);
        console.log(wordDisplay);
    },
    checkGuess: function () {
        if (this.validGuesses.includes(keyPressed)) {
            // check if guess is valid
            if (this.correctLetters.includes(keyPressed)) {
                // checks if guess is correct
                for (var i = 0; i < this.correctLetters.length; i++) {
                    if (this.correctLetters[i] === keyPressed) {
                        wordDisplay.splice(i, 1, keyPressed);
                        $("#letter-holder").append(wordDisplay);
                        var displayedLetters = wordDisplay.join("");
                        $("#letter-holder").text(displayedLetters.toUpperCase());
                    }
                }
                this.allCurrentGuesses.push(keyPressed);
            }
            if (this.allCurrentGuesses.includes(keyPressed) || wordDisplay.includes(keyPressed)) {
                // checks for repeated key presses to not affect remaining guesses
            } else {
                // adjusts remaining giuesses and determines loss
                remainingGuesses--;
                $('#remaining-guesses').text(remainingGuesses);
                $("#guessed-letters").append(keyPressed.toUpperCase() + " , ");
                this.allCurrentGuesses.push(keyPressed);
                if (remainingGuesses <= 0) {
                    // resets game
                    $("#letter-holder").text(this.currentWord);
                    winningWord = this.currentWord;
                    delete this.word;
                    wordDisplay = [];
                    $('#letter-holder').remove();
                    $('#guessed-letters').empty();
                    score.adjustScoreLoss();
                    remainingGuesses = 12;
                    if (score.currentTemp === 3) {
                        alert("Oh no.... We failed to avoid the tipping point for global warming... :( don't let this happen in the real world");
                        this.currentTemp = 1.8;
                    }

                    startGame();
                }
            }

        } if (wordDisplay.includes("_")) {
            // keeps game going if blank letters remain
        } else {
            // else displays word and resets game 
            $("#letter-holder").text(this.currentWord);
            delete this.word;
            wordDisplay = [];
            remainingGuesses = 12;
            $('#letter-holder').remove();
            $('#guessed-letters').empty();
            score.adjustScoreWin();
            if (score.currentTemp === 0) {
                alert('You Saved The Earth!... But really take some of this information and share it with your friends and family :)')
            };
            startGame();
        }


    },
}

let score = Object.create(Score);
var word = Object.create(WordObject);

function startGame() {
    $(document).ready();
    word = Object.create(WordObject);
    word.generateWord();
    remainingGuesses = 12;
    word.allCurrentGuesses = [];

}
startGame();

















