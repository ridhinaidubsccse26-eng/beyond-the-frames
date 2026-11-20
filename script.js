
function findPlace() {

    let place = document.getElementById("placeType").value;

    let quizResults = document.getElementById("quizResults");

    let allDestinations = destinations.concat(hiddenGems);

    if (place === "") {
        quizResults.innerHTML = "<p>Please select a destination type first!</p>";
        return;
    }

    let matches = allDestinations.filter(destination => {

        return destination.tag1 === place ||
               destination.tag2 === place;

    });

    if (matches.length === 0) {

        quizResults.innerHTML = `
            <p>No destinations found for this category yet.</p>
        `;

        return;
    }

    quizResults.innerHTML = `
        <h3 class="quiz-result-heading">
            ✨ Your Perfect Destinations
        </h3>

        <div class="quiz-card-container">

            ${matches.map(destination => `

                <a href="destination.html?name=${destination.name}"
                   class="quiz-destination-card">

                    <img src="${destination.image}"
                         alt="${destination.name}">

                    <div class="quiz-card-overlay"></div>

                    <div class="quiz-card-content">

                        <h3>
                            ${destination.name.charAt(0).toUpperCase() +
                              destination.name.slice(1)}
                        </h3>

                        <p>${destination.description}</p>

                        <span class="quiz-explore">
                            Explore Destination →
                        </span>

                    </div>

                </a>

            `).join("")}

        </div>
    `;
}

function clearQuiz() {

    document.getElementById("placeType").value = "";

    document.getElementById("quizResults").innerHTML = "";

}

