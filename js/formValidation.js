function formValidate() { 
    var name = document.forms["RegForm"]["name"]; 
    var email = document.forms["RegForm"]["email"]; 
   

    if (name.value == "") { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
      if (email.value == "") { 
        window.alert( 
          "Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

   

    return true; 
}