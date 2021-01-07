// (function($) {

    $(document).ready(function() {
        "use strict";

        //------------General functions------//
        //serialize data function
        function objectifyForm($form) {
            var formData = $form.serializeArray();
            var returnArray = {};
            for (var i = 0; i < formData.length; i++) {
            returnArray[formData[i]['name']] = formData[i]['value'];
            }
            return returnArray;
        }




        //-------------CRUD PET------------------------------------------------//
        //Add pet
        $('#add-pet-form').on('submit', function(e) {
            console.log("TEST");
            e.preventDefault();
            
            var data = objectifyForm($(this));
            console.log(data);


            var d = new Date();
            var dateArray= d.toLocaleDateString("en-US").split("/");
            var date= ('0' + dateArray[0]).slice(-2) + '/' + ('0' + dateArray[1]).slice(-2) + '/' + dateArray[2];
            data.createdAt = date;
            data.updatedAt = date;
            
            $.ajax({
            url: "/pets/",
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function(data, status) {
                console.log(data);
                $('.alert').removeClass('d-none').addClass('alert-success').text("The new pet was succesfully added").show();
                window.setTimeout(function(){
                   $('.alert').addClass('d-none').removeClass('alert-success');
                },1500);
            
            },
            error: function(error) {
                console.log(error);
                $('.alert').removeClass('d-none').addClass('alert-danger').text("An error ocurred during inserting. Try again.").show();
                window.setTimeout(function(){
                   $('.alert').addClass('d-none').removeClass('alert-danger');
                },1500);
            }
            });
        });
    
        //Edit pet
        $('#edit-pet-form').on('submit', function(e) {
            e.preventDefault();
            var data = objectifyForm($(this));
            var petId = $('#pet-id').val();


            var d = new Date();
            var dateArray= d.toLocaleDateString("en-US").split("/");
            var date= ('0' + dateArray[0]).slice(-2) + '/' + ('0' + dateArray[1]).slice(-2) + '/' + dateArray[2];
            data.updatedAt = date;
            
            $.ajax({
            url: '/pets/'+petId,
            type: "PUT",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function(data, status) {
                console.log(data);
                $('.alert').removeClass('d-none').addClass('alert-success').text("Pet was succesfully edited").show();
                window.setTimeout(function(){
                   $('.alert').addClass('d-none').removeClass('alert-success');
                },1500);
            
            },
            error: function(error) {
                console.log(error);
                $('.alert').removeClass('d-none').addClass('alert-danger').text("An error ocurred during editing. Try again.").show();
                window.setTimeout(function(){
                   $('.alert').addClass('d-none').removeClass('alert-danger');
                },1500);
            }
            });
        });
    
        //Delete pet
        $(document).on('click', '.trash-pet', function(e) {
            e.preventDefault();
            var petId = $('#pet-id').val();
            $.ajax({
            url: '/pets/' + petId,
            type: 'DELETE',
            success: function(data, status) {
                console.log(data);
                $('.alert').removeClass('d-none').addClass('alert-success').text("Article was succesfully deleted").show();
                window.setTimeout(function(){
                   $('.alert').addClass('d-none').removeClass('alert-success');
                },1500);
            
            },
            error: function(error) {
                console.log(error);
                $('.alert').removeClass('d-none').addClass('alert-danger').text("An error ocurred during deleting. Try again.").show();
                window.setTimeout(function(){
                   $('.alert').addClass('d-none').removeClass('alert-danger');
                },1500);
            }
            });
        });




        //-------------CRUD ADOPTION------------------------------------------------//
        //Add article
         $('#add-adoption-form').on('submit', function(e) {
            console.log("TEST");
            e.preventDefault();
            
            var data = objectifyForm($(this));
            console.log(data);


            var d = new Date();
            var dateArray= d.toLocaleDateString("en-US").split("/");
            var date= ('0' + dateArray[0]).slice(-2) + '/' + ('0' + dateArray[1]).slice(-2) + '/' + dateArray[2];
            data.createdAt = date;
            data.updatedAt = date;
            
            $.ajax({
            url: "/adoptions/",
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function(data, status) {
                console.log(data);
                $('.alert').removeClass('d-none').addClass('alert-success').text("Adoption request was successfully sent.").show();
                window.setTimeout(function(){
                   $('.alert').addClass('d-none').removeClass('alert-success');
                },1500);
            },
            error: function(error) {
                console.log(error);
                $('.alert').removeClass('d-none').addClass('alert-danger').text("An error ocurred. Try again.").show();
                window.setTimeout(function(){
                   $('.alert').addClass('d-none').removeClass('alert-danger');
                },1500);
            }
            });
        });

        //update-adoption-status
        $('#update-adoption-status').on('click',function(e){
            
            e.preventDefault()
            var status = $(this).data('#status');
            var adoptionId = $(this).closest('tr').data('adoption_id');
            console.log('adoptionid');
            console.log(adoptionId);
            var data = {id:adoptionId,status:status};

            var d = new Date();
            var dateArray= d.toLocaleDateString("en-US").split("/");
            var date= ('0' + dateArray[0]).slice(-2) + '/' + ('0' + dateArray[1]).slice(-2) + '/' + dateArray[2];
            data.updatedAt = date;
            
            $.ajax({
            url: "/adoptions/"+adoptionId,
            type: "PUT",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function(data, status) {
                console.log(data);
                $('.alert').removeClass('d-none').addClass('alert-success').text("Article was succesfully edited").show();
                window.setTimeout(function(){
                   $('.alert').addClass('d-none').removeClass('alert-success');
                },1500);
            
            },
            error: function(error) {
                console.log(error);
                $('.alert').removeClass('d-none').addClass('alert-danger').text("An error ocurred during editing. Try again.").show();
                window.setTimeout(function(){
                   $('.alert').addClass('d-none').removeClass('alert-danger');
                },1500);
            }
            });

        });
        
        


        //-------------CRUD ARTICLE---------------------------------------------//
        //Add article
        $('#add-article-form').on('submit', function(e) {
            console.log("TEST");
            e.preventDefault();
            
            var data = objectifyForm($(this));
            console.log(data);


            var d = new Date();
            var dateArray= d.toLocaleDateString("en-US").split("/");
            var date= ('0' + dateArray[0]).slice(-2) + '/' + ('0' + dateArray[1]).slice(-2) + '/' + dateArray[2];
            data.createdAt = date;
            data.updatedAt = date;
            
            $.ajax({
            url: "/articles/",
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function(data, status) {
                console.log(data);
                $('.alert').removeClass('d-none').addClass('alert-success').text("The new article was succesfully added").show();
                window.setTimeout(function(){
                   $('.alert').addClass('d-none').removeClass('alert-success');
                },1500);
            
            },
            error: function(error) {
                console.log(error);
                $('.alert').removeClass('d-none').addClass('alert-danger').text("An error ocurred during inserting. Try again.").show();
                window.setTimeout(function(){
                   $('.alert').addClass('d-none').removeClass('alert-danger');
                },1500);
            }
            });
        });
    
        //Edit article
        $('#edit-article-form').on('submit', function(e) {
            e.preventDefault();
            var data = objectifyForm($(this));
            var articleId = $('#article-id').val();


            var d = new Date();
            var dateArray= d.toLocaleDateString("en-US").split("/");
            var date= ('0' + dateArray[0]).slice(-2) + '/' + ('0' + dateArray[1]).slice(-2) + '/' + dateArray[2];
            data.updatedAt = date;
            
            $.ajax({
            url: "/articles/"+articleId,
            type: "PUT",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function(data, status) {
                console.log(data);
                $('.alert').removeClass('d-none').addClass('alert-success').text("Article was succesfully edited").show();
                window.setTimeout(function(){
                   $('.alert').addClass('d-none').removeClass('alert-success');
                },1500);
            
            },
            error: function(error) {
                console.log(error);
                $('.alert').removeClass('d-none').addClass('alert-danger').text("An error ocurred during editing. Try again.").show();
                window.setTimeout(function(){
                   $('.alert').addClass('d-none').removeClass('alert-danger');
                },1500);
            }
            });
        });
    
        //Delete article
        $(document).on('click', '.trash-article', function(e) {
            e.preventDefault();
            var articleId = $('#article-id').val();
            $.ajax({
            url: '/articles/' + articleId ,
            type: 'DELETE',
            success: function(data, status) {
                console.log(data);
                $('.alert').removeClass('d-none').addClass('alert-success').text("Article was succesfully deleted").show();
                window.setTimeout(function(){
                   $('.alert').addClass('d-none').removeClass('alert-success');
                },1500);
            },
            error: function(error) {
                console.log(error);
                $('.alert').removeClass('d-none').addClass('alert-danger').text("An error ocurred during deleting. Try again.").show();
                window.setTimeout(function(){
                   $('.alert').addClass('d-none').removeClass('alert-danger');
                },1500);
            }
            });
        });




        //-------------CRUD Analytics---------------------------------------------//
        //Add analytics
        var analyticsStartTime = new Date();
        
         function addAnalytics () {
            
            var analyticsEndTime = new Date();
            console.log("TEST");

            
            var data = objectifyForm($('#page-data'));
            data.time = analyticsEndTime.getSeconds() - analyticsStartTime.getSeconds();
            data.url = window.location.pathname; 

            var d = new Date();
            var dateArray= d.toLocaleDateString("en-US").split("/");
            data.createdAt = ('0' + dateArray[0]).slice(-2) + '/' + ('0' + dateArray[1]).slice(-2) + '/' + dateArray[2];
           

            console.log(data);

            
            $.ajax({
            url: "/analytics/",
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function(data, status) {
                console.log(data);
            },
            error: function(error) {
                console.log(error);
            }
            });
        };

        //Analytics Charts
        

        $(window).bind('beforeunload', function(){
            addAnalytics();
            //return 'Are you sure you want to leave?'
        });
        

         $('#analytics-table').DataTable();

    });
// });