// Destination details
let destinations = [
    {
        name: "Manali",
        country: "India",
        description: "Explore beautiful mountains and snowy landscapes.",
        image: "images/manali.jpg",

        tag1: "Mountains",
        tag2: "Adventure",


        about: "Manali is a beautiful hill station in Himachal Pradesh, surrounded by mountains and valleys.",
    attractions: "Solang Valley, Hadimba Temple, Rohtang Pass",
    bestTime: "March to June and December to February",
    budget: "₹5,000 – ₹10,000 per person",
    food: "₹1,500 – ₹2,500",
    transport: "₹1,000 – ₹2,500",  
    activities: "₹1,000 – ₹2,500",
    },

    {
        name: "Ooty",
        country: "India",
        description: "Discover peaceful hills and beautiful tea gardens.",
        image: "images/ooty.jpg",

        tag1: "Nature",
        tag2: "Calm Escape",
 

        about: "Ooty is a beautiful hill station in Tamil Nadu, famous for its tea gardens, cool climate and scenic landscapes.",
    attractions: "Ooty Lake, Botanical Garden, Doddabetta Peak",
    bestTime: "October to June",
    budget: "₹3,000 – ₹7,000 per person",
    food: "₹1,000 – ₹2,000",
    transport: "₹1,000 – ₹2,000",  
    activities: "₹1,000 – ₹3,000",
    },

    {
        name: "Coorg",
        country: "India",
        description: "Enjoy green landscapes and beautiful coffee plantations.",
        image: "images/coorg.jpg",

        tag1: "Nature",
        tag2: "Relaxation",

        about: "Coorg is a scenic hill station in Karnataka, famous for its coffee plantations, waterfalls and lush green landscapes.",
    attractions: "Abbey Falls, Raja's Seat, Dubare Elephant Camp",
    bestTime: "October to March",
    budget: "₹3,000 – ₹7,000 per person",
    food: "₹1,000 – ₹2,000",
    transport: "₹1,000 – ₹2,000",  
    activities: "₹1,000 – ₹3,000",
    
    },

    {
        name: "Goa",
        country: "India",
        description: "Relax on beautiful beaches and enjoy the coastline.",
        image: "images/goa.jpg",

        tag1: "Beach",
        tag2: "Tropical",

        about: "Goa is a popular coastal destination in India, known for its beautiful beaches, Portuguese heritage and lively atmosphere.",
    attractions: "Baga Beach, Fort Aguada, Basilica of Bom Jesus",
    bestTime: "November to February",
    budget: "₹4,000 – ₹8,000 per person",
    food: "₹1,500 – ₹3,000",
    transport: "₹1,000 – ₹2,000",  
    activities: "₹1,500 – ₹3,000",
    
    },
    {
    name: "Jaipur",
    country: "India",
    description: "Explore royal palaces, colourful streets and the rich heritage of Rajasthan.",
    image: "images/jaipur.jpg",
    count: "40+",
    tag1: "Culture",
    tag2: "Heritage",
    about: "Jaipur is known for its beautiful palaces, forts, colourful markets and royal architecture.",
    attractions: ["Hawa Mahal", "Amber Fort", "City Palace"],
    bestTime: "October to March",
    budget: "₹3,000 – ₹7,000 per person",
    food: "₹1,000 – ₹2,000",
    transport: "₹1,000 – ₹2,000",  
    activities: "₹1,000 – ₹3,000",
    
},

{
    name: "Munnar",
    country: "India",
    description: "Escape into rolling tea gardens, misty mountains and peaceful landscapes.",
    image: "images/munnar.jpg",
    count: "35+",
    tag1: "Nature",
    tag2: "Relaxation",
    about: "Munnar is a hill station famous for its tea plantations, mountain scenery and cool climate.",
    attractions: ["Tea Gardens", "Eravikulam National Park", "Mattupetty Dam"],
    bestTime: "September to March",
    budget: "₹3,000 – ₹7,000 per person",
    food: "₹1,000 – ₹2,000",
    transport: "₹1,000 – ₹2,000",  
    activities: "₹1,000 – ₹3,000",
    
},

{
    name: "Kashmir",
    country: "India",
    description: "Experience breathtaking valleys, beautiful lakes and unforgettable mountain views.",
    image: "images/kashmir.jpg",
    count: "50+",
    tag1: "Mountains",
    tag2: "Adventure",
    about: "Kashmir offers scenic valleys, lakes, gardens and spectacular mountain landscapes.",
    attractions: ["Dal Lake", "Gulmarg", "Pahalgam"],
    bestTime: "March to October",
    budget: "₹5,000 – ₹12,000 per person",
    food: "₹1,500 – ₹3,000",
    transport: "₹1,500 – ₹4,000",  
    activities: "₹2,000 – ₹5,000",
    
},

{
    name: "Udaipur",
    country: "India",
    description: "Discover romantic lakes, grand palaces and the charm of Rajasthan.",
    image: "images/udaipur.jpg",
    count: "30+",
    tag1: "Romantic",
    tag2: "Luxury",
    about: "Udaipur is famous for its lakes, royal palaces and beautiful architecture.",
    attractions: ["Lake Pichola", "City Palace", "Jag Mandir"],
    bestTime: "September to March",
    budget: "₹3,000 – ₹7,000 per person",
    food: "₹1,000 – ₹2,000",
    transport: "₹1,000 – ₹2,000",  
    activities: "₹1,000 – ₹3,000",
    
},

{
    name: "Leh",
    country: "India",
    description: "Journey through dramatic mountains, peaceful monasteries and high-altitude landscapes.",
    image: "images/leh.jpg",
    count: "25+",
    tag1: "Adventure",
    tag2: "Mountains",
    about: "Leh is a destination known for Himalayan scenery, monasteries and adventurous landscapes.",
    attractions: ["Pangong Lake", "Shanti Stupa", "Nubra Valley"],
    bestTime: "May to September",
    budget: "₹6,000 – ₹15,000 per person",
    food: "₹1,500 – ₹3,000",
    transport: "₹2,000 – ₹5,000",  
    activities: "₹2,500 – ₹7,000",
    
},
    {
    name: "Bali",
    country: "Indonesia",
    description: "Discover tropical beaches, temples and lush green landscapes.",
    image: "images/bali.jpg",

    tag1: "Tropical",
    tag2: "Relaxation",

    about: "Bali is an Indonesian island known for its beautiful beaches, temples, rice terraces and rich culture.",
    attractions: "Uluwatu Temple, Ubud, Tegallalang Rice Terraces",
    bestTime: "April to October"
},

{
    name: "Paris",
    country: "France",
    description: "Experience romantic streets, iconic landmarks and beautiful architecture.",
    image: "images/paris.jpg",

    tag1: "Romantic",
    tag2: "Heritage",

    about: "Paris is the capital of France, famous for its art, architecture, museums and iconic landmarks.",
    attractions: "Eiffel Tower, Louvre Museum, Notre-Dame",
    bestTime: "April to June and September to October"
},

{
    name: "Tokyo",
    country: "Japan",
    description: "Explore modern city life, traditional culture and vibrant streets.",
    image: "images/tokyo.jpg",

    tag1: "City Escape",
    tag2: "Adventure",

    about: "Tokyo is Japan's capital, combining modern skyscrapers, historic temples, technology and traditional culture.",
    attractions: "Shibuya, Tokyo Tower, Senso-ji Temple",
    bestTime: "March to May and September to November"
},

{
    name: "Rome",
    country: "Italy",
    description: "Explore ancient history, beautiful architecture and Italian culture.",
    image: "images/rome.jpg",

    tag1: "History",
    tag2: "Culture",


    about: "Rome is the capital of Italy and is known for its ancient monuments, historic streets and art.",
    attractions: "Colosseum, Trevi Fountain, Pantheon",
    bestTime: "April to June and September to October"
},
{
    name: "Santorini",
    country: "Greece",
    description: "Watch golden sunsets over whitewashed cliffs and enjoy beautiful views of the Aegean Sea.",
    image: "images/santorini.jpg",
    count: "85+",
    tag1: "Romantic",
    tag2: "Luxury",
    about: "Santorini is famous for its white buildings, blue domes and beautiful sunsets.",
    attractions: ["Oia", "Fira", "Red Beach"],
    bestTime: "April to October"
},

{
    name: "Kyoto",
    country: "Japan",
    description: "Wander through ancient temples, peaceful gardens and charming traditional streets.",
    image: "images/kyoto.jpg",
    count: "120+",
    tag1: "Cultural",
    tag2: "Calm Escape",
    about: "Kyoto is known for traditional Japanese culture, historic temples and beautiful gardens.",
    attractions: ["Fushimi Inari", "Arashiyama", "Kinkaku-ji"],
    bestTime: "March to May and October to November"
},

{
    name: "London",
    country: "United Kingdom",
    description: "Experience iconic landmarks, historic streets and vibrant city life.",
    image: "images/london.jpg",
    count: "100+",
    tag1: "City Escape",
    tag2: "Culture",
    about: "London combines historical attractions, modern architecture, museums and lively neighbourhoods.",
    attractions: ["Big Ben", "Tower Bridge", "London Eye"],
    bestTime: "May to September"
},

{
    name: "Dubai",
    country: "United Arab Emirates",
    description: "Explore futuristic skylines, luxury experiences and exciting desert adventures.",
    image: "images/dubai.jpg",
    count: "90+",
    tag1: "Luxury",
    tag2: "Adventure",
    about: "Dubai is known for its modern architecture, shopping, beaches and desert experiences.",
    attractions: ["Burj Khalifa", "Dubai Marina", "Palm Jumeirah"],
    bestTime: "November to March"
},

{
    name: "Bangkok",
    country: "Thailand",
    description: "Discover vibrant markets, magnificent temples and a city full of energy.",
    image: "images/bangkok.jpg",
    count: "70+",
    tag1: "Culture",
    tag2: "City Escape",
    about: "Bangkok offers temples, markets, modern attractions and diverse cultural experiences.",
    attractions: ["Grand Palace", "Wat Arun", "Chatuchak Market"],
    bestTime: "November to February"
},

{
    name: "Barcelona",
    country: "Spain",
    description: "Enjoy colourful architecture, Mediterranean beaches and lively city streets.",
    image: "images/barcelona.jpg",
    count: "65+",
    tag1: "Culture",
    tag2: "Beach",
    about: "Barcelona is famous for its architecture, art, beaches and lively atmosphere.",
    attractions: ["Sagrada Familia", "Park Güell", "Barceloneta"],
    bestTime: "May to June and September"
}
];

