const db = require('../database/db');

class Offer {

  constructor(id, tenderId, name, value, date=null) {
    this.id = id;
    this.tenderId = tenderId;
    this.name = name;
    this.value = value;
    this.date = date;
  }

  static async getAllSuitableWithTenderId(id) {
    try {
      const [rows] = await db.query('SELECT * FROM offers WHERE tenderId = ? AND value < (SELECT budget FROM tenders WHERE id = ?) ORDER BY value ASC;', [id, id]);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async create(tenderId, name, value) {
    try {
      const [result] = await db.query('INSERT INTO offers (tenderId, name, value) VALUES (?, ?, ?)', [tenderId, name, value]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = Offer;
