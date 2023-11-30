let barSection = document.querySelector('#header .nave-bar div');
let navebar = document.querySelector('#header .nave-bar ul');
let ancolarHeader = document.querySelectorAll('#header ul a');
console.log(ancolarHeader);


barSection.addEventListener('click', () => {
  navebar.classList.toggle('active');
});

for (let i = 0; i < ancolarHeader.length; i++) {
  ancolarHeader[i].addEventListener('click', function () {
    navebar.classList.remove('active');
  })
  
}