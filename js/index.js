// Array of cocktail objects
const cocktails = [
    {
        name: "Margarita",
        type: "classic",
        description: "A refreshing cocktail with tequila, lime juice, and orange liqueur.",
        image: "images/margarita.jpg",
        price: "8 euro"
    },
    {
        name: "Pina Colada",
        type: "classic",
        description: "A tropical cocktail made with rum, coconut cream, and pineapple juice.",
        image: "images/pinacolada.jpg",
        price: "8 euro"
    },
    {
        name: "Virgin Mojito",
        type: "mocktail",
        description: "A non-alcoholic version of the classic mojito with mint and lime.",
        image: "images/mojito.jpg",
        price: "7 euro"
    },
    {
        name: "Shirley Temple",
        type: "mocktail",
        description: "A sweet non-alcoholic drink made with ginger ale and grenadine.",
        image: "images/shirley-temple.jpg",
        price: "8.5 euro"
    },
    {
        name: "Espresso Martini",
        type: "classic",
        description: "A cold caffeinated alcoholic drink made with espresso, coffee liqueur, and vodka.",
        image: "images/espreso-martini.jpg",
        price: "9 euro"
    },
    {
        name: "Daiqury Strawbery",
        type: "classic",
        description: "A is a cocktail whose main ingredients are rum, citrus juice, and sugar or other sweetener.",
        image: "images/daiquri-strawberry.jpg",
        price: "8 euro"
    },
    {
        name: "Negroni",
        type: "aperitivos",
        description: "The negroni is a cocktail, made of equal parts gin, vermouth rosso, and Campari.",
        image: "images/negroni.jpg",
        price: "9 euro"
    },
    {
        name: "Old Fashioned",
        type: "classic",
        description: "The old fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey.",
        image: "images/old-fashion.jpg",
        price: "10 euro"
    },
    {
        name: "Sex on the beach",
        type: "classic",
        description: "A sex on the beach is an cocktail with vodka, peach schnapps, orange juice and cranberry juice.",
        image: "images/sex-on-the-beach.jpg",
        price: "7.5 euro"
    },
    {
        name: "Garibaldi",
        type: "aperitivos",
        description: "Consisting of just two ingredients,Campari and orange juice.",
        image: "images/garibaldi-aperitiv.jpg",
        price: "8 euro"
    },
    {
        name: "Aperol Spritz",
        type: "aperitivos",
        description: "Is one of the most commonly ordered cocktails which is made with proseco,aperol and soda water.",
        image: "images/aperol-spritz.jpg",
        price: "7.5 euro"
    },
    {
        name: "Campari Spritz",
        type: "aperitivos",
        description: "A tasty aperitiv made with Campari,proseco and orange juice.",
        image: "images/campari-spritz.jpg",
        price: "7.5 euro"
    },
    {
        name: "Hugo Aperitiv",
        type: "aperitivos",
        description: "The Hugo is an alcoholic aperitif based on prosecco, elderflower syrup, seltzer and mint leaves.",
        image: "images/hugo-aperitiv.jpg",
        price: "8 euro"
    },
    {
        name: "Gin Lemon",
        type: "long drinks",
        description: "Lemon gin is a very well known and appreciated cocktail, born as a variant of gin and lemon juice.",
        image: "images/gin lemon.jpg",
        price: "6 euro"
    },
    {
        name: "Gin Tonik",
        type: "long drinks",
        description: "Lemon gin is a very well known and appreciated cocktail, born as a variant of gin and tonic water.",
        image: "images/gin-tonik.jpg",
        price: "6 euro"
    },
    {
        name: "Jack Cola",
        type: "long drinks",
        description: "Whiskey and Coke is a highball cocktail made by mixing whiskey with Coca-Cola or other colas.",
        image: "images/jack-cola.jpg",
        price: "7 euro"
    },
    {
        name: "Jagerbomb",
        type: "long drinks",
        description: "A Jägerbomb is a bomb mixed drink made by dropping a shot of Jägermeister into an energy drink.",
        image: "images/jagerbomb.jpg",
        price: "8 euro"
    },
    {
        name: "Vodka Lemon",
        type: "long drinks",
        description: "Lemon vodka is a very well known and appreciated cocktail, born as a variant of vodka and lemon juice.",
        image: "images/vodka-lemon.jpg",
        price: "7 euro"
    },
];
function renderCocktails(filter) {
    const cocktailList = document.getElementById('cocktailList');
    cocktailList.innerHTML = '';

    const filteredCocktails = filter === 'all' ? cocktails : cocktails.filter(c => c.type === filter);

    filteredCocktails.forEach(cocktail => {
        const cocktailCard = document.createElement('div');
        cocktailCard.classList.add('col-md-4', 'mb-4');
        cocktailCard.innerHTML = `
            <div class="card cocktail-card">
                <img src="${cocktail.image}" class="card-img-top" alt="${cocktail.name}">
                <div class="card-body">
                    <h5 class="card-title">${cocktail.name}</h5>
                    <p class="card-text">${cocktail.description}</p>
                    <p>${cocktail.price}</p>
                </div>
            </div>
        `;
        cocktailList.appendChild(cocktailCard);
    });
}
renderCocktails('all');
function filterCocktails(type) {
    renderCocktails(type);
}
