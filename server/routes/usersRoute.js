const express = require('express');
const router = express.Router();
usersRoute = require("../controllers/userController");

router.get('/',usersRoute.userController);

const UserDao = require("../models/userDao");

class UserList {
    /**
     * Handles the various APIs for displaying and managing tasks
     * @param {UserDao} userDao
     */
    constructor(userDao) {
      this.userDao = userDao;
    }
    async showUsers(req, res) {
      const querySpec = {
        query: "SELECT * FROM root r"
      };
 
      const items = await this.userDao.find(querySpec);
      res.render("/", {
        title: "Lista de usuarios",
        tasks: items
      });
    }
 
 
    
  }
 
  module.exports = UserList;