window.onload = function() 
{
  var requestFileSystem = window.webkitRequestFileSystem || window.requestFileSystem;
  requestFileSystem(PERSISTENT, 0, haveFileSystem, errorHandler);
  
  $('#name-id').html('Hello, Leon!');
  $('#save-me').click(function()
  {
    $('#save-me').toggleClass("click-colour");
  });
};

function errorHandler(e)
{
  var msg;
  if(e.target && e.target.error)
    e = e.target.error;
  if(e.message)
    msg = e.message;
  else if (e.name)
    msg = e.name;
  else if (e.code)
    msg = "Code: " + e.code;
  else
    msg = e.toString();
    
  showMessage("Error: " + msg);
}

function showMessage(msg)
{
  console.log(msg);
}
