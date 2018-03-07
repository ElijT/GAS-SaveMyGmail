var prop = PropertiesService.getScriptProperties();

function tdoGet() {
  return HtmlService.createTemplateFromFile('SmG-UI').evaluate()
      .setTitle('Save My Gmail v2beta')
      .setWidth(320)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function getStuff(foo){
  //Logger.log(foo);
  
  prop.setProperty('Retest', foo);
  //Logger.log(prop.getProperties());
}

function ParseScript(e) {
  var parsed = prop.getProperty(e);
  //Logger.log(parsed);
  return parsed;
  
}

function SaveScript(f,g) {
  prop.setProperty(f, g);
  var parsed = prop.getProperty(f);
  //Logger.log(parsed);
  var Success = 'Saved';
  return Success;
  
}

function configure() {
  
  reset(true);
  
  ScriptApp.newTrigger("savePDF").timeBased().everyMinutes(5).create();
  ScriptApp.newTrigger("savePDFnoatt").timeBased().everyMinutes(5).create();
  
//  Browser.msgBox("Initialized", "The program is now running. You can close this sheet", Browser.Buttons.OK);
  var ret = 'Initialized, The program is now running. You can close this webpage';
  return ret;
}    
    
function reset(e) {
  
  var triggers = ScriptApp.getProjectTriggers();
  
  for (var i = 0; i < triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);    
  }
  
  if (!e) {
//    Browser.msgBox("Script Stopped", "You can start the script anytime later!", Browser.Buttons.OK);
    return "Script Stopped, You can start the script anytime later!";
  }
  
}

function trigstat() {
  
  var triggers = ScriptApp.getProjectTriggers();
  
  for (var i = 0; i < triggers.length; i++) {
    Logger.log(triggers[i]);    
  }
  var ret = 'You have ' + triggers.length + ' trigger(s) defined';
  return ret;
  
}

function countmsg() {
  var labelA = GmailApp.getUserLabelByName(data.getProperty('label_attach'));
  var labelN = GmailApp.getUserLabelByName(data.getProperty('label_Noattach'));
  
//  var count = labelA.getThreads().length + labelN.getThreads().length;
  var number = [labelA.getThreads().length, labelN.getThreads().length];
  Logger.log(number);
  return number;
//  var threads = GmailApp.search("in:" + data.getProperty('label_attach'), 0, 51) + GmailApp.search("in:" + data.getProperty('label_Noattach'), 0, 51); 
//  if (count > 50){
//    return "You have over 50 message to be treated. You will have to run again the application";  
//  }
//  return "";
}

function RunNow() {
  var ret = 'Successful running';
  savePDFnoatt();
  savePDF();
    
//  var voice = HtmlService.createHtmlOutputFromFile('index')
//  .setTitle("Google Scripts Results")
//  .setWidth(200)
//  .setHeight(60);
//  var ss = SpreadsheetApp.getActive();
//  ss.show(voice);
  
  return ret;
}