// Display destination cards

let indiaPlaces = document.getElementById("indiaPlaces");
let worldPlaces = document.getElementById("worldPlaces");


function displayDestinations(destinationList, container) {

    container.innerHTML = "";

    destinationList.forEach(function(destination) {

        container.innerHTML += `
            <a href="destination.html?name=${destination.name}" class="destination-card">

                <img src="${destination.image}" alt="${destination.name}">

                <div class="card-overlay"></div>

                <div class="destination-count">
                    ${destination.count || "Explore"} Curated Destinations
                </div>

                <div class="destination-content">

                    <h3>${destination.name}, ${destination.country}</h3>

                    <p>${destination.description}</p>

                    <div class="destination-tags">
                        <span>${destination.tag1 || "Explore"}</span>
                        <span>${destination.tag2 || "Discover"}</span>
                    </div>

                </div>

                <div class="card-arrow">
                    →
                </div>

            </a>
        `;

    });
}
// Separate destinations by country

let indianDestinations = destinations.filter(function(destination) {

    return destination.country === "India";

});

let internationalDestinations = destinations.filter(function(destination) {

    return destination.country !== "India";

});

// Display Indian destinations

if (indiaPlaces) {
    displayDestinations(indianDestinations, indiaPlaces);
}


// Display international destinations

if (worldPlaces) {
    displayDestinations(internationalDestinations, worldPlaces);
}


// Search Indian destinations

