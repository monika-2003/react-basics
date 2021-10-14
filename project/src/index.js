import React from 'react'
import ReactDom from 'react-dom'

import './index.css'
const configuration = [
  {
    image: 'https://images.indianexpress.com/2021/09/canva-photo-editor-8-1.jpg',
    name: 'Lee Jong Suk',
    height: '186 cm',
  },
  {
    image: 'https://6.vikiplatform.com/image/2f97128c22a64835890381d23ea0a81e.jpeg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
    name: 'yang yang',
    height: '180 cm',
  },
  {
    image: 'https://wiki.d-addicts.com/images/e/ea/Chen_Bo_Hao.jpeg',
    name: 'Chen Bo Hao',
    height: '180 cm',
  },
  {
    image: 'https://6.vikiplatform.com/image/7424c6ddecab45549f3e95f375a4dc30.png?x=b&s=843x474&q=h&cb=1',
    name: 'Daren Chen',
    height: '184 cm',
  }
]

const Actors = ({image , name , height}) => {
  return(
    <section className = "beauty">
      <img src = {image} alt = "..."></img>
      <h1>{name}</h1>
      <h3>"Height is : "{height}</h3>
      <button onClick = {() => {console.log((name))}}>VOTE</button>
    </section>
  )
}

function Crush() {
  return(
    <section>
      {configuration.map((confi) => {
        return <Actors {...confi}/>
      })}
    </section>
  )
}
ReactDom.render(<Crush/> , document.getElementById("root"))