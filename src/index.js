$(document).ready(function(){
  $('#submitComment').on('click', function(event){
    event.preventDefault()
    console.log("Yo, you clicked me!")
    var comment = $("#userComment").val()
    $('#comment-list').append('<li>' + comment + '</li>')
  })

})
