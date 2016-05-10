describe('InternSet', function() {
  it('will create a set consisting of an empty array', function() {
    var testSet = new InternSet();
    expect(testSet.getMembers()).to.eql([]);
  });

  it('will create a set of given members organized into arrays', function() {
    var testSet = new InternSet([1, 2]);
    expect(testSet.getMembers()).to.eql([1, 2]);
  });

  it('will create a set of given members', function() {
    var testSet = new InternSet(1, 2, [3, 4], 'pickle');
    expect(testSet.getMembers()).to.eql([1, 2, 3, 4, 'pickle']);
  });

  it('will create a set of given members organized into multiple arrays', function() {
    var testSet = new InternSet([1, 2], [3, 4], 'pickle');
    expect(testSet.getMembers()).to.eql([1, 2, 3, 4, 'pickle']);
  });

  describe('.insert', function() {
    it('will insert a new member into an empty set', function() {
      var testSet = new InternSet();
      testSet.insert(4);
      expect(testSet.getMembers()).to.eql([4]);
    });

    it('will insert a new member into a set with members', function() {
      var testSet = new InternSet(1, 2, [3, 4], 'pickle');
      testSet.insert(5);
      expect(testSet.getMembers()).to.eql([1, 2, 3, 4, 'pickle', 5]);
    });

    it('will insert new members into a set with members', function() {
      var testSet = new InternSet(1, 2, [3, 4], 'pickle');
      testSet.insert(4, 6);
      expect(testSet.getMembers()).to.eql([1, 2, 3, 4, 'pickle', 6]);
    });

    it('will not insert new members into a set if they already exist', function() {
      var testSet = new InternSet(1, 2);
      testSet.insert(2, 6);
      expect(testSet.getMembers()).to.eql([1, 2, 6]);
    });
  });

  describe('.find', function() {
    it('will return false if the given value is not a member of the set', function() {
      var testSet = new InternSet();
      expect(testSet.find(4)).to.be.false;
    });

    it('will return a matching member of a given value if it exists', function() {
      var testSet = new InternSet(1, 2, [3, 4], 'pickle');
      expect(testSet.find(2)).to.equal(2);
    });

    it('will return a matching member string of a given value if it exists', function() {
      var testSet = new InternSet(1, 2, [3, 4], 'pickle');
      expect(testSet.find('pickle')).to.equal('pickle');
    });

    it('will return a matching member set of a given value if it exists', function() {
      var testSubSet = new InternSet(1, 2);
      var testSet = new InternSet(1, 2, [3, 4], 'pickle', testSubSet);
      expect(testSet.find(new InternSet(1, 2))).to.equal(testSubSet);
    });

    it('will return a matching member set of a given set if it exists (regardless of order)', function() {
      var testSubSet = new InternSet(1, 2);
      var testSet = new InternSet(1, 2, [3, 4], 'pickle', testSubSet);
      expect(testSet.find(new InternSet(2, 1))).to.equal(testSubSet);
    });
  });


  describe('.remove', function () {
    it ('will remove member if it exists', function() {
      var testSet = new InternSet(1, 2);
      testSet.remove(2);
      expect(testSet.getMembers()).to.eql([1]);
    });

    it ('will remove member if it exists', function() {
      var testSet = new InternSet(1, 2);
      testSet.remove(1);
      expect(testSet.getMembers()).to.eql([2]);
    });
  });
});
