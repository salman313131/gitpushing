const form = document.querySelector('#myForm')
const items = document.getElementById('users')

form.addEventListener('submit',onSubmit)
items.addEventListener('click',removeItem)

function onSubmit(e){
    e.preventDefault();
    const userName = document.querySelector('#name')
    const email = document.querySelector('#email')
    if (userName.value === '' || email.value === ''){
        const msg = document.querySelector('#msg')
        msg.textContent = 'Please enter value'
        setTimeout(()=>msg.remove(),3000)
    }
    else{
        const storage = JSON.stringify({name:userName.value,email:email.value})
        localStorage.setItem(email.value,storage)
        const users = document.getElementById('users')
        const newLi = document.createElement('li')
        newLi.appendChild(document.createTextNode(`${userName.value} ${email.value}`));
        const newBtn = document.createElement('button')
        newBtn.textContent = ' Delete'
        newBtn.className = 'delete'
        newLi.appendChild(newBtn);
        users.appendChild(newLi);
        userName.value = '';
        email.value ='';
    }
}
function removeItem(e){
    if (e.target.classList.contains('delete')){
        const li = e.target.parentElement;
        const listLi = li.textContent.split(" ");
        items.removeChild(li)
        localStorage.removeItem(listLi[1])
    }
}
