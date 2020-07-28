//sign up
function signUp () {
     
    const singupForm = document.querySelector('#signup-form');

    singupForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {

            //clear form
        singupForm.reset();
        bajar1();
            console.log("sign-up");
        });
    });

};

//sign in
function signIn () {
    const singinForm = document.querySelector('#login-form');

    singinForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        const email = document.querySelector('#login-email').value;
        const password = document.querySelector('#login-password').value;

        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredential => {

                //clear form
            singinForm.reset();
            bajar2();
                console.log("login");
            });
    });
}

signUp();
signIn();