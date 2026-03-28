const menuData = {
  nl: {
    title: "La Croute",
    subtitle: "Fine Dining & Steenoven",
    langToggle: "English",
    sections: {
      entrees: "Voorgerechten",
      mainDishes: "Hoofdgerechten",
      kids: "Kinderen",
      sides: "Bijgerechten",
      desserts: "Desserts",
      drinks: "Wijnen & Dranken",
    },
    items: {
      entrees: [
        {
          name: "Brood",
          desc: "Met gezouten boter en salieboter",
          price: "7,50",
          veg: true,
        },
        {
          name: "Klassieke Franse uiensoep",
          desc: "Met gegratineerde kaaskorst",
          price: "9,00",
        },
        {
          name: "Vacherin Mont d’Or",
          desc: "Warm geserveerd met brood om te dippen",
          price: "13,50",
          veg: true,
        },
        {
          name: "Carpaccio van witvis",
          desc: "Met sjalot-kappertjesvinaigrette",
          price: "15,50",
        },
        {
          name: "Langzaam gegaarde runderwang",
          desc: "Met geglaceerde seizoensgroentes",
          price: "16,50",
        },
        {
          name: "Salade van spekbonen",
          desc: "Geroosterde groenten, ei en Franse dressing",
          price: "15,00",
          veg: true,
        },
      ],
      mainDishes: [
        {
          name: "Catch of the day",
          desc: "Dagelijks wisselende verse vis",
          price: "28,50",
        },
        {
          name: "Papillotte van forel",
          desc: "Gegaard met amandelen en kruiden",
          price: "27,00",
        },
        {
          name: "Gesauteerde spinazie",
          desc: "Met bospaddenstoelen en bladerdeeghoelje",
          price: "24,00",
          veg: true,
        },
        {
          name: "Fricassée van Coquelette",
          desc: "Met verfijnde morilles",
          price: "29,00",
        },
        {
          name: "Ossenhaas (Steenoven)",
          desc: "140g / 250g",
          price: "28,50 / 39,50",
        },
        {
          name: "Bavette (Steenoven)",
          desc: "140g / 250g",
          price: "22,00 / 31,00",
        },
        { name: "Ribeye (Steenoven)", desc: "250g", price: "36,50" },
      ],
      sides: [
        { name: "Frites", desc: "Klassieke Franse frites", price: "6,50" },
        { name: "Aardappelen uit de oven", desc: "", price: "6,50" },
        { name: "Warme seizoensgroenten", desc: "", price: "6,50" },
        { name: "Groene salade", desc: "Met vinaigrette", price: "5,00" },
      ],
      kids: [
        { name: "Pasta bolognese", desc: "", price: "9,50" },
        { name: "Pizza bambino", desc: "", price: "9,50", veg: true },
        {
          name: "Catch of the day (Kids)",
          desc: "Met frites en salade",
          price: "12,50",
        },
      ],
      desserts: [
        {
          name: "Kinderbeker ijs",
          desc: "Vanille-ijs voor de kinderen",
          price: "5,00",
        },
        {
          name: "Dessert in een glas:",
          desc: "Keuze uit de volgende smaken:",
          price: "10,00",
          subitems: [
            "1. Vanille-honing met sinaasappel, kersencoulis en koekcrumble",
            "2. Koffie-caramel en macadamia",
            "3. Chocolade",
          ],
        },
        { name: "4. Kaasplankje", desc: "", price: "14,50" },
      ],
      drinks: [
        { name: "— VINS MOUSSEUX —", desc: "", price: "" },
        {
          name: "SV Pé Crémant de Loire Blanc Brut",
          desc: "Champagne-alternatief uit Vouvray met chenin blanc in de hoofdrol",
          price: "8,50 | 42,50",
        },
        {
          name: "Pas du Tout Alcoholvrije Bubbel - 200 ML",
          desc: "Frisfruitige gedealcoholiseerde bubbel met minder dan 0,5% alcohol",
          price: "9,00",
        },
        { name: "— VINS BLANCS —", desc: "", price: "" },
        {
          name: "L’Estabel Languedoc Blanc",
          desc: "Blend van bourboulenc, clairette, grenache blanc, vermentino en viognier",
          price: "5,50 | 27,50",
        },
        {
          name: "Fleurs Du Mal Gascogne Blanc",
          desc: "Frisse smaakexplosie van colombard, gros manseng en sauvignon blanc",
          price: "6,00 | 30,00",
        },
        {
          name: "Chevalier d'Anthelme Côtes du Rhône Blanc",
          desc: "Powerblend van clairette, grenache blanc, roussanne en viognier",
          price: "8,00 | 40,00",
        },
        {
          name: "Mission Estate Marlborough Pinot Gris",
          desc: "Deze aantrekkelijke Nieuw-Zeelandse pinot gris is barstensvol fruit",
          price: "8,50 | 42,50",
        },
        {
          name: "Ménard-Gaborit Muscadet de Sèvre & Maine sur Lie ‘Accostage’",
          desc: "Bij de monding van de Loire in de oceaan vind je Neptunus’ wijngaarden",
          price: "40,00",
        },
        {
          name: "Mr. Riggs Cold Chalk Chardonnay",
          desc: "Australische chardonnay uit Adelaide Hills gefermenteerd op eikenhout",
          price: "42,50",
        },
        { name: "— VINS ROSÉS —", desc: "", price: "" },
        {
          name: "Gris de Coeur Languedoc",
          desc: "Verleidelijke Zuid-Franse rosé: zomers, fruitig en kruidig",
          price: "6,00 | 30,00",
        },
        {
          name: "Saint Ferréol Coteaux Varois en Provence ‘Les Vaunières’",
          desc: "Bleekroze typische ‘Rosé de Provence’: gevaarlijk doordrinkbaar",
          price: "8,00 | 40,00",
        },
        { name: "— VINS ROUGES —", desc: "", price: "" },
        {
          name: "L’Estabel Languedoc Rouge",
          desc: "Sappige en kruidige blend van syrah, grenache en carignan",
          price: "5,50 | 27,50",
        },
        {
          name: "Les Deux Pays d'Oc Cabernet Sauvignon - Syrah",
          desc: "Krachtig rood uit Zuid-Frankrijk in conversie naar biologisch",
          price: "5,50 | 27,50",
        },
        {
          name: "Mr. Riggs McLaren Vale Shiraz",
          desc: "Houtgerijpte Australische krachtpatser met stevige tannines",
          price: "7,50 | 37,50",
        },
        {
          name: "Solitude Côtes du Rhône Reserve",
          desc: "Internationaal bekroonde bioblend van grenache, syrah en mourvèdre",
          price: "8,50 | 42,50",
        },
        {
          name: "Chateau de Cranne Black Malbec",
          desc: "Stoere en donkere biologische malbec uit Bordeaux",
          price: "42,50",
        },
        {
          name: "Lost Wolf Grenache Barossa Valley",
          desc: "Zonnige Australische grenache: twintig maanden gerijpt op eikenhout",
          price: "60,00",
        },
      ],
    },
  },
  en: {
    title: "La Croute",
    subtitle: "Fine Dining & Stone Oven",
    langToggle: "Nederlands",
    sections: {
      entrees: "Entrees",
      mainDishes: "Main Dishes",
      kids: "Kids",
      sides: "Sides",
      desserts: "Desserts",
      drinks: "Wines & Drinks",
    },
    items: {
      entrees: [
        {
          name: "Bread",
          desc: "With salted butter and sage butter",
          price: "7.50",
          veg: true,
        },
        {
          name: "Classic French Onion Soup",
          desc: "With gratinéed cheese crust",
          price: "9.00",
        },
        {
          name: "Vacherin Mont d’Or",
          desc: "Served warm with bread for dipping",
          price: "13.50",
          veg: true,
        },
        {
          name: "White Fish Carpaccio",
          desc: "With shallot-caper vinaigrette",
          price: "15.50",
        },
        {
          name: "Slow-Cooked Beef Cheek",
          desc: "With glazed seasonal vegetables",
          price: "16.50",
        },
        {
          name: "Green Bean Salad",
          desc: "Roasted vegetables, egg and French dressing",
          price: "15.00",
          veg: true,
        },
      ],
      mainDishes: [
        {
          name: "Catch of the Day",
          desc: "Daily changing fresh fish",
          price: "28.50",
        },
        {
          name: "Trout en Papillote",
          desc: "Cooked with almonds and herbs",
          price: "27.00",
        },
        {
          name: "Sautéed Spinach",
          desc: "With forest mushrooms and puff pastry crust",
          price: "24.00",
          veg: true,
        },
        {
          name: "Coquelette Fricassee",
          desc: "With refined morels",
          price: "29.00",
        },
        {
          name: "Tenderloin (Stone Oven)",
          desc: "140g / 250g",
          price: "28.50 / 39.50",
        },
        {
          name: "Flank Steak (Stone Oven)",
          desc: "140g / 250g",
          price: "22.00 / 31.00",
        },
        { name: "Ribeye (Stone Oven)", desc: "250g", price: "36.50" },
      ],
      sides: [
        { name: "French Fries", desc: "Classic golden fries", price: "6.50" },
        { name: "Oven-Baked Potatoes", desc: "", price: "6.50" },
        { name: "Warm Seasonal Vegetables", desc: "", price: "6.50" },
        {
          name: "Green Salad",
          desc: "With classic vinaigrette",
          price: "5.00",
        },
      ],
      kids: [
        { name: "Pasta Bolognese", desc: "", price: "9.50" },
        { name: "Pizza Bambino", desc: "", price: "9.50", veg: true },
        {
          name: "Catch of the Day (Kids)",
          desc: "With fries and salad",
          price: "12.50",
        },
      ],
      desserts: [
        {
          name: "Kids Ice Cream Cup",
          desc: "Vanilla ice cream for children",
          price: "5.00",
        },
        {
          name: "Dessert in a Glass:",
          desc: "Choice of the following flavors:",
          price: "10.00",
          subitems: [
            "1. Vanilla-honey with orange, cherry coulis, and cookie crumble",
            "2. Coffee-caramel and macadamia",
            "3. Chocolate",
          ],
        },
        { name: "4. Cheese Platter", desc: "", price: "14.50" },
      ],
      drinks: [
        { name: "— VINS MOUSSEUX —", desc: "", price: "" },
        {
          name: "SV Pé Crémant de Loire Blanc Brut",
          desc: "Champagne alternative from Vouvray with Chenin Blanc in the lead role",
          price: "8.50 | 42.50",
        },
        {
          name: "Pas du Tout Alcohol-Free Bubbles - 200 ML",
          desc: "Fresh and fruity dealcoholized bubbles with less than 0.5% alcohol",
          price: "9.00",
        },
        { name: "— VINS BLANCS —", desc: "", price: "" },
        {
          name: "L’Estabel Languedoc Blanc",
          desc: "Blend of Bourboulenc, Clairette, Grenache Blanc, Vermentino and Viognier",
          price: "5.50 | 27.50",
        },
        {
          name: "Fleurs Du Mal Gascogne Blanc",
          desc: "Fresh flavor explosion of Colombard, Gros Manseng and Sauvignon Blanc",
          price: "6.00 | 30.00",
        },
        {
          name: "Chevalier d'Anthelme Côtes du Rhône Blanc",
          desc: "Power blend of Clairette, Grenache Blanc, Roussanne and Viognier",
          price: "8.00 | 40.00",
        },
        {
          name: "Mission Estate Marlborough Pinot Gris",
          desc: "This attractive New Zealand Pinot Gris is bursting with fruit",
          price: "8.50 | 42.50",
        },
        {
          name: "Ménard-Gaborit Muscadet de Sèvre & Maine sur Lie ‘Accostage’",
          desc: "At the mouth of the Loire in the ocean you find Neptune's vineyards",
          price: "40.00",
        },
        {
          name: "Mr. Riggs Cold Chalk Chardonnay",
          desc: "Australian Chardonnay from Adelaide Hills fermented in oak",
          price: "42.50",
        },
        { name: "— VINS ROSÉS —", desc: "", price: "" },
        {
          name: "Gris de Coeur Languedoc",
          desc: "Seductive Southern French rosé: summery, fruity and spicy",
          price: "6.00 | 30.00",
        },
        {
          name: "Saint Ferréol Coteaux Varois en Provence ‘Les Vaunières’",
          desc: "Pale pink typical 'Rosé de Provence': dangerously drinkable",
          price: "8.00 | 40.00",
        },
        { name: "— VINS ROUGES —", desc: "", price: "" },
        {
          name: "L’Estabel Languedoc Rouge",
          desc: "Juicy and spicy blend of Syrah, Grenache and Carignan",
          price: "5.50 | 27.50",
        },
        {
          name: "Les Deux Pays d'Oc Cabernet Sauvignon - Syrah",
          desc: "Powerful red from the South of France in conversion to organic",
          price: "5.50 | 27.50",
        },
        {
          name: "Mr. Riggs McLaren Vale Shiraz",
          desc: "Oak-aged Australian powerhouse with firm tannins",
          price: "7.50 | 37.50",
        },
        {
          name: "Solitude Côtes du Rhône Reserve",
          desc: "Internationally awarded bio-blend of Grenache, Syrah and Mourvèdre",
          price: "8.50 | 42.50",
        },
        {
          name: "Chateau de Cranne Black Malbec",
          desc: "Tough and dark organic Malbec from Bordeaux",
          price: "42.50",
        },
        {
          name: "Lost Wolf Grenache Barossa Valley",
          desc: "Sunny Australian Grenache: aged for twenty months in oak",
          price: "60.00",
        },
      ],
    },
  },
};

