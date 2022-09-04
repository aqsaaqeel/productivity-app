const express = require('express');
const mongoose = require('mongoose');
const TodoSchema = require('../models/todo');
Schema = mongoose.Schema;


module.exports={
AddTodo,
DeleteTodo,
GetAllTodo,
GetSpecificTodo,
UpdateTodo
}

async function AddTodo(req, res, next) {
      
     try {
    
          const body = req.body;
          const data = await TodoSchema.create({
                UserId:body.UserId,
                // Title: [{ type: Schema.Types.ObjectId, ref: TodoSchema }],
                Title:body.Title,
                Description:body.Description,
                Date:new Date()
            });
            console.log("data->",data);
            return res.status(200).json("Todo Added Succesfully");
        } catch (error) {
            console.log("error : ", error);
            return next(error);
            }
}

async function GetAllTodo(req, res, next) {
      
    const id = req.params.UserId;
    try {
        const data = await TodoSchema.find({
            UserId:id
         }).sort({ Date: -1 });
        console.log("data->",data);
        return res.status(200).json(data);
    } catch (error) {
        console.log("error : ", error);
        return next(error);
    }
}

async function DeleteTodo(req, res, next) {
        
     const id = req.params.TodoId;
     try {
          const data = await TodoSchema.deleteOne({
                _id:id
            })
          console.log("data->",data);
          return res.status(200).json("Todo Deleted Succesfully");
     } catch (error) {
          console.log("error : ", error);
          return next(error);
     }
    }


async function GetSpecificTodo(req, res, next) {
        
     const id = req.params.TodoId;
     try {
          const data = await TodoSchema.findOne({
                _id:id
            })
          console.log("data->",data);
          return res.status(200).json(data);
     } catch (error) {
          console.log("error : ", error);
          return next(error);
     }
    }
async function UpdateTodo (req, res, next) {
            
         const id = req.params.TodoId;
         const body = req.body;
         try {
            const data = await TodoSchema.updateOne({
                    _id:id
                },{$set:body})
            console.log("data->",data);
            return res.status(200).json("Todo Updated Succesfully");
         } catch (error) {
            console.log("error : ", error);
            return next(error);
         }
        }