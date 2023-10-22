//import the model
const Todo = require("../models/ToDo");

//define route handler
const updateTodo = async(req,res) => {
    try{
       // getting id by destructuring 
       const {id} = req.params;
       //const id = req.params.id;      
       const {title, description} = req.body;

       const todo = await Todo.findByIdAndUpdate(
        {_id: id},
        {title, description, updatedAt:Date.now()}
       )

       res.status(200).json({
        success:true,
        data:todo,
        message:"Updated Successfully"
       })

    }
    catch(err){
        console.error(err)
        res.status(500).json({
            success:false,
            data:"internal server error",
            error:err.message,
        })
    }
}
module.exports = {updateTodo};