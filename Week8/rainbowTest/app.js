const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
for (let i = 0; i < colors.length; i++) {
  document.getElementsByTagName('SPAN')[i].style.color = colors[i];
}