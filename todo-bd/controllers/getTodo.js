//import the model
const Todo = require("../models/ToDo")

const getTodo = async(req,res)=>{
    try {
        //Fetch all todo items from database
        const todos = await Todo.find({});

        //response
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched"
        })
    } 
    catch (err) {
        console.err(err);
        res.status(500).json({
            success:false,
            error:"Error has occured",
            message:err.message
        })
    }
}

const getTodoById = async(req,res) =>{
    try{
        //Fetch item by ID from database
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        //Data for given Id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Found with Given Id"
            })
        } 
        //Data for given Id found
        res.status(200).json({
            success:true,
            data:todo,
            message:`todo ${id} Data successfully fetched`
        })
    }
    catch(err){
        console.err(err);
        res.status(500).json({
            success:false,
            error:"Error has occured",
            message:err.message
        })
    }
}
module.exports = {getTodoById, getTodo}