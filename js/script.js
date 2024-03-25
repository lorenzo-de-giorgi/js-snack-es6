// funzione che genera numeri casuali
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// snack 1
let listVip = [
    {
        'tableName': 'Tavolo Vip',
        'guestName': 'Brad Pitt',
        'place': 1
    },
    {
        'tableName': 'Tavolo Vip',
        'guestName': 'Johnny Depp',
        'place': 2
    },
    {
        'tableName': 'Tavolo Vip',
        'guestName': 'Lady Gaga',
        'place': 3
    },
    {
        'tableName': 'Tavolo Vip',
        'guestName': 'Cristiano Ronaldo',
        'place': 4
    },
    {
        'tableName': 'Tavolo Vip',
        'guestName': 'Georgina Rodriguez',
        'place': 5
    },
    {
        'tableName': 'Tavolo Vip',
        'guestName': 'Chiara Ferragni',
        'place': 6
    },
    {
        'tableName': 'Tavolo Vip',
        'guestName': 'George Clooney',
        'place': 7
    },
    {
        'tableName': 'Tavolo Vip',
        'guestName': 'Amal Clooney',
        'place': 8
    },
    {
        'tableName': 'Tavolo Vip',
        'guestName': 'Fedez',
        'place': 9
    },
    {
        'tableName': 'Tavolo Vip',
        'guestName': 'Amadeus',
        'place': 10
    },
    {
        'tableName': 'Tavolo Vip',
        'guestName': 'Fiorello',
        'place': 11
    },
];

console.log(listVip);

// snack 2
// creo la lista con i dati 
let listStudent = [
    {
        'id': '213',
        'name': 'Marco della Rovere',
        'grades': '78'
    },
    {
        'id': '110',
        'name': 'Paola Cortellessa',
        'grades': '96'
    },
    {
        'id': '250',
        'name': 'Andrea Mantegna',
        'grades': '48'
    },
    {
        'id': '145',
        'name': 'Gaia Borromini',
        'grades': '74'
    },
    {
        'id': '196',
        'name': 'Luigi Grimaldello',
        'grades': '68'
    },
    {
        'id': '102',
        'name': 'Piero della Francesca',
        'grades': '50'
    },
    {
        'id': '120',
        'name': 'Francesca da Polenta',
        'grades': '84'
    },
];
// 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
let studentsName = listStudent.map((el) => {
    return el.name.toUpperCase()
})
console.log(studentsName);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
let studentsGrade70 = listStudent.filter((el) => {
    if(el.grades > 70){
        return el
    };
})
console.log(studentsGrade70);
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
let studentsGrade70Id120 = listStudent.filter((el) => {
    if(el.grades > 70  && el.id > 120){
        return el
    }
})
console.log(studentsGrade70Id120);

// snack 3
// creo la lista
let listBike = [
    {
        'name': 'Bianchi',
        'weight': 10
    },
    {
        'name': 'Atala',
        'weight': 12
    },
    {
        'name': 'Graziella',
        'weight': 14
    },
    {
        'name': 'Legnano',
        'weight': 11
    },
    {
        'name': 'Pinarello',
        'weight': 9
    },
    {
        'name': 'Bottecchia',
        'weight': 13
    },
    {
        'name': 'Torpado',
        'weight': 15
    },
    {
        'name': 'Olmo',
        'weight': 16
    },
    {
        'name': 'Cinelli',
        'weight': 7
    },
    {
        'name': 'Colnago',
        'weight': 7
    }
];

// stampo il nome della bico con il peso minore
let lightestBike = listBike[0];
listBike.forEach((el) => {
    if(el.weight < lightestBike.weight){
        lightestBike = el;
    }
});
const {name, weight} = lightestBike;
let result = document.getElementById('bike-weight').innerHTML = `La bici più leggera è ${name} e pesa ${weight} kg`;

// snack 4
var soccerTeam = [
    { 
        nome: "Roma",
        puntiFatti: 0, 
        falliSubiti: 0
    },
    { 
        nome: "Juventus",
        puntiFatti: 0, 
        falliSubiti: 0
    },
    { 
        nome: "Milan", 
        puntiFatti: 0, 
        falliSubiti: 0
    },
    { 
        nome: "Inter", 
        puntiFatti: 0, 
        falliSubiti: 0
    },
];
for(let i = 0; i < soccerTeam.length; i++){
    soccerTeam[i].puntiFatti = getRndInteger(0, 114);
    soccerTeam[i].falliSubiti = getRndInteger(0, 50);
};

let newSoccerTeamArray = [];
soccerTeam.forEach((el) => {
    let { nome, falliSubiti } = el;
    newSoccerTeamArray.push({nome, falliSubiti});
})
console.log(newSoccerTeamArray)