const user = require("../usermodel/usermodel");
const userservice = require("../userservice/userservice");

class usercontroller {
  async createuser(req, res) {
    try {
      const { name, email, phone } = req.body;
      const saveuser = await userservice.createuser(name, email, phone);
      res.json(saveuser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getAllUsers(req, res) {
    try {
      const alluser = await userservice.getAllussers();
      res.json(alluser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getuserid(req, res) {
    const user_Id = req.params.id;
    try {
      const oneuser = await userservice.getuserid(user_Id);
      if (!oneuser) {
        return res.status(404).json({ error: "user not found" });
      }
      res.json(oneuser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async updateuser(req, res) {
    const user_Id = req.params.id;
    const updateuserdata = req.body;
    try {
      const oneuser = await userservice.updateuser(user_Id, updateuserdata);
      if (!oneuser) {
        return res.status(404).json({ error: "user not found" });
      }
      res.json(oneuser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async deleteuser(req, res) {
    const user_Id = req.params.id;
    try {
      const oneuser = await userservice.deleteuser(user_Id);
      if (!oneuser) {
        return res.status(404).json({ error: "user not found" });
      }
      res.json({message: "user deleted successfully",user: oneuser});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new usercontroller();
