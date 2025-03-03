const section = document.querySelector('.cont');
const ajouter = document.querySelector('#ajouter');
const supprimer = document.querySelector('#supprimer');
console.log(section);
console.log(ajouter);
console.log(supprimer);





function ajouterCard() {
    // e.preventDefault();
    const addCard = document.createElement("div");
    addCard.className = "card";
  
    const image = document.createElement("img");
    image.src = "https://picsum.photos/200/200?random=2";
  
    const paragraph = document.createElement("p");
  
    paragraph.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    addCard.appendChild(image);
    addCard.appendChild(paragraph);
    section.appendChild(addCard);
  
  }
 
  ajouter.addEventListener("click", ajouterCard);

function supprimerCard() {
  // e.preventDefault();
  let supp = section.lastChild;
  supp.remove();

}
supprimer.addEventListener("click", supprimerCard);

////////////////////////////////////////////////////////////////////////////////////////////////


// const section = document.getElementById('cont');
// const ajouter = document.getElementById('ajouter');
// const supprimer = document.getElementById('supprimer');

// function ajouterCard(e) {
//     e.preventDefault();
//     const addCard = document.createElement("div");
//     addCard.className = "card";

//     const image = document.createElement("img");
//     image.src = "https://picsum.photos/200/200?random=" + Math.floor(Math.random() * 1000);

//     const paragraph = document.createElement("p");
//     paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

//     addCard.appendChild(image);
//     addCard.appendChild(paragraph);
//     section.appendChild(addCard);
// }

// ajouter.addEventListener("click", ajouterCard);

// function supprimerCard(e) {
//     e.preventDefault();
//     const lastCard = section.lastElementChild;

//     if (lastCard) {
//         lastCard.remove();
//     } else {
//         alert("Aucune carte à supprimer !");
//     }
// }

// supprimer.addEventListener("click", supprimerCard);








