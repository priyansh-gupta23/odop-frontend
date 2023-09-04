const mongoose = require("mongoose");
const bcrypt= require("bcryptjs");
const jwt = require("jsonwebtoken");

const productModel = new mongoose.Schema(
    {
        name:{
            type:String,
            required: [true, "Name is required"],
            minLength: [3,"Name should be atleast 3 character long"],
        },

        district: {
            type:String,
            required: [true, "District name is required"],
            minLength: [4,"District should be atleast 3 character long"],
        },

        avatar: {
            type: Object,
            default:{
                fileId:" ",
                url:"https://icons8.com/icon/114320/image"
            }
        },
    }
)