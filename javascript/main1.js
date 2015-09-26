window.onload = function() 
{
  var requestFileSystem = window.webkitRequestFileSystem || window.requestFileSystem;
  requestFileSystem(PERSISTENT, 0, haveFileSystem, errorHandler);
  
  $('#name-id').html('Hello, Leon!');
  $('#save-me').click(function()
  {
    $('#save-me').toggleClass("click-colour");
    
    var req = "GET /data/2.1/find/name?units=imperial&q=Chicago HTTP/1.1\r\n" +
    "Host: api.openweathermap.org\r\n\r\n";
    
    
    chrome.sockets.tcp.create({}, function(createInfo)
    {
      console.log(createInfo.socketId);
      chrome.sockets.tcp.connect(createInfo.socketId, "api.openweathermap.org", 80, function(result)
      {
        if(chrome.runtime.lastError)
          console.log(chrome.runtime.lastError.message);
        else
          console.log(result);
          chrome.sockets.tcp.send(createInfo.socketId, str2ab(req), function(sendInfo) {
            console.log(sendInfo);
          });
      });
    });
    
    
    
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
