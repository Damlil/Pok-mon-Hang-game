var alpha = /[ A-Za-z]/;
var numeric = /[0-9]/; 
var alphanumeric = /[ A-Za-z0-9]/;
const disabled = ['Tab', 'Enter', 'Space', 'ShiftLeft', 'CapsLock', 'ControlLeft', 'ControlRight', 'ShiftRight'];

document.addEventListener("keydown", (e) => {
    let check = e.code;
    for (const key in disabled) {
        if(check === disabled[key]){
            check = -1;
        }
    }

    if(check != -1){
        if(e.code.match(alpha))
        {
            console.log("success! You pressed " + e.key);
        }

    }
    else if(e.code === 'Space'){
        console.log("thats an invisible character!");
    }
    else{
        console.log("PRESSING THAT KEY IS NOT ALLOWED AND YOU MY DEAR MAM SIR OR WHATEVER PRONOUN YOU PREFER PRESSED " + e.key.toUpperCase());
    }

  });