function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var phone  = document.getElementById("tel").value;
    // var message = document.getElementById("msg").value;

    if(name != name.match(/[a-z]{2,}/)){
        alert("invalid name");
    }
    else if(email != email.match(/[a-z0-9]+@[a-z]+?\.{2,3}/)){
        alert("invalid email");
    }
    else if(tel != tel.match(/[0-9]{9}/)){
        alert("invalid number");
    }
    else if(subject != subject.match){
        alert("invalid subject")
    }
    // else if(message != message.match){
    //     alert("invalid message")}
    
    else {
        alert("THANK YOU FOR VISITING")
    }
}