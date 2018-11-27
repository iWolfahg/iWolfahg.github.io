var card = document.querySelectorAll('.card-site');
hovered();
function hovered(){
    card[0].addEventListener('mouseover', function () {
        card[1].style.opacity = ".5";
        card[2].style.opacity = ".5";
    });
    card[1].addEventListener('mouseover', function () {
        card[0].style.opacity = ".5";
        card[2].style.opacity = ".5";
    });
    card[2].addEventListener('mouseover', function () {
        card[1].style.opacity = ".5";
        card[0].style.opacity = ".5";
    });
    card[0].addEventListener('mouseout', function () {
        card[1].style.opacity = "1";
        card[2].style.opacity = "1";
    });
    card[1].addEventListener('mouseout', function () {
        card[0].style.opacity = "1";
        card[2].style.opacity = "1";
    });
    card[2].addEventListener('mouseout', function () {
        card[1].style.opacity = "1";
        card[0].style.opacity = "1";
    });
    
}