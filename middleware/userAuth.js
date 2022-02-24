exports.isAuth = (request,response,next)=>{
    if(request.session.current_user_id)
      next();
    else
     response.redirect("/login");  
}