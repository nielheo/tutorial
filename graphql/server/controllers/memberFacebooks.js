const MemberFacebook = require("../models/").memberFacebook;

module.exports = {
  retrieve(req, res) {
    let query = {};
    if (req.memberId) query.memberId = req.memberId;

    return MemberFacebook.findOne({ where: query })
      .then(memberFacebook => memberFacebook)
      .catch(error => error);
  }
};
