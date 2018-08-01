const memberController = require("../../controllers").members;

const rootQueryResolvers = {
  async member(rootObj, { email }) {
    return await memberController.retrieve({ email });
  }
};

export default rootQueryResolvers;
