let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// Toast
let toastBox = document.getElementById('toastBox');

let NoAccountMsg = '<i class="fa-solid fa-circle-check"></i> No Account Created!';
let SoonMsg = '<i class="fa-solid fa-comments"></i> Feature Comming Soon!';

function showToast(msg) {
   let toast = document.createElement('div');
   toast.classList.add('toast');
   toast.innerHTML = msg;
   toastBox.appendChild(toast);

   if(msg.includes('soon')) {
    toast.classList.add('soon');
   }


   setTimeout(() => {
    toast.remove();
   },4000);


}