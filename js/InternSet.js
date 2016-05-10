(function(module) {
  function InternSet() {
    this.members = [];
    if (arguments.length > 0) {
      for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i];
        this.members = this.members.concat(argument);
      }
    }
  }

  InternSet.prototype.getMembers = function () {
    return this.members;
  };

  InternSet.prototype.insert = function () {
    var membersArray = arguments;
    for (var i = 0; i < membersArray.length; i++) {
      var member = membersArray[i];
      if (!this.find(member)) {
        this.members.push(member);
      }
    }
  };

  InternSet.prototype.find = function (value, callback) {
    var members = this.getMembers();
    for (var i = 0; i < members.length; i++) {
      var member = members[i];
      var isEql = (member === value) || (member.toString() === value.toString());
      if (isEql) {
        if (callback && typeof(callback) === "function") {
          callback(members, member);
        }
        return member;
      }
    }
    return false;
  };

  InternSet.prototype.remove = function (value) {
    this.find(value, function(members, member) {
      console.log(member)
      var indexToRemove = members.indexOf(member);
      members.splice(indexToRemove, 1);
    })
  };

  InternSet.prototype.toString = function () {
    return this.getMembers().sort().toString();
  };

  module.InternSet = InternSet;
})(window);
