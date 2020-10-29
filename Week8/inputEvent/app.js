let input = document.querySelector('input');
let h1 = document.querySelector('h1');

input.addEventListener('input', function (e){
    if (input.value) {
        h1.innerText = `Welcome, ${this.value}`;
    } else {
        h1.innerText = `Enter Your Username`;
    }
});
