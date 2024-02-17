import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {db} from '../db.js';


const secretKey = "Ilove34555youuuututueyiuhufvhdhfiheruhdvhdfsui"
export const  register = (req, res)=>{

    //CHECK IF THE USER EXISTS

    const q = "SELECT * FROM users WHERE email = ?  OR username = ?"
    db.query(q, [req.body.email, req.body.username], (err, data)=>{
        if(err) return res.status(500).json("Internal serevr error")
        if(data.length) return res.status(409).json("User already exists")

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
      
        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES(?)";
        const values=[
            req.body.username,
            req.body.email,
            hashedPassword
        ];

        db.query(q, [values], (err, data)=>{
            if(err) return res.status(500).json(err);

            return res.status(200).json("User created");
        })

    })
}

export const login =(req, res)=>{
    // console.log(res.body.username, res.body.password)

    //check if the user exists
    const q = "SELECT * from users WHERE username = ?"
    

    db.query(q, [req.body.username], (err, data)=>{
        if(err) return res.status(500).json(err)
        if(data.length == 0) return res.status(404).json("User not found. Register")

         console.log(data)

            //check if password is correct
        const userPassword = data[0].password
        console.log(userPassword)
        const comparePassword = bcrypt.compareSync(req.body.password, userPassword)

        if(!comparePassword) return res.status(404).json("Username or Password incorrect");

        const token = jwt.sign({id: data[0].id},secretKey,{expiresIn: 60 * 60});

        const [{password, ...others}] = data

        res.cookie("jwttoken", token ,{httpOnly:true})
        res.json(others)  
        console.log("logged in")  


    })

}

export const logout = (res, req)=>{

    res.clearCookie("jwttoken", {
        sameSite:"None",
        secure:true
    }).status(200).json("User Logged out");

}