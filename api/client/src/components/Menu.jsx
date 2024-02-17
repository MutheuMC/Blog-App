import React from 'react'
import Pic from "../images/phone.jpg"

const Menu = () => {

    const posts = [
        {
        id: 1,
        title: "Lorem ipsum dolor sit amet,",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut quam nisi. Sed tristique ligula non velit molestie, ac aliquam arcu convallis. Integer quis ipsum nec dui dictum rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc et libero nec justo tempor vehicula. Phasellus commodo lacinia odio, a ultricies ex pretium id. Sed vitae eros ultrices, bibendum arcu et, eleifend nisl. Nullam viverra nibh non velit dapibus, non convallis turpis convallis.",
        image: Pic,

        },
        {
        id: 2,
        title: "consectetur adipiscing elit. Duis ut quam nisi.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut quam nisi. Sed tristique ligula non velit molestie, ac aliquam arcu convallis. Integer quis ipsum nec dui dictum rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc et libero nec justo tempor vehicula. Phasellus commodo lacinia odio, a ultricies ex pretium id. Sed vitae eros ultrices, bibendum arcu et, eleifend nisl. Nullam viverra nibh non velit dapibus, non convallis turpis convallis.",
        image: Pic,
        },
        {
        id: 3,
        title: "Lorem ipsum dolor sit amet, consectetur ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut quam nisi. Sed tristique ligula non velit molestie, ac aliquam arcu convallis. Integer quis ipsum nec dui dictum rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc et libero nec justo tempor vehicula. Phasellus commodo lacinia odio, a ultricies ex pretium id. Sed vitae eros ultrices, bibendum arcu et, eleifend nisl. Nullam viverra nibh non velit dapibus, non convallis turpis convallis.",
        image: Pic,
        },
        {
        id: 4,
        title: "Chivalry refers to the medieval knightly system with its religious,ost 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut quam nisi. Sed tristique ligula non velit molestie, ac aliquam arcu convallis. Integer quis ipsum nec dui dictum rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc et libero nec justo tempor vehicula. Phasellus commodo lacinia odio, a ultricies ex pretium id. Sed vitae eros ultrices, bibendum arcu et, eleifend nisl. Nullam viverra nibh non velit dapibus, non convallis turpis convallis.",
        image: Pic,
        }];

  return (
    <div className='menu'>
        <h1>Other posts you might like</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={post.image} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                    
                </div>
            ))}
        </div>
  )
}

export default Menu