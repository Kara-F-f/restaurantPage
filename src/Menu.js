function menuPage() {
    const content = document.querySelector('#content');
    const drink = document.createElement('strong');
    const appetizer = document.createElement('strong');
    const entree = document.createElement('strong');

    const d1 = document.createElement('div');
    const d2 = document.createElement('div');
    const a1 = document.createElement('div');;
    const a2 = document.createElement('div');
    const e1 = document.createElement('div');
    const e2 = document.createElement('div');

    drink.textContent = "Drinks";
    appetizer.textContent = "Appetizers";
    entree.textContent = "Entrees";

    d1.textContent = "Sake $5";
    d2.textContent = "Hot Tea $2";
    a1.textContent = "Oyster on Half Shell $2";
    a2.textContent = "Calamari Ceviche $10";
    e1.textContent = "Rainbow Sushi Roll";
    e2.textContent = "House Special Ramen";

    drink.appendChild(d1);
    drink.appendChild(d2);
    appetizer.appendChild(a1);
    appetizer.appendChild(a2);
    entree.appendChild(e1);
    entree.appendChild(e2);

    content.appendChild(drink);
    content.appendChild(appetizer);
    content.appendChild(entree);
};

export default menuPage;
