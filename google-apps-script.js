// Google Apps Script for Jeeyo Contact Form
// This script receives form submissions and adds them to Google Sheets

// Main function to handle POST requests from the website
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Get form values
    var timestamp = new Date();
    var name = data.name || '';
    var phone = data.phone || '';
    var service = data.service || '';
    var message = data.message || '';
    
    // Append row to sheet
    sheet.appendRow([
      timestamp,
      name,
      phone,
      service,
      message
    ]);
    
    // Optional: Send email notification
    sendEmailNotification(name, phone, service, message);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      'status': 'active',
      'message': 'Jeeyo contact form endpoint is working'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Function to send email notification when form is submitted
function sendEmailNotification(name, phone, service, message) {
  try {
    // CONFIGURE: Replace with your email addresses
    var recipients = 'jeeyo.care@gmail.com'; // Add multiple emails separated by commas
    
    var subject = '🔔 New Lead from Jeeyo Website - ' + service;
    
    var body = 
      'New contact form submission from Jeeyo website:\n\n' +
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
      '📋 LEAD DETAILS\n' +
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
      '👤 Name: ' + name + '\n' +
      '📞 Phone: ' + phone + '\n' +
      '🏥 Service Required: ' + service + '\n' +
      '💬 Message: ' + message + '\n\n' +
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
      '⏰ Submitted: ' + new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + '\n' +
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
      '📊 View all leads: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl() + '\n\n' +
      '---\n' +
      'This is an automated notification from Jeeyo Website Contact Form';
    
    // Send email
    MailApp.sendEmail({
      to: recipients,
      subject: subject,
      body: body
    });
    
  } catch (error) {
    // Log error but don't fail the main function
    console.log('Email notification error: ' + error.toString());
  }
}

// Function to set up the spreadsheet headers (run this once manually)
function setupSpreadsheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Clear existing content
  sheet.clear();
  
  // Set headers
  var headers = ['Timestamp', 'Name', 'Phone', 'Service', 'Message'];
  sheet.appendRow(headers);
  
  // Format header row
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#2C5F2D');
  headerRange.setFontColor('#FFFFFF');
  
  // Set column widths
  sheet.setColumnWidth(1, 150); // Timestamp
  sheet.setColumnWidth(2, 150); // Name
  sheet.setColumnWidth(3, 120); // Phone
  sheet.setColumnWidth(4, 180); // Service
  sheet.setColumnWidth(5, 300); // Message
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  Logger.log('Spreadsheet setup complete!');
}

// Function to test email notifications (run manually to test)
function testEmail() {
  sendEmailNotification(
    'Test User',
    '9876543210',
    'Medical & Health',
    'This is a test message from the setup script.'
  );
  Logger.log('Test email sent!');
}
