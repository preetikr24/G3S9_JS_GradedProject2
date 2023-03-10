// var a = new Array();
// up1 = new Object();
// up2 = new Object();

// up1 = {
//     name: 'Anurag',
//     password: btoa('abc@12')
// };
// up2 = {
//     name: 'secguard',
//     password: btoa('sec001')
// };

// a.push(up1);
// a.push(up2);
// localStorage.setItem('all_users', JSON.stringify(a));

let name = "Anurag";
let pw = "anu@12";

localStorage.setItem('name', "Anurag");
localStorage.setItem('pw', "anu@12");

function check(){
    var cont = document.getElementById('cont');
    var resumepage = document.querySelector('.resumePage');
    const box = document.querySelector('.box');
    const log = document.querySelector('.login');
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');
    var butt = document.getElementById('bttn');
    

    var userName = document.getElementById('username');
    var userPw = document.getElementById('password');

   
    
    if(userName.value == storedName && userPw.value == storedPw){
        window.location.href = "resumePage.html";

        alert('Logged in');

        // cont.classList.add('container-toggle');
        // box.classList.add('box-toggle');
        // log.classList.add('login-toggle');
        
    }else{
        alert('Error on login');
    }
}