if (document.getElementById("indiaSearch")) {

    document.getElementById("indiaSearch").addEventListener("input", function() {

        let searchText = this.value.toLowerCase();

        let filteredIndia = indianDestinations.filter(function(destination) {

            return destination.name.toLowerCase().includes(searchText) ||
                   destination.country.toLowerCase().includes(searchText);

        });

        displayDestinations(filteredIndia, indiaPlaces);

    });

}


// Search international destinations

if (document.getElementById("countrySearch")) {

    document.getElementById("countrySearch").addEventListener("input", function() {

        let searchText = this.value.toLowerCase();

        let filteredWorld = internationalDestinations.filter(function(destination) {

            return destination.name.toLowerCase().includes(searchText) ||
                   destination.country.toLowerCase().includes(searchText);

        });

        displayDestinations(filteredWorld, worldPlaces);

    });

}

// Hidden Gems details
let hiddenGems = [

   {
    name: "hampi",
    country: "India",
    description: "Explore ancient temples and beautiful stone monuments.",
    image: "images/hampi.jpg",
    tag1: "History",
    tag2: "Culture",
    about: "Hampi is a UNESCO World Heritage Site known for its ancient temples, impressive ruins and unique landscapes.",
    attractions: "Virupaksha Temple, Vijaya Vittala Temple, Stone Chariot",
    bestTime: "October to February",
    budget: "₹3,000 – ₹6,000 per person",
    food: "₹1,000 – ₹1,500",
    transport: "₹1,000 – ₹2,000",
    activities: "₹1,000 – ₹2,500"
},

{
    name: "dawki",
    country: "India",
    description: "Discover crystal-clear river waters in Meghalaya.",
    image: "images/dawki.jpg",
    tag1: "Nature",
    tag2: "Adventure",
    about: "Dawki is famous for its clear river waters, scenic surroundings and beautiful natural landscapes.",
    attractions: "Umngot River, Dawki Bridge, Shnongpdeng",
    bestTime: "November to April",
    budget: "₹4,000 – ₹8,000 per person",
    food: "₹1,000 – ₹2,000",
    transport: "₹1,500 – ₹3,000",
    activities: "₹1,500 – ₹3,000"
},

{
    name: "ziro",
    country: "India",
    description: "Enjoy green hills and peaceful landscapes.",
    image: "images/ziro.jpg",
    tag1: "Nature",
    tag2: "Culture",
    about: "Ziro Valley is known for its beautiful landscapes, rice fields, pine forests and unique tribal culture.",
    attractions: "Talley Valley Wildlife Sanctuary, Ziro Music Festival grounds, Pine Grove",
    bestTime: "March to October",
    budget: "₹6,000 – ₹12,000 per person",
    food: "₹1,500 – ₹2,500",
    transport: "₹2,500 – ₹5,000",
    activities: "₹2,000 – ₹4,500"
},

{
    name: "gokarna",
    country: "India",
    description: "Explore scenic beaches and coastal views.",
    image: "images/gokarna.jpg",
    tag1: "Beach",
    tag2: "Relaxation",
    about: "Gokarna is a coastal town known for its beautiful beaches, peaceful atmosphere and scenic coastline.",
    attractions: "Om Beach, Kudle Beach, Half Moon Beach",
    bestTime: "October to March",
    budget: "₹3,000 – ₹7,000 per person",
    food: "₹1,000 – ₹2,000",
    transport: "₹1,000 – ₹2,500",
    activities: "₹1,000 – ₹2,500"
},

{
    name: "araku",
    country: "India",
    description: "Explore scenic views and landscapes.",
    image: "images/araku.jpg",
    tag1: "Mountains",
    tag2: "Nature",
    about: "Araku Valley is a scenic hill destination known for coffee plantations, waterfalls and lush green valleys.",
    attractions: "Borra Caves, Coffee Museum, Padmapuram Gardens",
    bestTime: "September to March",
    budget: "₹3,000 – ₹6,000 per person",
    food: "₹1,000 – ₹1,500",
    transport: "₹1,000 – ₹2,000",
    activities: "₹1,000 – ₹2,500"
},

{
    name: "valley of flowers",
    country: "India",
    description: "Discover colourful flowers and breathtaking mountain scenery.",
    image: "images/valley.jpg",
    tag1: "Nature",
    tag2: "Adventure",
    about: "Valley of Flowers is a beautiful Himalayan valley famous for its colourful alpine flowers and spectacular mountain landscapes.",
    attractions: "Valley of Flowers National Park, Ghangaria, Hemkund Sahib",
    bestTime: "July to September",
    budget: "₹6,000 – ₹12,000 per person",
    food: "₹1,500 – ₹2,500",
    transport: "₹2,500 – ₹5,000",
    activities: "₹2,000 – ₹4,500"
},

{
    name: "majuli",
    country: "India",
    description: "Discover peaceful river island landscapes and Assamese culture.",
    image: "images/majuli.jpg",
    tag1: "Culture",
    tag2: "Nature",
    about: "Majuli is a river island in Assam known for its cultural heritage, traditional monasteries and peaceful natural surroundings.",
    attractions: "Kamalabari Satra, Auniati Satra, Samaguri Satra",
    bestTime: "October to March",
    budget: "₹4,000 – ₹8,000 per person",
    food: "₹1,000 – ₹2,000",
    transport: "₹1,500 – ₹3,000",
    activities: "₹1,500 – ₹3,000"
},

{
    name: "tawang",
    country: "India",
    description: "Explore mountain monasteries and beautiful Himalayan scenery.",
    image: "images/tawang.jpg",
    tag1: "Mountains",
    tag2: "Culture",
    about: "Tawang is a mountain destination in Arunachal Pradesh known for its monasteries, snowy landscapes and rich cultural heritage.",
    attractions: "Tawang Monastery, Sela Pass, Bum La Pass",
    bestTime: "March to May and September to October",
    budget: "₹8,000 – ₹15,000 per person",
    food: "₹2,000 – ₹3,000",
    transport: "₹3,500 – ₹7,000",
    activities: "₹2,500 – ₹5,000"
},

{
    name: "chopta",
    country: "India",
    description: "Enjoy scenic meadows and breathtaking Himalayan views.",
    image: "images/chopta.jpg",
    tag1: "Mountains",
    tag2: "Adventure",
    about: "Chopta is a peaceful Himalayan destination surrounded by forests, meadows and beautiful mountain views.",
    attractions: "Tungnath Temple, Chandrashila Peak, Deoria Tal",
    bestTime: "March to May and September to November",
    budget: "₹4,000 – ₹8,000 per person",
    food: "₹1,000 – ₹2,000",
    transport: "₹1,500 – ₹3,000",
    activities: "₹1,500 – ₹3,000"
},

{
    name: "mandu",
    country: "India",
    description: "Discover ancient palaces and historic architecture.",
    image: "images/mandu.jpg",
    tag1: "History",
    tag2: "Culture",
    about: "Mandu is a historic town in Madhya Pradesh known for its ancient forts, palaces and beautiful architectural monuments.",
    attractions: "Jahaz Mahal, Rani Roopmati Pavilion, Hindola Mahal",
    bestTime: "October to March",
    budget: "₹3,000 – ₹6,000 per person",
    food: "₹1,000 – ₹1,500",
    transport: "₹1,000 – ₹2,000",
    activities: "₹1,000 – ₹2,500"
},

{
    name: "dhanushkodi",
    country: "India",
    description: "Explore beautiful coastal landscapes and a historic abandoned town.",
    image: "images/dhanushkodi.jpg",
    tag1: "Beach",
    tag2: "Adventure",
    about: "Dhanushkodi is a coastal destination known for its dramatic beaches, ocean views and historic ruins.",
    attractions: "Dhanushkodi Beach, Arichal Munai, Ghost Town",
    bestTime: "October to March",
    budget: "₹3,000 – ₹6,000 per person",
    food: "₹1,000 – ₹1,500",
    transport: "₹1,000 – ₹2,000",
    activities: "₹1,000 – ₹2,500"
},

{
    name: "sandakphu",
    country: "India",
    description: "Enjoy spectacular Himalayan views and mountain trails.",
    image: "images/sandakphu.jpg",
    tag1: "Mountains",
    tag2: "Adventure",
    about: "Sandakphu is a Himalayan destination known for panoramic mountain views, trekking trails and beautiful natural scenery.",
    attractions: "Sandakphu Viewpoint, Phalut, Tumling",
    bestTime: "April to May and October to December",
    budget: "₹6,000 – ₹12,000 per person",
    food: "₹1,500 – ₹2,500",
    transport: "₹2,500 – ₹5,000",
    activities: "₹2,000 – ₹4,500"
},
]; 

