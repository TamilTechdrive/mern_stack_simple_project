const usermodel = require("../usermodel/usermodel");

class userservice {
  async createuser(name, email, phone) {
    const newuser = new usermodel({ name, email, phone });
    return await newuser.save();
  }
  async getAllussers() {
    return await usermodel.find();
  }
  async getuserid(userid) {
    return await usermodel.findById(userid);
  }
  async updateuser(userid, updateuserdata) {
    return await usermodel.findByIdAndUpdate(userid, updateuserdata, {
      new: true,
    });
  }
  async deleteuser(user_Id){
    return await usermodel.findByIdAndDelete(user_Id);
  }
}

module.exports = new userservice();
