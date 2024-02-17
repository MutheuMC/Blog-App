
import {db } from "../db.js"
export const getPosts =(req, res)=>{
    const q = req.query.cat ? "SELECT * from posts WHERE cat = ?" : "SELECT * from posts"

    db.query(q, [req.query.cat], (err, data)=>{
        if(err) return res.send(err)

    return res.status(200).json(data)
    })

}

export const getPost =(req, res)=>{

    const q = "SELECT `username`, `title`, description`, p.image, u.image AS userImg, `categories`, `date` FROM users u JOIN posts p ON u.id === p.uid WHWRE p.id= ?"

    db.query(q, [req.params.id], (err, data)=>{
        if(err) return res.send(err)

        return res.status(200).json(data[0]);
    })
    
}

export const addPost =(req, res)=>{
    
}

export const updatePost =(req, res)=>{
    
}
export const deletePost =(req, res)=>{
    
}