// Created UI Class
class UI{
    static pushScreen(profile){
        var html = `
        <div class="row">
        <div class="col-md-3 col-sm-12 ">
            <div class="card">
                <div class="card-img-top">
                    <img src="img/user.png" class="img-fluid" alt="">
                </div>
                <div class="card-body">
                    <h3 class="fs-4 mb-3">${profile.name}</h3>
                    <h6 class="text-muted mb-3"><i class="fas fa-user text-dark me-2"></i> ${profile.username}</h6>
                    <h6 class="text-muted mb-3 "><i class="fas fa-phone-alt text-dark me-2"></i> ${profile.phone}</h6>
                    <h6 class="text-muted mb-3"><i class="fas fa-globe text-dark me-2"></i> ${profile.website}</h6>
                    <h6 class="text-muted mb-3"><i class="fas fa-envelope text-dark me-2"></i> ${profile.email}</h6>
                </div>
            </div>
        </div>
        <div class="col-md-9 col-sm-12">
            <h4 class="ms-1">Adress</h4>
            <ul class="list-group">
                <li class="list-group-item">City: ${profile.address.city}</li>
                <li class="list-group-item">Street: ${profile.address.street}</li>
                <li class="list-group-item">Suite: ${profile.address.suite}</li>
                <li class="list-group-item">Zip Code: ${profile.address.zipcode}</li>
                <li class="list-group-item">Location: ${profile.address.geo.lat} ${profile.address.geo.lng}</li>
            </ul>
            <h4 class="mt-2 ms-1">Company</h4>
            <ul class="list-group">
                <li class="list-group-item">Name: ${profile.company.name}</li>
                <li class="list-group-item">Phrase: ${profile.company.catchPharase}</li>
                <li class="list-group-item">Bs: ${profile.company.bs}</li>
            </ul>
            <h4 class="mt-2 ms-1">To Do</h4>
            <ul class="list-group" id="todolist">

            </ul>

        </div>
    </div>

        `;
        $("#profilecontainer").html(html);
    }
    static pushtodo(todo){
        todo.forEach(item => {
            if(item.completed === true){
                var html = `
                <li class="list-group-item bg-success">${item.title}</li>
                `;
                $("#todolist").append(html);
            }
            else{
                var html = `
                <li class="list-group-item bg-danger">${item.title}</li>
                `;
                $("#todolist").append(html);
            }

        });
    }
    static status(isFind){
        if(isFind){
            $("#status").attr("class","d-none");
        }
        else{
            $("#status").addClass("d-inline-block bg-danger text-dark");
            $("#status").removeClass("d-none");
            var html = "No matching!";
            $("#status").html(html);
        }
    }
}