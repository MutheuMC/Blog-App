import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import Girl from "../images/girl.jpg"
import People from "../images/people.jpg"
import Edit from "../images/edit.png"
import Delete from "../images/delete.png"
import axios from 'axios'
import moment from "moment"
import { AuthContext } from '../context/authContext'


const Single = () => {
    const [post, setPost] = useState({})

    const location = useLocation()
    const navigate = useNavigate()

    const postId = location.pathname.split('/')[2]

    const{currentUser } = useContext(AuthContext)

    useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.get(`http://localhost:8000/posts/${postId}`)
            setPost(res.data);
        }
        fetchData();
    },[postId])

    const handleDelete = async()=>{
        try{
            await axios.get(`http://localhost:8000/posts/${postId}`)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }


  return (
    <div className='single'>
        <div className="content">
            <div className="img">
                <img src={post?.img} alt="" />
            </div>
            <div className="user">
            {   post.userImg   && <img src={post.userImg} alt="" />
                    }    
            <div className="info">
                    <span>{post.username}</span>
                    <p>Posted {moment(post.date).fromNow}</p>

                </div>
               {currentUser.username === post.username && <div className="edit">
                    <Link to= ""> <img src={Edit} alt="" />  </Link>
                <img  onClick={handleDelete} src={Delete} alt="" />

                </div>}
            </div>

            <div className="post">
                <h1>{post.title}</h1>
                {post.description}
         
            </div>
        </div>
        <div className="menu">
            
        <Menu/>


        </div>
    </div>
  )
}

export default Single