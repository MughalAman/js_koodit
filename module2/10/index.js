let candidates = [];
const num_of_candidates = Number(prompt('Enter the number of candidates:'));

for (let i = 0; i < num_of_candidates; i++) {
    const name = prompt(`Name for candidate ${i + 1}`);
    candidates.push({name: name, votes: 0});
}

const num_of_voters = Number(prompt('Enter the number of voters:'));

for (let i = 0; i < num_of_voters; i++) {
    const vote = Number(prompt(`Vote for candidate enter value 1 - ${candidates.length}:`));
    if(isNaN(vote) === false && vote > 0 && vote <= candidates.length) {
        candidates[vote - 1].votes++;
    }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
console.log('Results:');

for (let i = 0; i < candidates.length; i++) {
    console.log(`${candidates[i].name}: ${candidates[i].votes} votes.`);
}