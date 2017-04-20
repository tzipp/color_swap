"use strict";

var allowedClasses = ["white", "yellow", "blue", "green", "red", "black"];

$(document).ready(function() {
    var target = $("#target");

    $('#yellow').click(function(event) {
        handleColor(target, "yellow");
    });

    $('#blue').click(function() {
        handleColor(target, "blue");
    });

    $('#green').click(function() {
        handleColor(target, "green");
    });

    $('#red').click(function() {
        handleColor(target, "red");
    });

    $('#black').click(function() {
        handleColor(target, "black");
    });

    $('body').click(function() {
        reset(target);
    })

});

function handleColor(element, color) {
    event.stopPropagation();

    if (element.hasClass(color)) {
        reset(element);
    } else {
        removeColors(element, color);
    }
}

function reset(element) {
    removeColors(element, "white");
}

function removeColors(element, newColor) {
    allowedClasses.forEach(function (color) {
        if (element.hasClass(color))
            element.removeClass(color);
    });
    element.addClass(newColor);
}