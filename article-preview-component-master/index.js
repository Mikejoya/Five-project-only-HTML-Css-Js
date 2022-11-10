const btn = document.querySelector('#buttom');
const containerOne = document.querySelector('#section-one');
const containerTwo = document.querySelector('#section-two');


btn.addEventListener('click', userShare);

function userShare(e){
        e.preventDefault();
        if(e){
            containerTwo.classList.toggle('inactive');
        }
    }