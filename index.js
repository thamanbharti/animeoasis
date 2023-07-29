import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST","DELETE"], 
  })
);

mongoose
  .connect("mongodb://127.0.0.1:27017/animeoasis", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  passwrd: String,
});

const cartSchema=mongoose.Schema({
  name:String,
  itemid:String,
  price:String,
  itemimg:String,
  
})

const narutoschema=mongoose.Schema({
  name:String,
  itemid:String,
  price:String,
  itemimg:String,
  
})
const onepieceschema=mongoose.Schema({
  name:String,
  itemid:String,
  price:String,
  itemimg:String,
  
})

const demonslayerschema=mongoose.Schema({
  name:String,
  itemid:String,
  price:String,
  itemimg:String,
  
})
const onepunchmanschema=mongoose.Schema({
  name:String,
  itemid:String,
  price:String,
  itemimg:String,
  
})
const jutsukaisenschema=mongoose.Schema({
  name:String,
  itemid:String,
  price:String,
  itemimg:String,
  
})




const User = new mongoose.model("User", userSchema);
const Cart=new mongoose.model("Cart",cartSchema);
const Naruto=new mongoose.model("Naruto", narutoschema);
const Onepiece=new mongoose.model("Onepiece", onepieceschema);
const Demonslayer=new mongoose.model("Demonslayer", demonslayerschema);
const jutsukaisen=new mongoose.model("jutsukaisen", jutsukaisenschema);const Onepunchman=new mongoose.model("onepunchman", onepunchmanschema);
//add to cart
app.post("/addtocart",(req,res)=>{
  const {name,itemid,price,itemimg}=req.body;
  Cart.create({name,itemid,price,itemimg})
  .then((cart)=>{
    res.send({message:"added to cart",cart:cart});
  })
  .catch((error)=>{
    console.log(error);
    res.status(500).send({message:"An error occured"});
  })
})
app.post("/naruto",(req,res)=>{
  const {name,itemid,price,itemimg}=req.body;
  Naruto.create({name,itemid,price,itemimg})
  .then((naruto)=>{
    res.send({message:"added to cart",naruto:naruto});
  })
  .catch((error)=>{
    console.log(error);
    res.status(500).send({message:"An error occured"});
  })
})

app.get("/naruto", async (req, res) => {
  try {
    // Find all documents in the "Naruto" collection
    const narutoItems = await Naruto.find();

    // Send the retrieved data as the response
    res.send(narutoItems);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "An error occurred" });
  }
});

app.get("/onepunchman", async (req, res) => {
  try {
    // Find all documents in the "Naruto" collection
    const onepunchmanItems = await Onepunchman.find();

    // Send the retrieved data as the response
    res.send(onepunchmanItems);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "An error occurred" });
  }
});


app.get("/onepiece", async (req, res) => {
  try {
    // Find all documents in the "Naruto" collection
    const onepieceItems = await Onepunchman.find();

    // Send the retrieved data as the response
    res.send(onepieceItems);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "An error occurred" });
  }
});

app.get("/demonslayer", async (req, res) => {
  try {
    // Find all documents in the "Naruto" collection
    const demonslayerItems = await Demonslayer.find();

    // Send the retrieved data as the response
    res.send(demonslayerItems);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "An error occurred" });
  }
});

app.get("/jutsukaisen", async (req, res) => {
  try {
    // Find all documents in the "Naruto" collection
    const jutsukaisenItems = await jutsukaisen.find();

    // Send the retrieved data as the response
    res.send(jutsukaisenItems);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "An error occurred" });
  }
});

app.get("/addtocart", async (req, res) => {
  try {
    // Find all documents in the "Naruto" collection
    const cartItems = await Cart.find();

    // Send the retrieved data as the response
    res.send(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "An error occurred" });
  }
});

app.post("/onepiece",(req,res)=>{
  const {name,itemid,price,itemimg}=req.body;
  Onepiece.create({name,itemid,price,itemimg})
  .then((cart)=>{
    res.send({message:"added to cart",cart:cart});
  })
  .catch((error)=>{
    console.log(error);
    res.status(500).send({message:"An error occured"});
  })
})

app.post("/onepunchman",(req,res)=>{
  const {name,itemid,price,itemimg}=req.body;
  Onepunchman.create({name,itemid,price,itemimg})
  .then((cart)=>{
    res.send({message:"added to cart",cart:cart});
  })
  .catch((error)=>{
    console.log(error);
    res.status(500).send({message:"An error occured"});
  })
})

app.post("/jutsukaisen",(req,res)=>{
  const {name,itemid,price,itemimg}=req.body;
  jutsukaisen.create({name,itemid,price,itemimg})
  .then((cart)=>{
    res.send({message:"added to cart",cart:cart});
  })
  .catch((error)=>{
    console.log(error);
    res.status(500).send({message:"An error occured"});
  })
})

app.post("/demonslayer",(req,res)=>{
  const {name,itemid,price,itemimg}=req.body;
  Demonslayer.create({name,itemid,price,itemimg})
  .then((cart)=>{
    res.send({message:"added to cart",cart:cart});
  })
  .catch((error)=>{
    console.log(error);
    res.status(500).send({message:"An error occured"});
  })
})



// Register a new user
app.post("/register", (req, res) => {
  const { name, email, passwrd } = req.body;
  User.create({ name, email, passwrd })
    .then((user) => {
      res.send({ message: "User registered successfully", user: user });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ message: "An error occurred" });
    });
});


// Login user
app.post("/login", async (req, res) => {
  const { email, passwrd } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      if (passwrd === user.passwrd) {
        res.send({ message: "Login successful", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "An error occurred" });
  }
});

app.get('/addtocart/:id', (req, res) => {
  const itemId = req.params.id;

  // Use your Cart model to find the item by id in the database
  Cart.findOne({ _id: itemId })
    .then(item => {
      if (!item) {
        // If item with the given id is not found, send an error response
        return res.status(404).json({ error: 'Item not found' });
      }

      // If item is found, send it as a response
      res.json(item);
    })
    .catch(error => {
      // Handle any errors that occurred during the query or database connection
      console.error('Error fetching item from cart:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});



app.get("/", (req, res) => {
  res.send("welcome");
});




app.listen(3001, () => {
  console.log("Server started on port 3001");
});
