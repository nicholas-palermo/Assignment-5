
//Change box color on click

$('.box').click(function () {
    const color = document.querySelector("#colorChoiceInd").value;
    $(this).css('background-color', color);

})

