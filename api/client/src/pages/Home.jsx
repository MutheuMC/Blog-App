import React from 'react'
import { Link } from 'react-router-dom'

import Pic from "../images/girl.jpg"

const Home = () => {

    const posts = [
        {
        id: 1,
        title: "Post 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut quam nisi. Sed tristique ligula non velit molestie, ac aliquam arcu convallis. Integer quis ipsum nec dui dictum rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc et libero nec justo tempor vehicula. Phasellus commodo lacinia odio, a ultricies ex pretium id. Sed vitae eros ultrices, bibendum arcu et, eleifend nisl. Nullam viverra nibh non velit dapibus, non convallis turpis convallis.",
        image: Pic,

        },
        {
        id: 2,
        title: "Post 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut quam nisi. Sed tristique ligula non velit molestie, ac aliquam arcu convallis. Integer quis ipsum nec dui dictum rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc et libero nec justo tempor vehicula. Phasellus commodo lacinia odio, a ultricies ex pretium id. Sed vitae eros ultrices, bibendum arcu et, eleifend nisl. Nullam viverra nibh non velit dapibus, non convallis turpis convallis.",
        image: Pic,
        },
        {
        id: 3,
        title: "Post 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut quam nisi. Sed tristique ligula non velit molestie, ac aliquam arcu convallis. Integer quis ipsum nec dui dictum rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc et libero nec justo tempor vehicula. Phasellus commodo lacinia odio, a ultricies ex pretium id. Sed vitae eros ultrices, bibendum arcu et, eleifend nisl. Nullam viverra nibh non velit dapibus, non convallis turpis convallis.",
        image: Pic,
        },
        {
        id: 4,
        title: "Post 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut quam nisi. Sed tristique ligula non velit molestie, ac aliquam arcu convallis. Integer quis ipsum nec dui dictum rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc et libero nec justo tempor vehicula. Phasellus commodo lacinia odio, a ultricies ex pretium id. Sed vitae eros ultrices, bibendum arcu et, eleifend nisl. Nullam viverra nibh non velit dapibus, non convallis turpis convallis.",
        image: Pic,
        },
        {
        id: 5,
        title: "Post 5",
        description: "Description for post 5",
        image: "../images/people.avif",
        },
        {
        id: 6,
        title: "Post 6",
        description: "Description for post 6",
        image: "../images/people.avif",
        },
        {
        id: 7,
        title: "Post 7",
        description: "Description for post 7",
        image: "../images/people.avif",
        },
        {
        id: 8,
        title: "Post 8",
        description: "Description for post 8",
        image: "../images/people.avif",
        },
        {
        id: 9,
        title: "Post 9",
        description: "Description for post 9",
        image: "../images/people.avif",
        },
        {
        id: 10,
        title: "Post 10",
        description: "Description for post 10",
        image: "../images/people.avif",
        },
    ];
    

return (
    <div className="home">
        <div className="posts">
            {posts.map((post)=>(
                <div className="post" key={post.id}>
                    <div className="img">
                        <img src={post.image} alt="" />
                        {console.log(post.image)}
                        
                    </div>
                    <div className="content">
                        <Link  className = "link" to = {`/posts/${post.id}`}><h1>{post.title}</h1></Link>
                        <p>{post.description}</p>
                        <button>Read More</button>
                    </div>
                </div>

            ))};
        </div>
    </div>

    
);
};

export default Home