// Display Hidden Gems

let hiddenPlaces = document.getElementById("hiddenPlaces");

function displayHiddenGems(gemList) {

    hiddenPlaces.innerHTML = "";

    gemList.forEach(function(gem) {

        hiddenPlaces.innerHTML += `
            <div class="hidden-gem-card">

                <img src="${gem.image}" alt="${gem.name}">

                <div class="hidden-gem-content">

                    <span class="hidden-gem-label">
                        ✨ Hidden Gem
                    </span>

                    <h3>${gem.name}</h3>

                    <p>${gem.description}</p>

                    <div class="hidden-gem-bottom">

                        <span class="gem-category">Offbeat</span>

                        <span class="gem-category">Explore</span>

                        <a href="destination.html?name=${encodeURIComponent(gem.name)}" class="gem-arrow">→</a>

                    </div>

                </div>

            </div>
        `;

    });

}

if (hiddenPlaces) {
displayHiddenGems(hiddenGems);
document.getElementById("hiddenSearch").addEventListener("input", function() {

    let searchText = this.value.toLowerCase();

    let filteredGems = hiddenGems.filter(function(gem) {

        return gem.name.toLowerCase().includes(searchText);

    });

    displayHiddenGems(filteredGems);

});
}

function showDestination(destinationName) {

    let allDestinations = destinations.concat(hiddenGems);

    let destination = allDestinations.find(function(place) {
        return place.name.toLowerCase().trim() === destinationName.toLowerCase().trim();
    });

    let details = document.getElementById("destinationDetails");

    if (!destination) {
        details.innerHTML = "<h2>Destination not found!</h2>";
        return;
    }

    details.innerHTML = `
        <h2>${destination.name}</h2>

        <img src="${destination.image}" alt="${destination.name}">

        <div class="weather-card" id="weatherCard">

            <h3>🌤️ CURRENT WEATHER</h3>

            <div id="weatherInfo">
                Loading weather...
            </div>

        </div>

        <h3>About</h3>
        <p>${destination.about || destination.description}</p>

        <h3>Famous Attractions</h3>
        <p>${Array.isArray(destination.attractions) ? destination.attractions.join(", ") : destination.attractions || "Information coming soon"}</p>

        <h3>Best Time to Visit</h3>
        <p>${destination.bestTime || "Information coming soon"}</p>

        <h3>Estimated Budget</h3>
        <p>${destination.budget || "Budget information coming soon"}</p>

        <h3>Food Budget</h3>
        <p>${destination.food || "Information coming soon"}</p>

        <h3>Transport Budget</h3>
        <p>${destination.transport || "Information coming soon"}</p>

        <h3>Activities Budget</h3>
        <p>${destination.activities || "Information coming soon"}</p>
    `;

    loadWeather(destination.name);

}

