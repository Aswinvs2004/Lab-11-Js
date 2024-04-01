/* STEP 2: Bind the HEADER and the SECTION elements above to variables */
const header = document.querySelector("header");
const section = document.querySelector("section");

// STEP 3a: Create the asynchronous function populate()
async function populate() {
    // Introducing JavaScript Object Notation (JSON): https://json.org/
    // STEP 4a: Create i-scream.json file with companyName, headOffice, established, active, topFlavors(name, calories, type, ingredients, image) */
    // STEP 4b: Store the URL of a JSON file in a variable */
    const url = "https://priyansht.github.io/24W-JavaScript-03-Week11/js/i-scream.json";
    // STEP 5: Use the new URL to create a new request object
    const request = new Request(url);
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    const response = await fetch(request);
    // STEP 7: Capture the returned Response object and covert to a JSON object using json()
    const responseJson = await response.json();
    // STEP 8: Output the iScream JSON object to the console 
    console.log(responseJson);
    // STEP 9a: Invoke the populateHeader function here, then build it below
    populateHeader(responseJson);
    // STEP 10a: Invoke the showTopFlavors function here, then build it below
    showTopFlavors(responseJson);
}

// STEP 3b: Call the populate() function
populate();

/* STEP 9b: Build out the populateHeader() function */
function populateHeader(jsonData) {
    // Create the H1 element
    let h1 = document.createElement("h1");
    // Grab the company name from the JSON object and use it for the text node
    h1.textContent = jsonData.companyName;
    // Inject the complete H1 element into the DOM, inside the HEADER
    header.appendChild(h1);
}

/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonData) {
    // STEP 10c: Bind the JSON topFlavors object to a var
    const topFlavors = jsonData.topFlavors;
    // STEP 10d: Loop through the topFlavors object
    for (let i = 0; i < topFlavors.length; i++) {
        console.log(topFlavors[i]);
        // STEP 10e: build HTML elements for the content: article, h2, image, p1, p2, list
        let article = document.createElement("article"); // <article></article>
        let h2 = document.createElement("h2"); // <h2></h2>
        let p1 = document.createElement("p"); // <p></p>
        let p2 = document.createElement("p"); // <p></p>
        let image = document.createElement("img"); // <img>
        let list = document.createElement("ul"); // <ul></ul>
        // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        h2.textContent = topFlavors[i].name;
        p1.textContent = "Calories: " + topFlavors[i].calories;
        p2.textContent = "Type: " + topFlavors[i].type;
        image.setAttribute("src", topFlavors[i].image); // <img src="path to the image">
        // STEP 10g: Build a loop for the ingredients array in the JSON
        let ingredients = topFlavors[i].ingredients;
        for (let j = 0; j < ingredients.length; j++) {
            console.log(ingredients[j]);
            let listItem = document.createElement("li"); // <li></li>
            listItem.textContent = ingredients[j];
            /*
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            */
            list.appendChild(listItem);
        }
        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(list);
        article.appendChild(image);

        section.appendChild(article);
    }
}

// STEP 11: Add two more flavours of ice cream to the local JSON file
async function addNewFlavors() {
    // Specify the URL of the JSON file
    const url = "https://priyansht.github.io/24W-JavaScript-03-Week11/js/i-scream.json";
    // Fetch the JSON data from the URL
    const response = await fetch(url);
    // Parse the JSON data
    const jsonData = await response.json();

    // Define the details of the new ice cream flavors
    const coconutCocoIceCream = {
        "name": "Coconut Coco Ice Cream",
        "calories": 250,
        "type": "Dairy-Free",
        "ingredients": ["Coconut milk", "Cocoa powder", "Sugar", "Vanilla extract"],
        "image": "/images/coconut-coco-icecream.jpg"
    };

    const badamBountyIceCream = {
        "name": "Badam Bounty Ice Cream",
        "calories": 280,
        "type": "Nutty",
        "ingredients": ["Almonds", "Chocolate chunks", "Cream", "Sugar"],
        "image": "/images/badam-bounty-icecream.jpg"
    };

    // Add the new flavors to the existing list
    jsonData.topFlavors.push(coconutCocoIceCream, badamBountyIceCream);

    // Output the updated JSON data
    console.log(jsonData);
}

// Call the function to add the new flavors
addNewFlavors();
