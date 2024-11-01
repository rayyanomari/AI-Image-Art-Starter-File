const User = require("../models/User");
const { CustomError } = require("../middlewares/error");

const getUserController = async(req, res, next)=> {
  const { UserId } = req.params;
    try {
      const user = await User.findById(userId);

      if (!user) {
        throw new CustomError("No user found", 404);
      }

      const {password, ...Data} = user;
      res.status(200).json(Data._doc);
    } catch (error) {
        next(erro);
    }
};

const updateUserController = async(req, res, next)=> {
    const {userId} = req.params;
    const updateData = req.body;

    try {
      const userToUpdate = await User.findById(userId);
      if (!userToUpdate) {
        throw new CustomError("User not found", 404);
      }

      Object.assign(userToUpdate, updateData);

      await userToUpdata.save();

      res.status(200).json({ massage: "User updated successfully ", user: userToUpdate});
    } catch (error) {
        next(erro);
    }
};

const buyCredit = async(req, res, next)=> {
    const {userId} = req.params;
    const updateData = req.body;
    try {
      const userToUpdate = await User.findById(userId);
      if (!userToUpdate) {
        throw new CustomError("User not found", 404);
      }

      if(updateData.hasOwnProperty("credit")){
          userToUpdate.credit = updateData.credit;
      }

      await userToUpdate.save();

      res.status(200).json({ massage: "Credit updated successfully ", user: userToUpdate});
    } catch (error) {
        next(erro);
    }
};

module.exports = {
    getUserController, 
    updateUserController, 
    buyCredit,
};
