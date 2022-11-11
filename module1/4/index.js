const userName = prompt('What is your name?');

let userRoom = null;

const randomClass = Math.floor((Math.random() * 4) + 1);

switch (randomClass) {
    case 1:
        userRoom = 'Gryffindor';
        break;
    case 2:
        userRoom = 'Slytherin';
        break;
    case 3:
        userRoom = 'Hufflepuff';
        break;
    case 4:
        userRoom = 'Ravenclaw';

    default:
        break;
}

document.getElementById('target').innerHTML = `${userName}, you are ${userRoom}.`;