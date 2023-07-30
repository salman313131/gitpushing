const btn = document.querySelector('.btn')
const msg = document.querySelector('#msg')
const userName = document.querySelector('#name')
const email = document.querySelector('#email')
btn.addEventListener('click',onSubmit)
btn.addEventListener('mouseover',onMouseoverSubmit)
btn.addEventListener('mouseout', onMouseoutSubmit)

function onSubmit(e){
    e.preventDefault();
    if (userName.value === '' || email.value === ''){
        msg.textContent = 'Please enter value'
        setTimeout(()=>msg.remove(),3000)
    }
    else{
        console.log(`${userName.value} : ${email.value}`)
    }
}
function onMouseoverSubmit(e){
    e.preventDefault();
    if (userName.value === '' || email.value === ''){
        msg.textContent = 'Please enter value'
        setTimeout(()=>msg.remove(),3000)
    }
    else{
        console.log(`${userName.value} : ${email.value}`)
    }
}
function onMouseoutSubmit(e){
    e.preventDefault();
    if (userName.value === '' || email.value === ''){
        msg.textContent = 'Please enter value'
        setTimeout(()=>msg.remove(),3000)
    }
    else{
        console.log(`${userName.value} : ${email.value}`)
    }
}