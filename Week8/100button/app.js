// WRITE YOUR CODE IN HERE:
for (let i = 0; i < 100; i++) {
    const newButton = document.createElement('button');
    const heyText = document.createTextNode('Hey!');
    newButton.appendChild(heyText);
    document.getElementById("container").appendChild(newButton);
}