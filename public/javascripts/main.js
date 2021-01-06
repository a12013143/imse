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



        //-------------CRUD-----------------//
        //Add pet
        $('#add-pet-form').on('submit', function(e) {
            console.log("TEST");
            e.preventDefault();
            
            var data = objectifyForm($(this));
            console.log(data);
            
            $.ajax({
            url: "/pets/",
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function(data, status) {
                console.log(data);
                $('.alert').addClass('alert-success').text("The new pet was succesfully added").show();
                window.setTimeout(function(){
                    $('.alert').hide().removeClass('alert-success');
                },500);
            
            },
            error: function(error) {
                console.log(error);
                $('.alert').addClass('alert-danger').text("An error ocurred during inserting. Try again.").show();
                window.setTimeout(function(){
                    $('.alert').hide().removeClass('alert-danger');
                },500);
            }
            });
        });
    
        //Edit pet
        $('#edit-pet-form').on('submit', function(e) {
            e.preventDefault();
            var data = objectifyForm($(this));
            
            $.ajax({
            url: url,
            type: "PUT",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function(data, status) {
                console.log(data);
                $('.alert').addClass('alert-success').text("The new pet was succesfully edited").show();
                window.setTimeout(function(){
                    $('.alert').hide().removeClass('alert-success');
                },500);
            
            },
            error: function(error) {
                console.log(error);
                $('.alert').addClass('alert-danger').text("An error ocurred during editing. Try again.").show();
                window.setTimeout(function(){
                    $('.alert').hide().removeClass('alert-danger');
                },500);
            }
            });
        });
    
        //Delete pet
        $(document).on('click', '.trash-pet', function(e) {
            e.preventDefault();
            $.ajax({
            url: '/pets/' + petId,
            type: 'DELETE',
            success: function(data, status) {
                console.log(data);
                $('.alert').addClass('alert-success').text("The new pet was succesfully deleted").show();
                window.setTimeout(function(){
                    $('.alert').hide().removeClass('alert-success');
                },500);
            
            },
            error: function(error) {
                console.log(error);
                $('.alert').addClass('alert-danger').text("An error ocurred during deleting. Try again.").show();
                window.setTimeout(function(){
                    $('.alert').hide().removeClass('alert-danger');
                },500);
            }
            });
        });

    });
// });