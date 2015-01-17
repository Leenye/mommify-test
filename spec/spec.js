describe('mommify', function () {
    it('should not mommify if the vowels are less than 30%', function () {
        var expected = "hmm";
        var result = mommify("himm");

        expect(result).toEqual(expected);
    });

});
