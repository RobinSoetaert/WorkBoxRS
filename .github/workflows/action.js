export default function lockAction(x, LockIcon, UnLockIcon, element){
    if(x.src == UnLockIcon){
        x.src = LockIcon
        console.log(LockIcon, "On")
        element.innerHTML = "On"
    }
    else if(x.src == LockIcon){
        x.src = UnLockIcon
        console.log(UnLockIcon, "Off")
        element.innerHTML = "Off"
    }
}

export function loadCss(){
    document.querySelector('head').innerHTML += `
                                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                                                <script defer src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                                                `
}