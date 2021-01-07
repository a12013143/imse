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

            data.createdAt = d.toISOString();
            data.updatedAt = d.toISOString();
            
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

            data.updatedAt = d.toISOString();
            
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
            data.createdAt = d.toISOString();
            data.updatedAt = d.toISOString();
            
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
        
        
        //-------------CRUD ARTICLE---------------------------------------------//
        //Add article
        $('#add-article-form').on('submit', function(e) {
            console.log("TEST");
            e.preventDefault();
            
            var data = objectifyForm($(this));
            console.log(data);

            data.createdAt = d.toISOString();
            data.updatedAt = d.toISOString();
            
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

            data.updatedAt = d.toISOString();
            
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

    });
// });