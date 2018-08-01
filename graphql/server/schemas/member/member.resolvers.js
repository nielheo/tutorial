const memberFacebookController = require("../../controllers").memberFacebooks;

const memberResolvers = {
  async memberFacebook(member) {
    return await memberFacebookController.retrieve({ memberId: member.id });
  }
};

export default memberResolvers;
