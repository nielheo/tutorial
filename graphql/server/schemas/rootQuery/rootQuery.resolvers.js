const memberController = require("../../controllers").members;

const rootQueryResolvers = {
  async member(rootObj, { email }, context) {
    // console.log(context);
    return await memberController.retrieve({ email });
  }
};

export default rootQueryResolvers;
