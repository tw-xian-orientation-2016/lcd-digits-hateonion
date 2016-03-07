function lcdPrint(input) {
  var splitedNumber = splitNumber(input);
  var lcdString = numberToLcdString(splitedNumber);
  printLcd(lcdString);
}
