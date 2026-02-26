function navigateEmployerOption()
{

var select =
document.getElementById("employerOptions");

var url = select.value;

if(url != "")
{

window.location.href = url;

}

}
function addJob()
{

var title =
document.getElementById("jobtitle").value;

var company =
document.getElementById("company").value;

var location =
document.getElementById("location").value;




localStorage.setItem("title", title);

localStorage.setItem("company", company);

localStorage.setItem("location", location);

alert("Job Added Successfully");

}





function showJob()
{

var title =
localStorage.getItem("title");

var company =
localStorage.getItem("company");

var location =
localStorage.getItem("location");


if(title != null)
{

var job = document.createElement("div");


var t = document.createElement("h3");
t.innerHTML = title;

var c = document.createElement("p");
c.innerHTML = company;

var l = document.createElement("p");
l.innerHTML = location;


var del =
document.createElement("button");

del.innerHTML = "Delete";


del.onclick = function()
{

job.remove();

localStorage.clear();

};


job.appendChild(t);

job.appendChild(c);

job.appendChild(l);

job.appendChild(del);


document.getElementById("joblist").appendChild(job);

}

}

//for searching job

const domainCompanies = {

    "data science": [
        "Google",
        "Microsoft",
        "Amazon"
    ],

    "web development": [
        "Infosys",
        "TCS",
        "Wipro"
    ],

    "machine learning": [
        "Meta",
        "Apple",
        "Nvidia"
    ]

};


function searchDomain(){

    let input = document.getElementById("searchBox").value.toLowerCase();

    let list = document.getElementById("companyList");

    list.innerHTML = "";

    if(domainCompanies[input]){

        domainCompanies[input].forEach(function(company){

            let li = document.createElement("li");

            li.textContent = company;

            list.appendChild(li);

        });

    }

}