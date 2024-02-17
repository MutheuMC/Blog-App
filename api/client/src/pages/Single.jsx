import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
import Girl from "../images/girl.jpg"
import People from "../images/people.jpg"
import Edit from "../images/edit.png"
import Delete from "../images/delete.png"


const Single = () => {
  return (
    <div className='single'>
        <div className="content">
            <div className="img">
                <img src={People} alt="" />
            </div>
            <div className="user">
                <img src={Girl} alt="" />
                <div className="info">
                    <span>John</span>
                    <p>Posted 2 days ago</p>

                </div>
                <div className="edit">
                    <Link to= ""> <img src={Edit} alt="" />  </Link>
                <img src={Delete} alt="" />

                </div>
            </div>

            <div className="post">
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aliquam, tempora obcaecati minima accusantium quae impedit earum? Architecto 
                    dignissimos voluptas cumque temporibus debitis fugit, nostrum itaque. Earum, aliquam accusamus? Ducimus?
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut quam nisi. Sed tristique ligula non velit molestie, ac aliquam arcu convallis. Integer quis ipsum nec dui dictum rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc et libero nec justo tempor vehicula. Phasellus commodo lacinia odio, a ultricies ex pretium id. Sed vitae eros ultrices, bibendum arcu et, eleifend nisl. Nullam viverra nibh non velit dapibus, non convallis turpis convallis. Nullam gravida efficitur magna, eget dapibus metus vestibulum id. Integer tempus felis non urna venenatis volutpat. Integer et elit aliquam, vehicula odio eu, condimentum mauris. Sed sed ipsum at ex scelerisque semper. Ut scelerisque libero ut lacus lacinia, auctor consectetur lacus bibendum. Sed pharetra, libero vel malesuada sollicitudin, libero ex feugiat orci, non varius mi purus nec ipsum. Cras mattis velit sit amet massa iaculis hendrerit. Nunc varius dapibus nulla, non finibus quam consectetur sit amet.

                    Curabitur scelerisque, dolor vel fringilla tempor, quam nisi consequat tortor, nec vulputate magna est sit amet metus. Ut id urna tortor. Sed efficitur erat id elit rhoncus lobortis. Sed tristique, nunc ac feugiat scelerisque, sapien dui sollicitudin mauris, a lacinia velit justo at ligula. Integer vestibulum, justo ac tincidunt ultricies, sem magna bibendum sem, at ultricies enim arcu a velit. Ut tincidunt pharetra justo, ac aliquet arcu gravida ac. Nullam viverra neque ut nunc efficitur, et pharetra tortor ullamcorper. Sed vitae sem ut odio pretium feugiat. Sed tempus nulla ac sapien dignissim, vitae efficitur nisi eleifend. Phasellus vitae vehicula metus, quis tincidunt lacus. Suspendisse dictum vestibulum arcu. Integer vel nulla eu dui vehicula hendrerit. Sed aliquet mi nec purus laoreet, ac fermentum justo posuere. Vivamus sed velit non urna ultrices scelerisque id vel ligula. Vivamus ac rutrum justo. Etiam ut urna in nunc ultrices accumsan.

                    In hac habitasse platea dictumst. Vivamus sit amet velit in erat lacinia laoreet. Nam congue, urna vitae viverra ultrices, felis neque scelerisque tortor, nec varius augue libero eget ipsum. Integer non sapien non tortor dignissim efficitur non ut leo. Ut vulputate magna nec nunc vehicula, ac venenatis lorem ultricies. Aliquam et dui ligula. Phasellus auctor, leo nec vehicula pretium, erat nunc lobortis ante, nec ullamcorper tortor tortor sit amet nulla. Suspendisse potenti. Nullam nec lectus et libero varius feugiat non sed elit. Morbi ac justo vel diam commodo eleifend. Vivamus vestibulum turpis quis nunc placerat, nec efficitur tortor suscipit. Sed ultricies tempus sapien, et pellentesque sapien lacinia nec. Suspendisse potenti. Integer nec tortor nec nulla eleifend fermentum. Sed viverra eros quis mi efficitur, eget sollicitudin nisi ultrices. Integer tempor arcu quis ipsum consequat, id tincidunt purus hendrerit.


                    </p>
            </div>
        </div>
        <div className="menu">
            
        <Menu/>


        </div>
    </div>
  )
}

export default Single