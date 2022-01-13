let dynamicText = document.getElementById('dynamicText');
let dynTextOne = 'the people you love';
let dynTextTwo = 'your friends';
let dynTextThree = 'your family';
let dynTextFour = 'your coworkers';
let dynTextFive = 'your congregation';
//let dynTextArray = ['the people you love', 'your friends', 'your family', 'your coworkers', 'your congregation'];
let dynTextArray = [dynTextOne, dynTextTwo, dynTextThree, dynTextFour, dynTextFive];


// Dynamic Text Typing Functionality //



function waitForMs(ms) {
    return new Promise(resolve => {
        setTimeout(() => {resolve('') }, ms);
    })
};

async function deleteDynamicText(sentence) {
    while (document.getElementById('dynamicText') !== null) {
    await waitForMs(50);
    document.getElementById('dynamicText').lastChild.remove();
    i--;
    }
}

async function typeDynamicText(array) {
    for (sentence of array) {
        let i = 0;
        while (i < sentence.length) {
            await waitForMs(120);
            document.getElementById('dynamicText').innerHTML.push(sentence[i]);
            i++;
        };
        await waitForMs(2000);
        deleteDynamicText(sentence);
        await waitForMs(500);
    }
}
console.log(typeof dynTextArray);
typeDynamicText(dynTextArray);