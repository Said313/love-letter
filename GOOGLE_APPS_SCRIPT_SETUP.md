# Google Apps Script Setup Guide

This approach allows your HTML page to send data directly to Google Sheets without any backend server.

## Step 1: Create Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Copy the Spreadsheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Copy the part between `/d/` and `/edit`

## Step 2: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with the content from `google-apps-script.js`
4. Update the `SPREADSHEET_ID` variable with your spreadsheet ID

## Step 3: Deploy the Script

1. Click "Deploy" > "New deployment"
2. Choose "Web app" as the type
3. Set the following options:
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone" (for public access)
4. Click "Deploy"
5. Copy the Web App URL that's generated

## Step 4: Update HTML File

1. Open `index.html`
2. Find this line:
   ```javascript
   const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace it with your Web App URL from Step 3

## Step 5: Test the Setup

1. Open your HTML file in a browser
2. Click either button
3. Check your Google Spreadsheet to see if data appears
4. You should see a new row with the click data

## Step 6: Share the HTML File

- You can host the HTML file on any static hosting service:
  - GitHub Pages
  - Netlify
  - Vercel
  - Or simply open it locally in a browser

## Troubleshooting

### CORS Issues
If you get CORS errors, the script is working but the browser is blocking the response. This is normal and the data is still being logged.

### No Data in Spreadsheet
1. Check that the Spreadsheet ID is correct
2. Ensure the Apps Script has permission to access the spreadsheet
3. Check the Apps Script logs for errors

### Testing the Script
1. In Google Apps Script, run the `testScript()` function
2. This will add a test row to your spreadsheet

## Security Notes

- The Web App URL is public, but only your Google account can modify the script
- The script only writes to your specific spreadsheet
- No sensitive data is exposed

## Data Format

Each button click will create a row with:
- Timestamp (ISO format)
- Button clicked ("Да" or "Нет")
- Browser information
- Device type and platform
- Screen and window dimensions
- User agent string

## Advantages

- No backend server required
- Free hosting for the HTML file
- Real-time data logging
- Automatic Google Sheets integration
- Works from any device with internet access 