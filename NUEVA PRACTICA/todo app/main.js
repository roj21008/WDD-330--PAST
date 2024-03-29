const input = document.querySelector('input');
const addBtn = document.querySelector('button');
const ul = document.querySelector('ul');
const empty = document.querySelector('p');

    

addBtn.addEventListener('click',(e)=> {
    e.preventDefault();
    const text = input.value;
    if (text !== "") {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent= text;

    
    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);
    input.value=""
    empty.style.display ='none';

    }
});


function addDeleteBtn(){
    const deleteBtn = document.createElement('button');
    
    deleteBtn.className='btn-delete';
    deleteBtn.textContent = 'X';
    
    deleteBtn.addEventListener('click',(e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll('li');
        if (items.length === 0) {
            setTimeout( function(){empty.style.display = "block"},3000)
        };

    });
    return deleteBtn;

};

