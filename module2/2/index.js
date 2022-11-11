const num_of_participants = Number(prompt("Enter the number of participants"));
let participants = [];

for (let i = 0; i < num_of_participants; i++) {
    const name = prompt("Enter the name of the participant");
    participants.push(name);
}

const ol = document.getElementById("list");

for (let i = 0; i < participants.length; i++) {
    const li = document.createElement("li");
    li.textContent = participants[i];
    ol.appendChild(li);
}