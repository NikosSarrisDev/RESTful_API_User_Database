const express = require("express");
const mongoose = require("mongoose");

const User = require("./newMongodbSchema");

mongoose.connect("mongodb://localhost/Mydb");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/creator" , (req,res) => {
    res.json({Creator : "Nikos Sarris 2051"});
});


app.get("/all/users" ,async (req,res) => {

    

    try{
        const user =await User.find();
        res.send(user);
    }
    catch(err){
        res.status(502).json({message : err.message});
    }

});

app.get("/:id" ,async (req,res) => {/////Get one user

    try{
        const user =await User.find({
            name : req.params.id
        });

        res.status(201).json(user);
    }
    catch(err){
        res.status(502).json({message : err.message});
    }

});

app.post("/add/user" ,async (req,res) => {/////Create a new user

    try{
        const user =await User.create({
            name : req.body.name,
            surname : req.body.surname,
            Students_id : req.body.Students_id,
            age : req.body.age,
            hobbies : req.body.hobbies,
            AMKA : req.body.AMKA,
            AFM : req.body.AFM

        })
        res.status(201).json(user)
    }
    catch(err){
        res.status(502).json({message : err.message});
    }

})


app.put("/:id" ,async (req,res) => {/////Updating an existing user

    try{

        const user =await User.updateOne({Students_id : req.params.id},{
            name : req.body.name ,
            surname : req.body.surname,
            Students_id : req.body.Students_id,
            age : req.body.age,
            hobbies : req.body.hobbies,
            AMKA : req.body.AMKA,
            AFM : req.body.AFM
        });

        res.status(201).json(user);

    }catch(err){
        res.status(502).json({message : err.message});
    }

})

app.delete("/:id" ,async (req,res) => {/////Delete a user from database
  
    try{
        const user =await User.deleteOne({Students_id : req.params.id});
        
        res.status(201).send(user);

    }catch(err){
        res.status(502).json({message : err.message});
    }

})

app.listen(PORT , () => {
    console.log(`This API is running on port : ${PORT}`)
})

