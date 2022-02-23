const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const adminRouter = require('./routes/admin.routes');
const userRouter = require('./routes/user.routes');
const indexRouter = require('./routes/index.routes');
const categoryRouter = require('./routes/category.routes');
const productRouter = require('./routes/product.routes');
const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(session({
    secret: 'dfkjfrrereprxvncvncvnrorererp'
}));

app.use("/admin",adminRouter);
app.use("/category",categoryRouter);
app.use("/user",userRouter);
app.use("/product",productRouter);
app.use(indexRouter);

app.listen(3000);

