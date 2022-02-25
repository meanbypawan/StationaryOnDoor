const express = require('express');
const router = express.Router();
router.get("/place-order/:data/:address/:contact",(request,response,next)=>{
  let data = request.params.data;
  data = JSON.parse(data);
});

module.exports = router;