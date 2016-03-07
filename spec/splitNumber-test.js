describe("splitNumber()", function() {
  describe("should return splited number array", function() {

    it("when input a 3bits number ", function() {
      var input = "910";
      var correctResult = ['9', '1', '0'];
      var result = splitNumber(input);

      expect(result).toEqual(correctResult);
    });
  });
});
