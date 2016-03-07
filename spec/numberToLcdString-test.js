describe("numberToLcdString()", function(){
  describe("it should return a lcd digit String array", function() {
    var mapping = loadMapping();

    it("when input ['9', '1', '0'] ", function() {
      var input = ['9', '1', '0'];
      var correctResult = "._. ... ._.\n|_| ..| |.|\n..| ..| |_|";
      var result = numberToLcdString(input);

      expect(result).toEqual(correctResult);

    });
  });

});
