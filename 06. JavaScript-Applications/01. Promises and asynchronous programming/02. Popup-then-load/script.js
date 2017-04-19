(function(){
    var btn = document.getElementById("btn");
    var popup = document.getElementById("myPopup");

    function redirectToPage(){
        window.location = "http://telerikacademy.com/"; 
        popup.style.visibility = "visible";
    }

    let promise = new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve();
        }, 2000);
    });

    function buttonClick() {
        promise
        .then(redirectToPage)
        .catch(error);
    }

    window.onload = btn.addEventListener("click", buttonClick, false);
})();