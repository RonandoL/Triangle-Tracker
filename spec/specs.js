describe('triangleTracker', function() {

  it("will varify equilateral triangle for all 3 sides equal to 60, 60, 60", function() {
    expect(triangleTracker(60, 60, 60)).to.equal("equilateral");
  });

  it("will verify isosceles triangle for all 3 sides equal to 60, 60, 40", function() {
    expect(triangleTracker(60, 60, 40)).to.equal("isosceles");
  });

  it("will verify scalene triangle for all 3 sides not equaling each other with sides 60, 70, 80", function () {
    expect(triangleTracker(60, 70, 80)).to.equal("scalene");
  });

});
