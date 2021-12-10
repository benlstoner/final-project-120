var pages=["Grades", "Add Grades"];
var list=[];

function createNav(){
    document.body.innerHTML="";
    var nav=document.createElement("nav");

    createButton(pages[0]);
    createButton(pages[1]);

    document.body.appendChild(nav);

    function createButton(pg){
        var button=document.createElement("button")

        button.innerHTML=pg;
        button.addEventListener("click", function(){
            navigate(pg);
        })
        nav.appendChild(button);
    }
}

function createWrapper(){
    var wrapper=document.createElement("wrapper");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}

function navigate(pg){
    if(pg==="Grades"){
        view()
    }else if(pg==="Add Grades"){
        add()
    }else if(pg==="login"){
        login()
    }
}

function login(){
    var username=document.createElement("input");
    username.classList.add("username");
    username.placeholder="Username";

    var password=document.createElement("input");
    password.classList.add("password");
    password.placeholder=("Password");
    password.type="password";

    var submit=document.createElement("button");
    submit.classList.add("submit");
    submit.innerHTML="Submit";

    var answer=document.createElement("div");
    submit.addEventListener("click", function(){
        var user=document.body.querySelector(".username").value;
        var pass=document.body.querySelector(".password").value;

        if(user!=="cool"&&pass!=="password"){
            answer.innerHTML="Incorrect username and password.";
        }else if(user!=="cool"){
            answer.innerHTML="Username incorrect";
        }else if(pass!=="password"){
            answer.innerHTML="Password incorrect";
        }else{
            createNav()
            createWrapper()
            navigate("Grades")
        }
    })
    document.body.appendChild(username);
    document.body.appendChild(password);
    document.body.appendChild(submit);
    document.body.appendChild(answer);
}

function view(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";

    var header=document.createElement("h1");
    header.innerHTML="View Grades";

    var noteList=document.createElement("div");
    noteList.classList.add("noteList");
    renderList();

    function renderList(){
        noteList.innerHTML="";
        for (var i=0; i<list.length; i++){
            var notes=document.createElement("div");
            notes.innerHTML=list[i];
            noteList.appendChild(notes);
        }
    }
    wrapper.appendChild(header);
    wrapper.appendChild(noteList);
}

function add(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";

    var header=document.createElement("h1");
    header.innerHTML="Add Grades";

    var singles=document.createElement("input");
    singles.classList.add("oneNote");
    singles.placeholder="Student";

    var level=document.createElement("input");
    level.classList.add("levels");
    level.placeholder="Grade (0-100)";

    var note=document.createElement("button");
    note.classList.add("note");
    note.innerHTML="Submit Grades";

    var responses=document.createElement("div");
    responses.classList.add("response");
    note.addEventListener("click", function(){
        var note=document.body.querySelector(".oneNote").value;
        var level=document.body.querySelector(".levels").value;

        if(isNaN(parseInt(level))){
            responses.innerHTML="Input a number.";
        }else{
            parseInt(level)
            if(level<=100&&level>=0){
                list.push(`Student Name: ${note} Grade: ${level}%`);
                navigate("Grades");
            }else{
                responses.innerHTML="Grades between 0-100% only!"
            }
        }
    })
    wrapper.appendChild(header);
    wrapper.appendChild(singles);
    wrapper.appendChild(level);
    wrapper.appendChild(note);
    wrapper.appendChild(responses);
}
navigate("login")

