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

    //Fill all white boxes with selected color
    $('#fillWhite').click(function () {
        const whiteBoxes = document.querySelectorAll(".box" && ".white")
        const fillColor = document.querySelector("#colorChoiceAllWhite").value;

        whiteBoxes.forEach(element => {
            element.classList.remove('white');
            element.classList.add(fillColor);
        });

        $(whiteBoxes).css('background-color', fillColor)
    }) 



})

function reset() {
    location.reload();
}

