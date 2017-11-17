var name = "Yohannn";
//var template = <p>First Step for the futur React developer that you are </p>;
var template = React.createElement("p", {id :"someId"}, "First Step for the futur React developer that you are ");
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);