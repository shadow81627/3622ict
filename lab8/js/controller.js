$("#search").submit(function(event){
        event.preventDefault();
        getSearch();
        /*$.getJSON("data/photoData.json", function(data) {
            search(data.data);
        });*/
    });

    $("#login-btn").click(function(){
        loginAlert();
    });