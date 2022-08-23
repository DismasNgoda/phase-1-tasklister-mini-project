document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    toDo(e.target.description.value)
  })
});

function toDo(toDoItems){
  let li = document.createElement('li');
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteItem)
  btn.textContent = ' X'
  li.textContent = toDoItems;
  li.appendChild(btn)
  console.log(li);
  document.querySelector('#tasks').appendChild(li);
}
function deleteItem(e){
  e.target.parentNode.remove()
}
