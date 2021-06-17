// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto,
//  che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno
//  con il proprio colore e il proprio nome.

// definisco un array di oggetti


const cats = [
{
   'nome': 'buffy',
    'age'  : 5,
    'color': '#F75C1E',
   'gender' : 'maschio'

},
{
    'nome': 'silvestro',
    'age'  : 3,
    'color': 'F75C1E',
    'gender' : 'maschio'
    
 },
 {
    'nome': 'layla',
    'age'  : 9,
    'color': '#000000',
    'gender' : 'femmina'
    
},
{
    'nome': 'susette',
    'age'  : 1,
    'color': '#AAA5A2',
    'gender' : 'femmina'
    
 },
 {
    'nome': 'boston',
     'age'  : 1,
     'color': '#000000',
    'gender' : 'maschio'
        
},
{
     'nome': 'claire',
     'age'  : 1,
     'color': '#B900F6',
     'gender' : 'femmina'
            
}

  
];


// stampo in pagina i gatti con il nome e il proprio colore

cats.forEach((element) => {
    document.getElementById('container').innerHTML += 
    
    `
    ${element.nome}<i class = "fas fa-cat" style ="color: ${element.color}"></i> 
    `;
    

    });












// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere
//  a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
//   Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.


// divido i gatti in due contenitori
const maleCats = [];
const femaleCats = [];

// rosa se è femmina e blue se è maschio
const pink = "#EEA7B3";

const blue = "#211CBB";


// il colore del fiocco deve essere più tenue se è più giovane e se è vecchio più scuro




















// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, 
// inserendo solamente nome, colore e opacità del fiocco per ogni gatto.