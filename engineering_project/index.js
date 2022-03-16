// one of the ideas that's possible to do. However, I would like to utilise the <input> tag from html. I have no clue how to do that yet, thus I shall substitute it with a prompt first.
var SchoolStudents = {
    215 :'Saint',
    270 : 'Ice',
    227 : 'Peipei',
    276 : 'Aom',
    106 : 'First',
    4 : 'James',
    107 : 'Tonkla',
    242 : 'P',
    260 : 'Ken',
    271 : 'Pie',
    350 : 'Angpao',
    347 : 'Fluke',
    6 : 'Chatchai',
    101 : 'Preem',
    142 : 'Boss',
    66 : 'Arm',
    201 : 'Ohm',
    217 : 'Ing Ing',
    261 : 'Inky'

};
alert('To exit the algorithm, type exit or Exit');
while (true){
    var ID = prompt('Input your student ID');
    if (ID in SchoolStudents === true){
        alert('Welcome ' + SchoolStudents[ID]);
    }
    else if (ID == 'Exit' || ID == 'exit'){
        break;
    }
    else if(ID in SchoolStudents === false){
        alert('Are you in this class?')
    }
};

// keep info somewhere with date and time.
// learn how to take the data and put it in google spreadsheet or excel.