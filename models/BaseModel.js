"use strict";

const Models = require("../db/tables").Models;

class BaseModel {
  constructor(modelname) {
    this.modelname = modelname;
    this.Models = Models;
  }
  getModel() {
    return this.Models[this.modelname];
  }
  saveOne(values) {
    return this.Models[this.modelname].create(values);
  }
  findAll(params) {
    // if (params) {
    return this.Models[this.modelname].findAll({ where: params });
    // }
    // return this.Models[this.modelname].findAll();
  }
  findOne(params) {
    return this.Models[this.modelname].findOne({ where: params });
  }
  update(values, params) {
    return this.Models[this.modelname].update(values, { where: params });
  }
  delete(params) {
    return this.Models[this.modelname].destroy({ where: params });
  }
}

module.exports = BaseModel;
