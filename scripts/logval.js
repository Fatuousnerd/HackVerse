var username = document.getElementById("username"),
password = document.getElementById("password"),
submitt = document.getElementById("submitt"),
ss = document.getElementById("ss"),
ps = document.getElementById("ps");

username.addEventListener('keyup', () => {
    //console.log(username.value);
    if(!username.value){
        ss.innerText = 'Field cannot be blank!!'
        submitt.style.cursor = 'not-allowed'
    }
})

password.addEventListener('keyup', () => {
    //console.log(password.value);
    if(!password.value){
        ps.innerText = 'Field cannot be blank!!'
        submitt.style.cursor = 'not-allowed'
    }
})

submitt.addEventListener('click', (e) => {
    //console.log(username.value);

    //Username
    if(!username.value){
        ss.innerText = 'Field cannot be blank!!'
        e.preventDefault()
        e.style.cursor = 'not-allowed'
    }

    //Password
    if(!password.value){
        ps.innerText = 'Field cannot be blank!!'
        e.preventDefault()
        e.style.cursor = 'not-allowed'
    }
})
