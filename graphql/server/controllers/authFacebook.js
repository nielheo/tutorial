import express from "express";
import Facebook from "fb";
import jwt from "jsonwebtoken";

const memberFacebookController = require(".").memberFacebooks;
const memberController = require(".").members;

const router = express.Router();

async function retrieveMember(id) {
  return memberFacebookController
    .retrieve({ userId: id })
    .then(memberFacebook => {
      return memberController.retrieve({ id: memberFacebook.memberId });
    });
}

router.post("/authFacebook", (req, res) => {
  const access_token = req.body.access_token;

  Facebook.api(
    "/me",
    { fields: ["id", "name", "email"], access_token },
    result => {
      if (result && result.error) {
        return res
          .status(200)
          .send({ auth: false, error: result.error.message });
      } else {
        (async () => {
          var member = await retrieveMember(result.id);
          var token = jwt.sign({ id: member.id, admin: false }, "Secret_Keys", {
            expiresIn: 86400 // expires in 24 hours
          });

          jwt.verify(token, "Secret_Keys", (err, decoded) => {
            if (err)
              return res
                .status(500)
                .send({
                  auth: false,
                  message: "Failed to authenticate token."
                });

            //console.log(decoded);
          });
          //console.log(token);
          return res.status(200).send({ auth: true, token: token });
        })();
      }
      //res.status(200).send(result);
    }
  );
});

export default router;
