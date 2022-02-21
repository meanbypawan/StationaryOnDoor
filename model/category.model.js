const pool = require('../util/database');
module.exports = class Category {
    constructor(categoryName, categoryImage) {
        this.categoryName = categoryName;
        this.categoryImage = categoryImage;
    }
    save() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
              if(!err){  
               let sql = "insert into category(categoryName,categoryImage) values(?,?)";
               con.query(sql,[this.categoryName,this.categoryImage],(err,queryResult)=>{
                 con.release(); 
                 err ? reject(err) : resolve(queryResult);
               });
              }
              else 
                reject(err);
            });
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {

            });
        });
    }
    update() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {

            });
        });
    }
    categoryById(id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {

            });
        });
    }
    categoryList() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {

            });
        });
    }
}