let currentLang = "nl";

function switchLang() {
  currentLang = currentLang === "nl" ? "en" : "nl";
  renderMenu();
}

function renderMenu() {
  const data = menuData[currentLang];

  // Title & Subtitle
  document.getElementById("title").textContent = data.title;
  document.getElementById("subtitle").textContent = data.subtitle;
  document.getElementById("lang-btn").textContent = data.langToggle;

  // Sections
  const container = document.getElementById("menu-container");
  container.innerHTML = "";

  const nav = document.getElementById("section-nav");
  nav.innerHTML = "";

  for (const [key, sectionName] of Object.entries(data.sections)) {
    // Nav Buttons
    const btn = document.createElement("button");
    btn.className = "nav-btn";
    btn.textContent = sectionName;
    btn.onclick = () => scrollToSection(key);
    nav.appendChild(btn);

    // Section Content
    const section = document.createElement("section");
    section.id = key;
    section.className = "menu-section reveal";

    let html = `<h2 class="section-title">${sectionName}</h2>`;
    html += '<div class="items-grid">';

    data.items[key].forEach((item) => {
      const isHeader = item.name.startsWith("—");
      if (isHeader) {
        html += `<div class="menu-category-header">${item.name}</div>`;
      } else {
        html += `
          <div class="menu-item">
            <div class="item-header">
              <h3 class="item-name">${item.name} ${item.veg ? '<span class="veg-badge">V</span>' : ""}</h3>
              <span class="item-price">${item.price ? "€ " + item.price : ""}</span>
            </div>
            <p class="item-desc">${item.desc}</p>
            ${item.subitems ? `<ul class="subitems">${item.subitems.map((si) => `<li>${si}</li>`).join("")}</ul>` : ""}
          </div>
        `;
      }
    });

    html += "</div>";
    section.innerHTML = html;
    container.appendChild(section);
  }
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  const offset = 100; // Account for sticky nav
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = el.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
});
