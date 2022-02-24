const Cart = require('../model/cart.model');
exports.addToCart = (request,response,next)=>{
   let cart = new Cart(); 
   cart.productId = request.params.pid;
   cart.userId = request.session.current_user_id; 
   cart.addItemInCart()
   .then(result=>{
     return response.json({
         message: "success"
     });
   })
   .catch(err=>{
     return response.json({
         message: "error"
     })
   });
}
exports.removeFromCart = (request,response,next)=>{
    let cart = new Cart(); 
    cart.productId = request.params.pid;
    cart.userId = request.session.current_user_id; 
    cart.removeFromCart()
    .then(result=>{
      return response.json({
          message: "success"
      });
    })
    .catch(err=>{
      return response.json({
          message: "error"
      })
    });
}