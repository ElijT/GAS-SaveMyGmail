function doGet(e) {
  
  
  
  var template = HtmlService.createTemplateFromFile('index');
  
  // Retrieve and process any URL parameters, as necessary.
//  if (e.parameter.folderId) {
//    template.folderId = e.parameter.folderId;
//  } else {
//    template.folderId = 'root';
//  }
//  template.testId = 'Toto';
//  template.foo = 'https://googledrive.com/host/0B_cJ6eLt_6A0WVlNbUVUYjY5Mnc';
//  
 // Build and return HTML in IFRAME sandbox mode.
  return template.evaluate()
  .setTitle('Save My Gmail')
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
