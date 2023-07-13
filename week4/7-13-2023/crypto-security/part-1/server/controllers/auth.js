const bcrypt = require("bcrypt");

const users = [];

module.exports = {
  login: (req, res) => {
    console.log("Logging In User");
    console.log(req.body);
    const { username, email, firstName, lastName, password } = req.body;
    let userData;

    for (let i = 0; i < users.length; i++) {
      if (email === users[i].email) {
        userData = users[i];
      }
    }

    if (!userData) {
      res.status(200).send({ success: false, message: "bad username" });
    } else {
      bcrypt.compare(password, userData.passwordHash, (err, result) => {
        if (!err) {
          if (result) {
            res
              .status(200)
              .send({
                success: true,
                user: userData.username,
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
              });
          } else {
            res
              .status(200)
              .send({ success: false, message: "bad password or username" });
          }
        } else {
          console.log("Error during bcrypt.compare(): " + err);
          res.status(400).send({ success: false });
        }
      });
    }
  },

  register: (req, res) => {
    const { username, email, firstName, lastName, password } = req.body;
    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, (err, passwordHash) => {
      let newDatabaseEntry = {};
      newDatabaseEntry.username = username;
      newDatabaseEntry.passwordHash = passwordHash;
      newDatabaseEntry.email = email;
      newDatabaseEntry.firstName = firstName;
      newDatabaseEntry.lastName = lastName;
      console.log("\nNew database entry: ");
      console.log(newDatabaseEntry);
      users.push(newDatabaseEntry);
      res.status(200).send({ success: true });
    });
  },
};