async function loadWeather(placeName) {
    console.log("Weather loading for:", placeName);

    let weatherInfo = document.getElementById("weatherInfo");
      console.log("Weather element:", weatherInfo);

    try {

        // Get destination coordinates
        let searchName = placeName;

if (placeName.toLowerCase() === "coorg") {
    searchName = "Madikeri";
}

let locationResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchName)}&count=1`
);

        let locationData = await locationResponse.json();

        if (!locationData.results || locationData.results.length === 0) {
            weatherInfo.innerHTML = "Weather information unavailable.";
            return;
        }

        let latitude = locationData.results[0].latitude;
        let longitude = locationData.results[0].longitude;

        // Get current weather
        let weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`
        );

        let weatherData = await weatherResponse.json();

        let current = weatherData.current;

        // Weather description
        let description = "";
        let icon = "";

        if (current.weather_code === 0) {
            description = "Clear Sky";
            icon = "☀️";
        }

        else if (current.weather_code <= 3) {
            description = "Partly Cloudy";
            icon = "🌤️";
        }

        else if (current.weather_code <= 48) {
            description = "Foggy";
            icon = "🌫️";
        }

        else if (current.weather_code <= 67) {
            description = "Rain";
            icon = "🌧️";
        }

        else if (current.weather_code <= 77) {
            description = "Snow";
            icon = "❄️";
        }

        else if (current.weather_code <= 82) {
            description = "Rain Showers";
            icon = "🌦️";
        }

        else if (current.weather_code <= 86) {
            description = "Snow Showers";
            icon = "🌨️";
        }

        else {
            description = "Thunderstorm";
            icon = "⛈️";
        }

        // Display weather information
        weatherInfo.innerHTML = `

            <div class="weather-main">

                <div class="weather-icon">
                    ${icon}
                </div>

                <h2>${current.temperature_2m}°C</h2>

                <p>${description}</p>

                <p>Feels like ${current.apparent_temperature}°C</p>

            </div>

            <div class="weather-details">

                <p>💧 Humidity: ${current.relative_humidity_2m}%</p>

                <p>💨 Wind Speed: ${current.wind_speed_10m} km/h</p>

            </div>

            <p class="weather-update">
                Live weather information
            </p>

        `;

    }

    catch (error) {

        weatherInfo.innerHTML = "Unable to load weather information.";

        console.log("Weather error:", error);

    }
}

