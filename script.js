$(document).ready(function () {

    //Change box color on click
    $('.box').click(function () {
        const prevColor = this.style.backgroundColor;
        const color = document.querySelector("#colorChoiceInd").value;
        $(this).removeClass('white');
        $(this).removeClass(prevColor);
        $(this).css('background-color', color);
        $(this).addClass(color);
    })


})

function reset() {
    location.reload();
}

