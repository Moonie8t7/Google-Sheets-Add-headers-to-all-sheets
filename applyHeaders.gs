/**
 * @author u/IAmMoonie <https://www.reddit.com/user/IAmMoonie/>
 * @file https://www.reddit.com/r/googlesheets/comments/10men9l/how_to_automate_first_row_column_headers_on/
 * @desc Adds headers to all sheets in the Spreadsheet, excluding those in the excludedSheets array.
 * @license MIT
 * @version 1.1
 */

/**
 * An array of sheet names that will not have headers added to them.
 * Example: excludedSheets = ["someSheet", "anotherSheet"];
 * Note: This can be left blank if wanted: excludedSheets = [];
 */
const excludedSheets = [];

/**
 * It takes a sheet and an array of headers, and returns true if the headers in the sheet match the
 * headers in the array
 * @param sheet - The sheet you want to check
 * @param headers - an array of arrays, where each array is a row of headers.
 * @returns A function that takes two arguments, sheet and headers.
 */
const headersMatch_ = (sheet, headers) => {
  const currentHeaders = sheet.getRange("A1:F1").getValues()[0];
  const currentHeadersString = currentHeaders.join(',');
  const headersString = headers[0].join(',');
  return currentHeadersString === headersString;
};


/**
 * It adds headers to all sheets in the active spreadsheet except those in the excludedSheets array
 * It will also skip over sheets that already have the correct headers in place.
 */
const addHeaders = () => {
  try {
    const spreadsheet = SpreadsheetApp.getActive();
    const headers = [["Name", "Paste Below this Column", "", "", "", "Notes"]];
    const sheetsToProcess = spreadsheet
      .getSheets()
      .filter(
        (sheet) =>
          !excludedSheets.includes(sheet.getName()) &&
          !headersMatch_(sheet, headers)
      );
    if (sheetsToProcess.length > 0) {
      sheetsToProcess.forEach((sheet) =>
        sheet.getRange("A1:F1").setValues(headers)
      );
      SpreadsheetApp.flush();
      console.info(
        `Headers added successfully to ${sheetsToProcess.length} sheet(s)`
      );
    } else {
      console.info(`No sheets were updated.`);
    }
    if (excludedSheets.length > 0) {
      console.info(`Excluded sheets: ${excludedSheets.join(",")}`);
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
