$(document).ready(function() {
    $('.carousel').carousel();
    $('ul.tabs').tabs();
    $('.modal-trigger').leanModal();
    $('.dropdown-button').dropdown({
      belowOrigin: true,
      hover: true
    });
    $('.collapsible').collapsible();
    $('.button-collapse').sideNav();
});