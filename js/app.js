
function findTomato() {
    var tomato = ["https://www.bbcgoodfood.com/recipes/ultimate-tomato-salsa", "https://www.jamieoliver.com/recipes/vegetables-recipes/tomato-soup/", "https://www.bbcgoodfood.com/recipes/tomato-chickpea-curry", "https://www.bbcgoodfood.com/recipes/tomato-bruschetta", "https://www.bbcgoodfood.com/recipes/halloumi-tomatoes-pomegranate-molasses"];

    var random = Math.floor(Math.random() * (tomato.length - 1));

    document.getElementById("randomTomato").setAttribute("value", tomato[random]);
}

function findCheese() {
    var cheese = ["https://www.jamieoliver.com/recipes/pasta-recipes/macaroni-cheese/", "https://www.bbcgoodfood.com/recipes/cauliflower-cheese-soup", "https://www.jamieoliver.com/recipes/bread-recipes/cauliflower-cheese-pizza-pie/", "https://www.bbcgoodfood.com/recipes/cheese-stars"];

    var random = Math.floor(Math.random() * (cheese.length - 1));

    document.getElementById("randomCheese").setAttribute("value", cheese[random]);
}

function findBeans() {
    var beans = ["https://www.bbcgoodfood.com/recipes/bean-enchiladas", "https://www.jamieoliver.com/recipes/pasta-recipes/tomato-broad-bean-orecchiette/", "https://www.bbcgoodfood.com/recipes/sausage-bean-casserole", "https://www.jamieoliver.com/recipes/vegetable-recipes/roasted-black-bean-burgers/"];

    var random = Math.floor(Math.random() * (beans.length - 1));

    document.getElementById("randomBeans").setAttribute("value", beans[random]);
}

function findCarrots() {
    var carrots = ["https://www.jamieoliver.com/recipes/vegetables-recipes/carrots/", "https://www.bbcgoodfood.com/recipes/carrot-biriyani", "http://allrecipes.co.uk/recipe/13483/roast-balsamic-carrots.aspx", "https://www.bbcgoodfood.com/recipes/spiced-carrot-lentil-soup"];

    var random = Math.floor(Math.random() * (carrots.length - 1));

    document.getElementById("randomCarrots").setAttribute("value", carrots[random]);
}

function findChicken() {
    var chicken = ["http://allrecipes.co.uk/recipe/552/healthy-roast-chicken.aspx", "https://www.bbcgoodfood.com/recipes/chicken-biryani", "http://allrecipes.co.uk/recipe/6074/chicken-and-vegetable-pie.aspx", "https://www.bbcgoodfood.com/recipes/summer-winter-chicken"];

    var random = Math.floor(Math.random() * (chicken.length - 1));

    document.getElementById("randomChicken").setAttribute("value", chicken[random]);
}

function findLamb() {
    var lamb = ["https://www.bbcgoodfood.com/recipes/fruity-lamb-tagine", "http://allrecipes.co.uk/recipe/17596/kashmiri-lamb.aspx", "https://www.bbcgoodfood.com/recipes/lamb-koftas", "http://allrecipes.co.uk/recipe/408/heavenly-lamb-shanks.aspx"];

    var random = Math.floor(Math.random() * (lamb.length - 1));

    document.getElementById("randomLamb").setAttribute("value", lamb[random]);
}

function findPork() {
    var pork = ["http://allrecipes.co.uk/recipe/23290/sweet-and-sour-chinese-pork.aspx", "https://www.bbcgoodfood.com/recipes/thai-pork-peanut-curry", "http://allrecipes.co.uk/recipe/35177/perfect-bbq-pork-ribs.aspx", "https://www.bbcgoodfood.com/recipes/sticky-pork"];

    var random = Math.floor(Math.random() * (pork.length - 1));

    document.getElementById("randomPork").setAttribute("value", pork[random]);
}

function findPrawns() {
    var prawns = ["https://www.bbcgoodfood.com/recipes/easy-thai-prawn-curry", "http://allrecipes.co.uk/recipe/917/barbecued-prawns.aspx", "http://allrecipes.co.uk/recipe/21217/parmesan-and-garlic-prawns-with-pasta.aspx","https://www.bbcgoodfood.com/recipes/prawn-jambalaya"];

    var random = Math.floor(Math.random() * (prawns.length - 1));

    document.getElementById("randomPrawns").setAttribute("value", prawns[random]);
}

