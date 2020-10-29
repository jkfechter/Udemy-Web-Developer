// WRITE YOUR CODE IN HERE:
var items = document.getElementsByTagName("li");
for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains('highlight')) {
        items[i].classList.remove('highlight');
    } else items[i].classList.add('highlight');
}