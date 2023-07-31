const btn = document.querySelector('.btn')

btn.addEventListener('click',onSubmit)

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
        localStorage.setItem('name',userName.value)
        localStorage.setItem('email',email.value)
        userName.value = ''
        email.value ='';
    }
}