const MemberFacebook = require("../models/").memberFacebook;

module.exports = {
  retrieve(req, res) {
    let query = {};
    if (req.memberId) query.memberId = req.memberId;
    if (req.userId) query.userId = req.userId;

    return MemberFacebook.findOne({ where: query })
      .then(memberFacebook => memberFacebook)
      .catch(error => error);
  },

  retrieveWithMember(req, res) {
    let query = {};
    if (req.userId) query.userId = req.userId;

    return MemberFacebook.findOne({ where: query })
      .then(memberFacebook => memberFacebook)
      .catch(error => error);
  }
};
