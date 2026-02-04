let main = document.getElementById("eventlogdata")
let btn = document.getElementById("clear-log")

document.querySelector("#grandparent").addEventListener("click", function() {
    console.log("Grandparent clicked");
    let paper = document.createElement("p");
    paper.textContent = "grandparent -  bubbled";
    main.appendChild(paper);

});

document.querySelector("#grandparent").addEventListener("click", function() {
    console.log("Grandparent clicked");
    let paper = document.createElement("p");
    paper.textContent = "grandparent - captured";
    main.appendChild(paper);

},true);

document.querySelector("#parent").addEventListener("click", function() {
    console.log("Parent clicked");
    let paper = document.createElement("p");
    paper.textContent = "parent - bubbled";
    main.appendChild(paper);
});

document.querySelector("#parent").addEventListener("click", function() {
    console.log("Parent clicked");
    let paper = document.createElement("p");
    paper.textContent = "parent - captured";
    main.appendChild(paper);
},true);

document.querySelector("#child").addEventListener("click", function() {
    console.log("Child clicked");
    let paper = document.createElement("p");
    paper.textContent = "child - bubbled";
    main.appendChild(paper);
});

document.querySelector("#child").addEventListener("click", function() {
    console.log("Child clicked");
    let paper = document.createElement("p");
    paper.textContent = "child - captured";
    main.appendChild(paper);
},true);

btn.addEventListener("click", function() {
   main.textContent = " ";
});

//(event)=>{event.stopPropagation();} stops the parents event propagation from happening
//(event)=>{event.ImmediatePropagation();} stops the current event from propagating or stops the siblings of same id also from receiving the event