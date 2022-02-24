const { response, request } = require('express');
const User = require('../model/user.model');
exports.signup = (request,response,next)=>{
   console.log(request.body); 
   let user = new User();
   user.name = request.body.name;
   user.email = request.body.email;
   user.mobile = request.body.mobile;
   user.password = request.body.password;

   user.signup()
   .then(result=>{
     User.getCurrentUser(user.email)
     .then(results=>{
        request.session.current_user_id=results[0].id;
        response.redirect("/");
      })
     .catch();
   })
   .catch(err=>{
     console.log(err);
     return response.send("Erro....");    
   });
};