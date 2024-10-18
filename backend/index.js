const cors = require("cors");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const { type } = require("os");
const PORT = process.env.PORT || 4000;
const app = express();
require('dotenv').config();

// Mongodb connection
mongoose.connect(process.env.MONGO_URL).then(()=> {console.log("Mongodb Connected")}).catch((error)=>console.log(error))

app.use(express.json());
app.use(cors());   // our react will connect to our server
app.use(express.urlencoded({extended: false}));



app.get("/", (req, res)=> {
  res.send("Welcome to E-commerce backend API");
})


// Image Storage Engine
const storage = multer.diskStorage({
  destination: "./uploads/images",
  filename: (req, file,cb)=> {
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})
const upload = multer({storage: storage});

// creating upload EndPoints for images

app.use("/images", express.static(path.join(__dirname, "uploads/images")))

app.post("/upload", upload.single("product"), (req, res)=> {
    res.json({
      success: 1,
      image_url: `http://localhost:${PORT}/images/${req.file.filename}`
    })
} )


// Schema for Creating Product

const productSchema = new mongoose.Schema({
   id: {
    type: Number,
    required: true
   },
   name: {
    type: String,
    required: true
   },
   image: {
    type: String,
    required: true
   },
   category: {
    type: String,
    required: true
   },
   stock: {
    type: Number,
    required: true
   },
   new_price: {
    type: Number,
    required: true
   },
   old_price: {
    type: Number,
    required: true
   },
   avilable: {
    type: Boolean,
    default: true
   }

},{
  timestamps: true
})

 
const Product = mongoose.model("Product", productSchema);

// Creating Api for Create Product

app.post("/addProduct", async (req, res)=>{
   
   let products = await Product.find({});
   let id ;
   if(products.length > 0){
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1
   }else{
    id = 1;
   }


    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      stock: req.body.stock,
      new_price: req.body.new_price,
      old_price: req.body.old_price
    });

    console.log(product);
    await product.save();
    console.log("Saved");

    res.json({
      success: true,
      name: req.body.name
    })
})

// Creating api for deleting product

app.post("/removeProduct", async (req, res)=> {
     await Product.findOneAndDelete({id: req.body.id});
     console.log("Removed");
     res.json({
      success: true,
      name: req.body.name
     })
})

// Creating Api for Getting All Products
app.get("/allProducts", async(req, res)=> {
  let products = await Product.find({});
  console.log("All Products Fetched");
  res.send(products)
})

//  Schema for User model

const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  cartData: {
    type: Object
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Creating EndPoint for registering the user

app.post("/signup", async (req, res)=> {
   
  let check = await Users.findOne({email: req.body.email});
  if(check){
    return res.status(400).json({success: false, errors: "existing user found with same email address"})
  }

  let cart = {};
  for(let i =0; i < 300; i++ ){
    cart[i] = 0;
  }
   
  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cartData: cart
  })

  await user.save();

  const data = {
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  }

  const token = jwt.sign(data, "secret_ecom");
  res.json({success: true, token})
})

// Creating EndPoint for User Login

app.post("/login", async (req, res)=> {
  let user = await Users.findOne({email: req.body.email});
  if(user){
     const passCompare = req.body.password === user.password;
     if(passCompare){
      const data = {
        user: {
          id: user.id
        }
      }
      const token = jwt.sign(data, "secret_ecom");
      res.json({success: true,token})
     }
     else{
      res.json({success: false, errors: "Wrong Password"})
     }

   }
   else{
    res.json({success: false, errors: "Wrong Email Id"})
   }
  })

  // Creating endpoint for newcollection data

  app.get("/newcollection", async (req, res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(-8);
    console.log("NewCollection Fetched");
    res.send(newcollection)
  } )

    // Creating endpoint for Popular in women 

    app.get("/popularinwomen", async (req, res)=> {
      let products = await Product.find({category: "women"});
      let popularinwomen = products.slice(0,4);
      console.log("PopularInWomen Fetched");
      res.send(popularinwomen)
    })

    // creating middleware to fetch user

    const fetchUser = async (req, res, next)=> {
       const token = req.header("auth-token");
       if(!token){
        res.status(401).send({errors: "Please authentication using valid token"})
       }
       else{
         try {
          const data = jwt.verify(token, "secret_ecom");
          req.user = data.user;
          next();
         } catch (error) {
           res.status(401).send({errors: "Please authentication using valid token"})
         }
       }
    }

    // Creating endpoint for adding products in cartdata
     app.post("/addtocart", fetchUser, async (req, res)=> {
        // console.log(req.body, req.user);
        console.log("Added", req.body.itemId);
        let userData = await Users.findOne({_id: req.user.id});
        userData.cartData[req.body.itemId] += 1;
        await Users.findOneAndUpdate({_id: req.user.id},{cartData: userData.cartData});

        res.send("Added");

     })

   // Creating endpoint to remove product from cartdata
   app.post("/removefromcart", fetchUser, async (req, res)=> {
  console.log("removed", req.body.itemId);
  let userData = await Users.findOne({_id: req.user.id});
  if( userData.cartData[req.body.itemId] > 0)
  userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate({_id: req.user.id},{cartData: userData.cartData});
  res.send("Removed");
})

//  Creating endpoint to get cartData

// app.post("/getcart", fetchUser, async (req, res)=> {
//   console.log("Getcart");
//   let userData = await Users.findOne({_id: req.user.id});
//    res.json(userData.cartData);
// })


// app.post("/getcart", fetchUser, async (req, res) => {
//   console.log("Getcart");

//   // Fetch user data
//   let userData = await Users.findOne({ _id: req.user.id });

//   // Ensure cartData is initialized
//   if (!userData.cartData) {
//     userData.cartData = {}; // Initialize cartData if null or undefined
//     await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
//   }

//   res.json(userData.cartData);
// });

app.post("/getcart", fetchUser, async (req, res) => {
  console.log("Getcart");

  // Fetch user data
  let userData = await Users.findOne({ _id: req.user.id });

  // Check if the user exists
  if (!userData) {
    return res.status(404).json({ error: "User not found" });
  }

  // Ensure cartData is initialized
  if (!userData.cartData) {
    userData.cartData = {}; // Initialize cartData if null or undefined
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  }

  res.json(userData.cartData);
});



app.listen(PORT, ()=> {
  console.log("Server Started at PORT :" +PORT);
})
