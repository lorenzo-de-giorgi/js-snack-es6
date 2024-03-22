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