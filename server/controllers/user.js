const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");

function signUp(req, res) {
  const user = new User();

  const { name, lastname, email, password, repeatPassword } = req.body;
  user.name = name;
  user.lastname = lastname;
  user.email = email;
  user.role = "admin";
  user.active = false;

  if (!password || !repeatPassword) {
    res.status(404).send({ message: "Las contraseñas son obligatorias" });
  } else {
    if (password !== repeatPassword) {
      res.status(404).send({ message: "Las contraseñas deben de ser iguales" });
    } else {
      //(res.status(200).send({message:'Usuario creado correctamente'})
      bcrypt.hash(password, null, null, function (err, hash) {
        //encriptación del password nuevo user
        if (err) {
          res
            .status(500)
            .send({ messasge: "Error al encriptar la contraseña" });
        } else {
          user.password = hash;

          user.save((err, userStored) => {
            //funcion demongoose para guardar user en mongodb
            if (err) {
              res.status(500).send({ message: err });
            } else {
              if (!userStored) {
                res.status(404).send({ message: "Error al crear el usuario" });
              } else {
                res.status(200).send({ user: userStored });
              }
            }
          });
        }
      });
    }
  }
}

module.exports = {
  signUp,
};
