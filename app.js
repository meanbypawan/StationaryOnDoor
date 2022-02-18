const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminRouter = require('./routes/admin.routes');
const userRouter = require('./routes/user.routes');
const indexRouter = require('./routes/index.routes');
const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));

app.use("/admin",adminRouter);
app.use("/user",userRouter);
app.use(indexRouter);

app.listen(3000);

