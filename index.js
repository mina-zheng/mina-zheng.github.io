element = document.querySelector('.menu.item2');
element.addEventListener("click", switchScreen);

function switchScreen() {
    const element = document.querySelector('.container.c2');
    const hiddentext = document.querySelector('.maintext');

    if (hiddentext.style.display == 'none') {
        hiddentext.style.display = 'block';
    }
    else {
        hiddentext.style.display = 'none';
    }
}