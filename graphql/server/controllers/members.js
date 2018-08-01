const Member = require("../models/").member;

module.exports = {
  retrieve(req, res) {
    let query = {};
    if (req.email) query.email = req.email;
    if (req.id) query.id = req.id;

    return Member.findOne({ where: query })
      .then(member => member)
      .catch(error => error);
  }
};
