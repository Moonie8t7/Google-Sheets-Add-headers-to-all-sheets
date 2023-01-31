# Google-Sheets-Add-headers-to-all-sheets
Adds headers to all sheets in the Spreadsheet, excluding those in the excludedSheets array.

Instructions

Open Google Sheets, and load your file.

Go to the menu and click "Extensions" then "Apps Script".

Delete any existing code in the editor and paste the code provided above.

Look for the line const excludedSheets = [], and change the array to include the names of any sheets you don't want to add headers to. Example: const excludedSheets = ["Sheet1", "Sheet2"];

Save the script by "Save project" (the floppy disk icon) or pressing Ctrl+S, and give it a name.

Click on the "▶︎ Run" button to run the "addHeaders" function.

The script will add headers to all active spreadsheet sheets except those specified in the excludedSheets array.
