function onOpen(){
  SpreadsheetApp.getUi()
    .createMenu('?? Scraper����')
    .addItem('?? ���s����','runScraper')
    .addToUi();
}
function runScraper(){
  SpreadsheetApp.getUi().alert('�܂��X�N���v�g���������ł�');
}
