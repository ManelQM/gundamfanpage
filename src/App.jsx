import { useState } from "react"
import List from "./components/List"; 
import gundamRx78 from "./img/PngItem_4082639.png"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <img src={gundamRx78} alt="gundam"></img>
        <h1>ガンダムファンページ</h1>
      </header>
      <nav className="nav">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Películas</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <section className="content">
      <List/>
      </section>
      <aside className="lateral">

      </aside>
      <footer className="footer">Visual No Video</footer>
    </div>
  )
}

export default App
