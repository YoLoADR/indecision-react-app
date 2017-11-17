var profil = {
    name : 'Yohann',
    age : 30,
    sports: ["football", "boxe", "muscu"]
};
var subtitle = "I'm subtitle and I'am Jalousi";
var otherCondition = true;
var template = (
    <div>
        { (subtitle && otherCondition) && <p>{subtitle}</p>}
        { (profil.age > 18 && otherCondition) ? <p> Tu es majeur</p> : <p> Tu es mineur</p> }
        <ol>
            {profil.sports.map((sport) => {return <li>{sport}</li>})}
        </ol>
    </div>
);

//var template = React.createElement("p", {id :"someId"}, "First Step for the futur React developer that you are ");
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);