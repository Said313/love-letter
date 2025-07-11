// Google Apps Script to handle data from HTML page and write to Google Sheets

// Replace this with your Google Spreadsheet ID
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
const SHEET_NAME = 'Button Clicks';

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const rowData = data.data;
    
    // Get the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      const newSheet = spreadsheet.insertSheet(SHEET_NAME);
      const headers = [
        'Timestamp',
        'Button Clicked',
        'Browser',
        'Device Type',
        'Platform',
        'Language',
        'Screen Width',
        'Screen Height',
        'Window Width',
        'Window Height',
        'User Agent'
      ];
      newSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
    
    // Append the new row
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data logged successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to test the script
function testScript() {
  const testData = {
    data: [
      new Date().toISOString(),
      'Test Button',
      'Chrome',
      'Desktop',
      'MacOS',
      'en-US',
      '1920',
      '1080',
      '1200',
      '800',
      'Test User Agent'
    ]
  };
  
  doPost({
    postData: {
      contents: JSON.stringify(testData)
    }
  });
} 