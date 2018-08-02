import express from "express";
import Facebook from "fb";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/authFacebook", (req, res) => {
  const access_token = req.body.access_token;

  Facebook.api(
    "/me",
    { fields: ["id", "name", "email"], access_token },
    result => {
      if (result && result.error) {
        /*if(result.error.code === 'ETIMEDOUT') {
            console.log('request timeout');
        }
        else {
            console.log('error', result.error);
        }*/
        return res
          .status(200)
          .send({ auth: false, error: result.error.message });
      } else {
        var token = jwt.sign({ id: result.id }, "Secret_Keys", {
          expiresIn: 86400 // expires in 24 hours
        });

        jwt.verify(token, "Secret_Keys", (err, decoded) => {
          if (err)
            return res
              .status(500)
              .send({ auth: false, message: "Failed to authenticate token." });

          console.log(decoded);
        });
        //console.log(token);
        return res.status(200).send({ auth: true, token: token });
      }
      res.status(200).send(result);
    }
  );
});

export default router;
