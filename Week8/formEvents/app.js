const groceryForm = document.querySelector('form');
const groceryList = document.querySelector('ul');

groceryForm.addEventListener('submit', function (e) {
  // prevent default form submit actions 
  e.preventDefault();
  // target and store quantity and product values
  const productInput = groceryForm.elements.product;
  const quantityInput = groceryForm.elements.qty;
  // add to list
  addItem(quantityInput.value, productInput.value);
  //clear inputs
  productInput.value = '';
  quantityInput.value = '';
});

const addItem = (quantity, product) => {
  let newItem = document.createElement("LI");
  newItem.append(`${quantity} ${product}`);
  groceryList.append(newItem);
}
