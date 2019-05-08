var button = document.querySelectorAll('.meerinfo');
var hidden = document.querySelectorAll('.hidden');


for (var i = 0; i < button.length; i++) {

    button[i].addEventListener('click', function () {
        //console.log(this.parentNode.nextElementSibling);
        this.parentNode.nextElementSibling.classList.toggle('show');
    });
}
