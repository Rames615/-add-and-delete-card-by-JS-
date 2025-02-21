const section = document.getElementById('parent');
const ajouter = document.getElementById('ajouter');
const supprimer = document.getElementById('supprimer');


function ajouterCard(e) {
    e.preventDefault();
    const addCard = document.createElement("div");
    addCard.className = "card";
  
    const image = document.createElement("img");
    image.src = "https://picsum.photos/200/200?random=2";
  
    const paragraph = document.createElement("p");
  
    paragraph.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ;
    addCard.appendChild(image);
    addCard.appendChild(paragraph);
    section.appendChild(addCard);
  
   return addCard
  }
 
  ajouter.addEventListener("click", ajouterCard);

  function supprimerCard() {
    const cards = document.querySelectorAll("#parent");
    if (cards.length > 0) {
        section.removeChild(cards[cards.length - 1]); // Supprime la dernière carte ajoutée
    }
}
supprimer.addEventListener("click", supprimerCard);
////////////////////////////////////////////////////////////////////////////////////////////////


