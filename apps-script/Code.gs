function onOpen(){
  SpreadsheetApp.getUi()
    .createMenu('?? Scraper操作')
    .addItem('?? 実行する','runScraper')
    .addToUi();
}
function runScraper(){
  SpreadsheetApp.getUi().alert('まだスクリプトが未実装です');
}
