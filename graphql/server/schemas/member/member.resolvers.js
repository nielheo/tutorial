const memberFacebookController = require("../../controllers").memberFacebooks;

const memberResolvers = {
  async memberFacebook(member, _, context) {
    console.log(context);
    return await memberFacebookController.retrieve({ memberId: member.id });
  }
};

export default memberResolvers;
