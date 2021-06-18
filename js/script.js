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
// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere

cats.forEach((element) => {
    document.getElementById('container').innerHTML += 
    
    `
    ${element.nome}<i class = "fas fa-cat" style ="color: ${element.color}"></i> 
    `;
    

    });


    document.getElementById("container").innerHTML += "<br/><br/>Milestone 2";






// divido i gatti in due contenitori
// const maleCats = [];
// const femaleCats = [];

// rosa se è femmina e blue se è maschio
const pink = "#EEA7B3";

const blue = "#211CBB";


// il colore del fiocco deve essere più tenue se è più giovane e se è vecchio più scuro

const newCats = cats.map((element) =>{

    const nome = element.nome;
    const age = element.age;
    const color = element.color;
    const gender = element.gender;

    // primo metodo

    // let ribbonColor ='blue'
    // if(gender == 'femmmina'){
    //   ribbonColor = pink;
    // }

    //  secondo metodo:
    // let ribbonColor = (gender == 'femmina')? pink : blue;

    // oppure lo metto direttamente dentro return


    const opacity = element.age / 9;

    return {
      nome,
      age,
      color,
      gender,
      ribbon : {
          color : (gender == 'femmina')? pink : blue,
          opacity : opacity
          
      }
    }

});
const printCatsRibbon = (array) => {
    array.forEach((element) => {
        document.getElementById("container").innerHTML += `<br/><br/>
            ${element.name} : <i class="fas fa-cat" style="color:${element.color}"></i> 
            <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>,
        
        `;
    });
} 



































// newCats.forEach((element) => {
//     document.getElementById('container').innerHTML += 
    
//     `
//     <br/><br/>
//     ${element.nome}<i class = "fas fa-cat" style ="color: ${element.color}"></i> 
//     <i class = "fas fa-ribbon" style ="color: ${element.ribbon.color}; opacity : ${element.ribbon.opacity} "</i> 

//     `;
    

//     });

    


// console.log(newCats);


//  maleCats = newCats.filter((element) => {
//     return element.gender === "maschio";
    
//     });
//     maleCats.forEach((element) => {
//         document.getElementById('container').innerHTML += 
        
//         `
//         <br/><br/>
//         ${element.nome}<i class = "fas fa-cat" style ="color: ${element.color}"></i> 
//         <i class = "fas fa-ribbon" style ="color: ${element.ribbon.color}; opacity : ${element.ribbon.opacity} "</i> 
    
//         `;
        
    
//         });

       
        
    

//     const feMaleCats = newCats.filter((element)=> {
//         return element.gender === "femmina";
        
//         });
//         feMaleCats.forEach((element) => {
//             document.getElementById('container').innerHTML += 
            
//             `
//             <br/><br/>
//             ${element.nome}<i class = "fas fa-cat" style ="color: ${element.color}"></i> 
//             <i class = "fas fa-ribbon" style ="color: ${element.ribbon.color}; opacity : ${element.ribbon.opacity} "</i> 
        
//             `;
            
        
//             });

 





// // Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, 
// // inserendo solamente nome, colore e opacità del fiocco per ogni gatto.

// let catsFemaleMale = [...femaleCats, ...Malecats];
// console.log(catsFemaleMale);


// const catsFemaleMaleZip = catsFemaleMale((element) => {

//    const{nome, color, ribbon } = element;
//     return {
//        nome,
//        color,
//        ribbon
//     }
// })

// catsFemaleMaleZip.forEach((element) => {
//     document.getElementById('container').innerHTML += 
    
//     `
//     <br/><br/>
//     ${element.nome}<i class = "fas fa-cat" style ="color: ${element.color}"></i> 
//     <i class = "fas fa-ribbon" style ="color: ${element.ribbon.color}; opacity : ${element.ribbon.opacity} "</i> 

//     `;
    

//     });








    




















