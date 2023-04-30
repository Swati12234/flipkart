if(localStorage.getItem('theme')=='dark'){
    setDarkMode();
    if(document.getElementById('mySwitch').checked){
        localStorage.setItem('checkbox',true)
    }
}
function setDarkMode() {
    let isDark= document.body.classList.toggle('darkmode');
    
    if(isDark){
        setDarkMode.checked=true;
        localStorage.setItem('theme', 'dark')
        document.getElementById('mySwitch').setAttribute('checked','checked');
    }else{
        setDarkMode.checked=true;
        localStorage.removeItem('theme','dark');
    }
}