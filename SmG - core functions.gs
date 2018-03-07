/*************************************************

Save Gmail as PDFs
-------------------------------------------

tutorial :  http://www.labnol.org/?p=21045

contact  :  amit@labnol.org
twitter  :  @labnol

***************************************************/

var data = PropertiesService.getScriptProperties();

function savePDF() { 
  
  try {
    
    var data = PropertiesService.getScriptProperties();
    var gmailLabels  = data.getProperty('label_attach');
    var driveFolder  = data.getProperty('folder_attach');
    
     
    var threads = GmailApp.getUserLabelByName(gmailLabels).getThreads();
    
    
    if (threads.length > 0) {
      
      var folder = getFolder(driveFolder);
      var label  = getGmailLabel(gmailLabels);
      
      for (var t=0; t<threads.length; t++) {
        
        threads[t].removeLabel(label);
        var msgs = threads[t].getMessages();
        
        var html = "";
        var attachments = [];
        
        var subject = threads[t].getFirstMessageSubject();
        
        for (var m=0; m<msgs.length; m++) {
          
          var msg = msgs[m];
          
          html += "From: " + msg.getFrom() + "<br />";  
          html += "To: " + msg.getTo() + "<br />";
          html += "Date: " + msg.getDate() + "<br />";
          html += "Subject: " + msg.getSubject() + "<br />"; 
          html += "<hr />";
          html += msg.getBody().replace(/<img[^>]*>/g,"");
          html += "<hr />";
          
          var savename = threads[t].getLastMessageDate() + ' - ' + subject
          var atts = msg.getAttachments();
          for (var a=0; a<atts.length; a++) {
            attachments.push(atts[a]);
          }
        }
        
        if (attachments.length > 0) {
          var footer = "<strong>Attachments:</strong><ul>";
          for (var z=0; z<attachments.length; z++) {
            var file = folder.createFile(attachments[z]);
            var name = file.getName();
            file.setName(subject + ' - ' + name);
            footer += "<li><a href='" + file.getUrl() + "'>" + file.getName() + "</a></li>";
          }
          html += footer + "</ul>";
        }
        
        var tempFile = DriveApp.createFile("temp.html", html, "text/html");
        var tempPDF  = folder.createFile(tempFile.getAs("application/pdf")).setName(savename + ".pdf");
        DriveApp.removeFile(tempFile);
        
      }
    }
  } catch (e) {
    Logger.log(e.toString());
  }
}


function savePDFnoatt() { 
  
  try {
    

    var data = PropertiesService.getScriptProperties();
    var gmailLabels  = data.getProperty('label_Noattach');
    var driveFolder  = data.getProperty('folder_Noattach');
    
    var threads = GmailApp.getUserLabelByName(gmailLabels).getThreads();  
    
    if (threads.length > 0) {
      
      var folder = getFolder(driveFolder);
      var label  = getGmailLabel(gmailLabels);
      
      for (var t=0; t<threads.length; t++) {
        
        threads[t].removeLabel(label);
        var msgs = threads[t].getMessages();
        
        var html = "";
        var attachments = [];
        
        var subject = threads[t].getFirstMessageSubject();
        
        for (var m=0; m<msgs.length; m++) {
          
          var msg = msgs[m];
          
          html += "From: " + msg.getFrom() + "<br />";  
          html += "To: " + msg.getTo() + "<br />";
          html += "Date: " + msg.getDate() + "<br />";
          html += "Subject: " + msg.getSubject() + "<br />"; 
          html += "<hr />";
          html += msg.getBody().replace(/<img[^>]*>/g,"");
          html += "<hr />";
          
          var atts = msg.getAttachments();
          /*for (var a=0; a<atts.length; a++) {
            attachments.push(atts[a]);
          }*/
        }
        
        if (attachments.length > 0) {
          var footer = "<strong>Attachments:</strong><ul>";
          for (var z=0; z<attachments.length; z++) {
            var file = folder.createFile(attachments[z]); 
            footer += "<li>" + file.getName() + "</li>";
            
          }
          html += footer + "</ul>";
        }   
        
        var tempFile = DriveApp.createFile("temp.html", html, "text/html");
        var tempPDF  = folder.createFile(tempFile.getAs("application/pdf")).setName(subject + ".pdf");
        DriveApp.removeFile(tempFile);
        
      }
    }
  } catch (e) {
    Logger.log(e.toString());
  }
}


function saveAttachements() { 
  
  try {
    
//    var data = SpreadsheetApp.getActiveSheet().getRange("D4:D5").getValues();
//    
//    var gmailLabels  = data[0][0];  
//    var driveFolder  = data[1][0];
    var data = PropertiesService.getScriptProperties();
    var gmailLabels  = data.getProperty('label_attach');
    var driveFolder  = data.getProperty('folder_attach');
    
    
    var threads = GmailApp.getUserLabelByName(gmailLabels).getThreads();  
    
    if (threads.length > 0) {
      
      var folder = getFolder(driveFolder);
      var label  = getGmailLabel(gmailLabels);
      
      for (var t=0; t<threads.length; t++) {
        
        threads[t].removeLabel(label);
        var msgs = threads[t].getMessages();
        
        var html = "";
        var attachments = [];
        
//        var subject = threads[t].getFirstMessageSubject();
//        
        for (var m=0; m<msgs.length; m++) {
//          
          var msg = msgs[m];
//          
//          html += "From: " + msg.getFrom() + "<br />";  
//          html += "To: " + msg.getTo() + "<br />";
//          html += "Date: " + msg.getDate() + "<br />";
//          html += "Subject: " + msg.getSubject() + "<br />"; 
//          html += "<hr />";
//          html += msg.getBody().replace(/<img[^>]*>/g,"");
//          html += "<hr />";
//          
//          var savename = threads[t].getLastMessageDate() + ' - ' + subject
          var atts = msg.getAttachments();
          for (var a=0; a<atts.length; a++) {
            attachments.push(atts[a]);
          }
        }
        
        if (attachments.length > 0) {
          //var footer = "<strong>Attachments:</strong><ul>";
          for (var z=0; z<attachments.length; z++) {
            var file = folder.createFile(attachments[z]);
            var name = file.getName();
            file.setName(name);
            //footer += "<li><a href='" + file.getUrl() + "'>" + file.getName() + "</a></li>";
          }
         // html += footer + "</ul>";
        }
        
        //var tempFile = DriveApp.createFile("temp.html", html, "text/html");
        //var tempPDF  = folder.createFile(tempFile.getAs("application/pdf")).setName(savename + ".pdf");
        //DriveApp.removeFile(tempFile);
        //DriveApp.removeFile(tempPDF);
        
      }
    }
  } catch (e) {
    Logger.log(e.toString());
  }
  var fin = 'Run done!';
  return fin;
}






function getFolder(parent) {
  
  var parentFolder, searchFolder = DriveApp.getFoldersByName(parent);
  
  if (searchFolder.hasNext()) {
    parentFolder = searchFolder.next();
  } else {
    parentFolder = DriveApp.createFolder(parent);
  }
  
  return parentFolder;
  
}


function getGmailLabel(name) {
  
  var label = GmailApp.getUserLabelByName(name);
  
  if ( ! label ) {
    
    label = GmailApp.createLabel(name);
    
  }
  
  return label;
  
}
