import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      
    <Card user='Bharat Kumar' img="https://images.unsplash.com/photo-1778546978399-0a9b63a84729?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D" p=' Standard dummy text used by web designers and publishers.' />
    <Card user='Raju Kumar' img='https://plus.unsplash.com/premium_photo-1661255389997-f02fd739e9c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D' p='Various versions have evolved over the years,' />
    <Card user='Raman Kumar' img='https://plus.unsplash.com/premium_photo-1705508816744-8d2549250cae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D' p='Contrary to popular belief, Lorem Ipsum is not simply random text' />

    </div>
  )
}

export default App