const bcrypt = require('bcrypt');
const UserRepository = require('../repository/UserRepository');

const BadRequest = require('../exceptions/BadRequest');
const NotFound = require('../exceptions/NotFound');

const resolveCreateUser = async (user) => {
  const userExist = await UserRepository.userExist({
    login: user.login,
    email: user.email,

  });

  if (userExist) throw new BadRequest('Email or login already used');

  const newUser = user;
  newUser.roleId = 1;
  newUser.statusId = 1;
  newUser.password = bcrypt.hashSync(user.password, 10);

  try {
    return await UserRepository.createUser(newUser);
  } catch (err) {
    console.log(err.stack);
    throw new BadRequest(err);
  }
};

const login = async (user) => {
  const loggedUser = await UserRepository.getUserByLogin(user.login);

  let isEqual = false;

  console.log(loggedUser.role.type);
  if (loggedUser) {
    isEqual = bcrypt.compareSync(user.password, loggedUser.password);
  }

  if (!isEqual) {
    throw new BadRequest('User/Password invalid');
  }

  return loggedUser;
};

module.exports = {
  resolveCreateUser,
  login,
};