function toggleFavorite(destinationName) {

    let favorites = JSON.parse(localStorage.getItem("beyondtheframesFavorites")) || [];

    if (favorites.includes(destinationName)) {

        favorites = favorites.filter(place => place !== destinationName);

        alert(destinationName + " removed from favorites!");

    } else {

        favorites.push(destinationName);

        alert(destinationName + " added to favorites!");

    }

    localStorage.setItem("beyond the frames Favorites", JSON.stringify(favorites));

    let button = document.querySelector(".favorite-btn");

    if (favorites.includes(destinationName)) {
        button.innerHTML = "♥";
    } else {
        button.innerHTML = "♡";
    }
}
function displayFavorites() {

    let favorites = JSON.parse(localStorage.getItem("beyondtheframesFavorites")) || [];

    let favoritePlaces = destinations.filter(destination =>
        favorites.includes(destination.name)
    );

    let container = document.getElementById("favoritePlaces");

    if (container) {

        if (favoritePlaces.length === 0) {

            container.innerHTML = "<p>No favorites saved yet. Explore destinations and save your favorites!</p>";

        } else {

            displayDestinations(favoritePlaces, container);

        }

    }

}

displayFavorites();
function clearFavorites() {

    localStorage.removeItem("beyondtheframesFavorites");

    displayFavorites();

}

let generatedItinerary = "";

function generateItinerary(destinationName) {

    let destination = destinations.find(place => place.name === destinationName);

    let days = Number(document.getElementById("itineraryDays").value);

    let attractions;

    if (Array.isArray(destination.attractions)) {
        attractions = destination.attractions;
    } else {
        attractions = destination.attractions.split(",").map(place => place.trim());
    }

    let result = document.getElementById("itineraryResult");

    result.innerHTML = "";

    generatedItinerary = "BEYOND THE FRAMES TRAVEL ITINERARY\n";
    generatedItinerary += "Destination: " + destination.name + "\n";
    generatedItinerary += "Number of Days: " + days + "\n\n";

    let activities = [
        "Explore the local surroundings",
        "Try local food and visit nearby cafes",
        "Enjoy shopping for local souvenirs",
        "Discover hidden spots around the destination",
        "Relax and enjoy the scenic views"
    ];

    for (let i = 0; i < days; i++) {

        let attraction = attractions[i % attractions.length];

        let activity1 = activities[i % activities.length];

        let activity2 = activities[(i + 2) % activities.length];

        generatedItinerary += "DAY " + (i + 1) + "\n";
        generatedItinerary += "Morning: Visit " + attraction + "\n";
        generatedItinerary += "Afternoon: " + activity1 + "\n";
        generatedItinerary += "Evening: " + activity2 + "\n\n";

        result.innerHTML += `
            <div class="itinerary-day">

                <h4>📅 Day ${i + 1}</h4>

                <p>🌅 <strong>Morning:</strong> Visit ${attraction}</p>

                <p>☀️ <strong>Afternoon:</strong> ${activity1}</p>

                <p>🌙 <strong>Evening:</strong> ${activity2}</p>

            </div>
        `;
    }

    result.innerHTML += `
        <button onclick="downloadItinerary()">
            📥 Download Itinerary
        </button>
    `;

}


function downloadItinerary() {

    let file = new Blob([generatedItinerary], {
        type: "text/plain"
    });

    let link = document.createElement("a");

    link.href = URL.createObjectURL(file);

    link.download = "BEYOND THE FRAMES_Itinerary.txt";

    link.click();

    URL.revokeObjectURL(link.href);

}
function updateChecklist() {

    let checkboxes = document.querySelectorAll(
        ".checklist input[type='checkbox']"
    );

    let completed = 0;

    let checklistData = [];

    checkboxes.forEach(function(checkbox, index) {

        if (checkbox.checked) {
            completed++;
        }

        checklistData.push(checkbox.checked);

    });

    let total = checkboxes.length;

    let progress = total === 0 ? 0 : (completed / total) * 100;

    document.getElementById("checklistProgress").innerHTML =
        completed + " of " + total + " items completed";

    document.getElementById("progressFill").style.width =
        progress + "%";

    // Save checklist progress
    let destinationName = new URLSearchParams(
        window.location.search
    ).get("name");

    localStorage.setItem(
        "checklist_" + destinationName,
        JSON.stringify(checklistData)
    );

}

function loadChecklist() {

    let destinationName = new URLSearchParams(
        window.location.search
    ).get("name");

    let savedChecklist = JSON.parse(
        localStorage.getItem("checklist_" + destinationName)
    ) || [];

    let checkboxes = document.querySelectorAll(
        ".checklist input[type='checkbox']"
    );

    checkboxes.forEach(function(checkbox, index) {

        checkbox.checked = savedChecklist[index] || false;

    });

    updateChecklist();

}

