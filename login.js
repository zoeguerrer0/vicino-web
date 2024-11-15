document.querySelector('.dropdown-button').addEventListener('click', function() {
    document.querySelector('.dropdown').classList.toggle('show');
});

// Cerrar el dropdown si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display == 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
};
//dropdown

const username = document.getElementById('username')
const  password = document.getElementById('password')
const  submit = document.getElementById('submit')


submit.addEventListener('click', (e) =>{
    e.preventDefault()
    const data= {
        username: username.value,
        password: password.value
    }
    console.log(data)
})