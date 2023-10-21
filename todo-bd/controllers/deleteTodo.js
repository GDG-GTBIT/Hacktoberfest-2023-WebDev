//import the model
const Todo = require("../models/ToDo");

//define route handler
const deleteTodo = async(req,res) => {
    try{
      const {id} = req.params;

      await Todo.findByIdAndDelete(id)

      res.json({
        success:true,
        message:"Todo Deleted"
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
module.exports = {deleteTodo};