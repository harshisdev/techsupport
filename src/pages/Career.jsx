import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Helmet } from 'react-helmet'

const Career = () => {
  return (
    <>
      <Helmet>
        <title>Career at IT Services Group</title>
      </Helmet>
      <Navbar activeSection='career' />
      <div className="container custom-padding">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore minus saepe cupiditate molestias iusto illum deserunt nobis ducimus! Voluptates iste molestias ipsum magni quia earum qui laboriosam totam, quae corporis. Iste, natus officia labore, accusantium rerum eaque facilis magni quam vel magnam debitis excepturi voluptates quasi nostrum et, cupiditate earum molestias quae architecto. Impedit at hic quasi molestiae debitis explicabo consequatur autem deserunt eligendi aspernatur corporis excepturi voluptatum eius qui magni quisquam dolorum optio, praesentium iste sit accusantium ad. Fuga alias hic qui obcaecati sint temporibus culpa. Possimus suscipit repudiandae aspernatur assumenda, cumque nulla rem consequatur placeat deserunt at rerum.
      </div>
      <Footer />
    </>
  )
}

export default Career
