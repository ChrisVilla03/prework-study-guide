var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];



function listTopics() {
    for (var x= 0; x <topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (randomTopic === topics[0]) {
        console.log("Let's study HTML!");
    } else if (randomTopic === topics[1]) {
        console.log("Let's study CSS!");
    } else if (randomTopic === topics[2]) {
        console.log("Let's study Git!");
    } else if (randomTopic === topics[3]) {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}
console.log('Here are some ofhte topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();