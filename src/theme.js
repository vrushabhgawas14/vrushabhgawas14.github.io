let theme = document.getElementById('theme');
const userTheme = localStorage.getItem("savedTheme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

themeCheck();
function themeCheck(){
    if(userTheme === 'dark' || (!userTheme && systemTheme)){
        document.documentElement.classList.add('dark');
        localStorage.setItem("savedTheme","dark");
    }
}

theme.addEventListener('click',()=>{
    if(document.documentElement.classList.value =='dark'){
        document.documentElement.classList.remove('dark');
        localStorage.setItem("savedTheme","light");
    }else{
        document.documentElement.classList.add('dark');
        localStorage.setItem("savedTheme","dark");
    }
});