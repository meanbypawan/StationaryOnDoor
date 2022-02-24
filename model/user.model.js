const pool = require('../util/database');
module.exports = class User{
  constructor(name,email,mobile,password){
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.password = password;
  }
  checkUser(){
      return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
           if(!err){
             let sql = "select * from user where email =? and password = ?";
             con.query(sql,[this.email,this.password],(err,queryResult)=>{
                con.release();
                err ? reject(err) : resolve(queryResult);
             });
           }
           else
             reject(err);
        });
      });
  }
  static getCurrentUser(email){
      return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
              if(!err){
                 let sql = "select * from user where email=?";
                 con.query(sql,[email],(err,queryResult)=>{
                   con.release();
                   err ? reject(err) : resolve(queryResult);
                 });
              }
              else
               reject(err);
          })
      });
  }
  signup(){
      return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
          if(!err){
             let sql = "insert into user(name,email,mobile,password) values(?,?,?,?)";
             con.query(sql,[this.name,this.email,this.mobile,this.password],(err,queryResult)=>{
                con.release();
                err ? reject(err) : resolve(queryResult);
             });
          }
          else
            reject(err);
        });
      });
  }
}