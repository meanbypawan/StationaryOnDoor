const Admin = require('../model/admin.model');
exports.adminLoginPage = (request,response,next)=>{
    response.render("admin/admin_login.ejs",{
        title: "Login"
    });
};
exports.adminDashBoard = (request,response,next)=>{
   response.render('admin/admin_dashboard.ejs',{
      title : "Admin Dashboard"
    });
}
exports.adminLoginPost = (request,response,next)=>{
   const email = request.body.email;
   const password = request.body.password;
   let admin = new Admin(email,password);
   admin.checkAdmin().then(results=>{
     if(results.length>0){
      request.session.current_user = email; 
      response.redirect("/admin/dashboard"); 
     }
     else
       console.log("Login Failed...");  
   }).catch(err=>{
       console.log(err);
   });
};
exports.signout = (request,response,next)=>{
    request.session.current_user = null;
    request.session.destroy();
    response.redirect("/admin/");
}