function rateDestination(destinationName, rating) {

    let ratings = JSON.parse(localStorage.getItem("destinationRatings")) || {};

    ratings[destinationName] = rating;

    localStorage.setItem("destinationRatings", JSON.stringify(ratings));

    document.getElementById("ratingMessage").innerHTML =
        "Thank you! You rated " + destinationName + " " + rating + " stars ⭐";

}
function calculateBudget() {

    let totalBudget = Number(document.getElementById("totalBudget").value);

    let stay = Number(document.getElementById("stayCost").value);

    let food = Number(document.getElementById("foodCost").value);

    let transport = Number(document.getElementById("transportCost").value);

    let activities = Number(document.getElementById("activityCost").value);

    let totalExpenses = stay + food + transport + activities;

    let remaining = totalBudget - totalExpenses;

    let result = document.getElementById("budgetResult");

    if (totalBudget <= 0) {

        result.innerHTML = "Please enter a valid total budget.";

        return;

    }

    if (stay < 0 || food < 0 || transport < 0 || activities < 0) {

        result.innerHTML = "Expenses cannot be negative.";

        return;

    }

    result.innerHTML = `
        <div class="budget-summary">

            <h4>📊 Budget Summary</h4>

            <p>💰 Total Budget: ₹${totalBudget.toLocaleString("en-IN")}</p>

            <p>💸 Total Expenses: ₹${totalExpenses.toLocaleString("en-IN")}</p>

            <p>💵 Remaining Amount: ₹${remaining.toLocaleString("en-IN")}</p>

            ${
                remaining >= 0
                ? `<p class="budget-success">✅ You are within your budget!</p>`
                : `<p class="budget-warning">⚠️ You have exceeded your budget by ₹${Math.abs(remaining).toLocaleString("en-IN")}!</p>`
            }

        </div>
    `;

}
// Interactive Travel Map

function initializeTravelMap() {

   let map = L.map("travelMap").setView([20, 10], 2);
    // Add the world map
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {

    attribution: "Tiles &copy; Esri",

    maxZoom: 19

}).addTo(map);

    // Destination coordinates
    let coordinates = {

        "Manali": [32.2432, 77.1892],
        "Ooty": [11.4064, 76.6932],
        "Coorg": [12.3375, 75.8069],
        "Goa": [15.2993, 74.1240],
        "Jaipur": [26.9124, 75.7873],
        "Munnar": [10.0889, 77.0595],
        "Kashmir": [34.0837, 74.7973],
        "Udaipur": [24.5854, 73.7125],
        "Leh": [34.1526, 77.5771],
        "Bali": [-8.3405, 115.0920],
        "Paris": [48.8566, 2.3522],
        "Tokyo": [35.6762, 139.6503],
        "Rome": [41.9028, 12.4964],
        "Santorini": [36.3932, 25.4615],
        "Kyoto": [35.0116, 135.7681],
        "London": [51.5072, -0.1276],
        "Dubai": [25.2048, 55.2708],
        "Bangkok": [13.7563, 100.5018],
        "Barcelona": [41.3874, 2.1686]
    };

    // Add markers for destinations
    destinations.forEach(function(destination) {

        let location = coordinates[destination.name];

        if (location) {

            let marker = L.marker(location).addTo(map);

            marker.bindPopup(`
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
            `);

        }

    });

}

// Load map
if (document.getElementById("travelMap")) {
    initializeTravelMap();
}

// Load destination details page

if (document.getElementById("destinationDetails")) {

    let params = new URLSearchParams(window.location.search);

    let destinationName = params.get("name");

    if (destinationName) {
    showDestination(destinationName);
    loadChecklist();
}

}

function startCountdown(destinationName) {

    let tripDate = document.getElementById("tripDate").value;

    let result = document.getElementById("countdownResult");

    if (tripDate === "") {

        result.innerHTML = "Please select your travel date!";

        return;

    }

    let selectedDate = new Date(tripDate + "T00:00:00");

    let today = new Date();

    today.setHours(0, 0, 0, 0);

    let difference = selectedDate - today;

    let daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    if (daysLeft < 0) {

        result.innerHTML = "Your selected date has already passed!";

    }

    else if (daysLeft === 0) {

        result.innerHTML = `
            <h3>🎉 Your trip to ${destinationName} is today!</h3>
            <p>Have an amazing journey!</p>
        `;

    }

    else {

        result.innerHTML = `
            <div class="countdown-result">

                <h2>${daysLeft}</h2>

                <p>Days until your trip to ${destinationName}!</p>

                <span>✈️ Adventure awaits!</span>

            </div>
        `;

    }

}