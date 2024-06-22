const todoform = document.querySelector(".todoform");

const todoinput = document.querySelector('.inputtask input[type="text"]');

const todolist = document.querySelector('.todolist');

todoform.addEventListener('submit', (e) => {
    e.preventDefault();
    const newtodotext = todoinput.value.trim();
    if (newtodotext === "") return;
    const newli = document.createElement('li');
    const newliinnerhtml = `
    <span class="text">${newtodotext}</span>
        <div class="buttons">      
        <button class="thirdlinebuttons done">Done</button>
        <button class="thirdlinebuttons delete">Delete</button>
        </div>`;
    newli.innerHTML = newliinnerhtml;
    todolist.append(newli);
    todoinput.value = "";
});

todolist.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        const targetedli = e.target.closest('li');
        targetedli.remove();
    }
    if (e.target.classList.contains('done')) {
        const lispan = e.target.closest('li').querySelector('.text');
        lispan.style.textDecoration = lispan.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    }
});
