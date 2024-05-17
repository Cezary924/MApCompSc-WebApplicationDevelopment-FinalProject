const db = require('../database/db');

class Tender {

  constructor(id, title, institution, description, startDate, endDate, budget) {
    this.id = id;
    this.title = title;
    this.institution = institution;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.budget = budget;
  }

  static async getAllActive() {
    try {
      const [rows] = await db.query('SELECT * FROM tenders WHERE endDate >= NOW()');
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async getAllCompleted() {
    try {
      const [rows] = await db.query('SELECT * FROM tenders WHERE endDate < NOW()');
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const [rows] = await db.query('SELECT * FROM tenders WHERE id = ?', [id]);
      if (rows.length > 0) {
        const tenderData = rows[0];
        return new Tender(tenderData.id, tenderData.title, tenderData.institution, tenderData.description, tenderData.startDate, tenderData.endDate, tenderData.budget);
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  static async create(title, institution, description, startDate, endDate, budget) {
    try {
      const [result] = await db.query('INSERT INTO tenders (title, institution, description, startDate, endDate, budget) VALUES (?, ?, ?, ?, ?, ?)', [title, institution, description, startDate, endDate, budget]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = Tender;
