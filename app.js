"use strict";

var allowedClasses = ["white", "yellow", "blue", "green", "red", "black"];

$(document).ready(function() {
    var target = $("#target");

    $('#yellow').click(function() {
        if (target.hasClass("yellow")) {
            reset(target);
        } else {
            removeColors(target, "yellow");
        }
    });

    $('#blue').click(function() {
        if (target.hasClass("blue")) {
            reset(target);
        } else {
            removeColors(target, "blue");
        }
    });

    $('#green').click(function() {
        if (target.hasClass("green")) {
            reset(target);
        } else {
            removeColors(target, "green");
        }
    });

    $('#red').click(function() {
        if (target.hasClass("red")) {
            reset(target);
        } else {
            removeColors(target, "red");
        }
    });

    $('#black').click(function() {
        if (target.hasClass("black")) {
            reset(target);
        } else {
            removeColors(target, "black");
        }
    });

});

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