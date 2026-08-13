// Paste this into the "태오 첫돌 RSVP" Google Sheet's
// Extensions > Apps Script editor, then deploy as a Web App
// (Execute as: Me, Who has access: Anyone) and copy the /exec URL
// into RSVP_SCRIPT_URL in index.html.

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name,
    data.attending ? '참석' : '불참',
    data.attending ? data.adults : '',
    data.attending ? data.kids : ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
