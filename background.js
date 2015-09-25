/**
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create(
    'index1.html',
    {
      id: 'mainWindow1',
      bounds: {width: 800, height: 600}
    }
  );
  chrome.app.window.create(
    'index2.html',
    {
      id: 'mainWindow2',
      bounds: {width: 800, height: 600}
    }
  );  
});
