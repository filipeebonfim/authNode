const { Op } = require('sequelize');
const User = require('../models/User');
const { Role } = require('../models/Role');

const createUser = async (user) => {
  try {
    const createdUser = await User.create({ ...user, roleId: 1 });

    if (!createdUser) {
      throw new Error('Failed to created an User');
    }

    const userId = createdUser.id;
    return await User.findOne({
      where: { id: userId },
      include: Role,
    });
  } catch (e) {
    throw new Error(e);
  }
};

const userExist = async (primaryKeys) => {
  const primaryList = [];

  Object.entries(primaryKeys).map((obj) => primaryList.push({ [obj[0]]: obj[1] }));

  try {
    const user = await User.findOne({
      where: {
        [Op.or]: primaryKeys,
      },
    });

    return user;
  } catch (e) {
    throw new Error(e);
  }
};

const getUserByLogin = async (login) => {
  try {
    const user = await User.findOne({
      where: {
        login,
      },
      include: Role,
    });

    return user;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  userExist,
  getUserByLogin,
  createUser,
};
