var profile = new Profile();
$(function(){
    // Created keyup event
    $("#profilefind").keyup(function(e){
        var text = e.target.value;
        if(text !== ""){
            var id = profile.GetProflie(text)
            .then(res => {
                if(res.profile.length === 0){
                    UI.status(false);
                }
                else{
                    UI.status(true);
                    UI.pushScreen(res.profile[0])
                    return res.profile[0].id;
                }
            }).then(id => {
                if(id === undefined){
                }
                else{
                    var gettodo = profile.GetToDo(id);
                    return gettodo;
                }
            }).then(todo => {
                if(todo === undefined){
                }
                else{
                    UI.pushtodo(todo.todo);
                }
            });

        }
       
    });
});