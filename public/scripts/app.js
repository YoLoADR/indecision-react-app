"use strict";

var profil = {
    name: 'Yohann',
    age: 30,
    sports: ["football", "boxe", "muscu"]
};
var subtitle = "I'm subtitle and I'am Jalousi";
var otherCondition = true;
var template = React.createElement(
    "div",
    null,
    subtitle && otherCondition && React.createElement(
        "p",
        null,
        subtitle
    ),
    profil.age > 18 && otherCondition ? React.createElement(
        "p",
        null,
        " Tu es majeur"
    ) : React.createElement(
        "p",
        null,
        " Tu es mineur"
    ),
    React.createElement(
        "ol",
        null,
        profil.sports.map(function (sport) {
            return React.createElement(
                "li",
                null,
                sport
            );
        })
    )
);

//var template = React.createElement("p", {id :"someId"}, "First Step for the futur React developer that you are ");
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
