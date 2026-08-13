// Paste this into the "태오 첫돌 RSVP" Google Sheet's
// Extensions > Apps Script editor, then deploy as a Web App
// (Execute as: Me, Who has access: Anyone) and copy the /exec URL
// into RSVP_SCRIPT_URL in index.html.

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  ensureIdColumn(sheet);

  var data = JSON.parse(e.postData.contents);

  if (data.action === 'delete') {
    var rowToDelete = findRowById(sheet, data.id);
    if (rowToDelete > 0) sheet.deleteRow(rowToDelete);
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'deleted' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var row = [
    data.id,
    new Date(),
    data.name,
    data.attending ? '참석' : '불참',
    data.attending ? data.adults : '',
    data.attending ? data.kids : ''
  ];

  var existingRow = findRowById(sheet, data.id);
  if (existingRow > 0) {
    sheet.getRange(existingRow, 1, 1, row.length).setValues([row]);
  } else {
    sheet.appendRow(row);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Migrates the old header (타임스탬프/이름/참석여부/어른/아이) to add an
// ID column at the front, so re-submitted (edited) RSVPs can be matched
// back to their original row instead of always appending a new one.
function ensureIdColumn(sheet) {
  if (sheet.getRange(1, 1).getValue() !== 'ID') {
    sheet.insertColumnBefore(1);
    sheet.getRange(1, 1).setValue('ID');
  }
}

function findRowById(sheet, id) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2 || !id) return -1;
  var ids = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
  for (var i = 0; i < ids.length; i++) {
    if (ids[i][0] === id) return i + 2;
  }
  return -1;
}
