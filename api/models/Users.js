/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  Attributes: {
    Name: {
      Type: "Text",
      required: true
    },
    Age: {
      Type: "text",
      required: true
    },
    Admin:{
      Type: "boolean",
      required: true,
      defaultsTo: false
    }
  }
};

