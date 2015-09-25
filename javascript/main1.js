window.onload = function() 
{
  $('#name-id').html('Hello, Leon!');
  $('#colour-me').click(function()
  {
    $('#colour-me').toggleClass("click-colour");
  });
};
