//import logo from './assets/react.svg'
import './App.css'

function App() {


  return (
    <>
    <picture>
      <source media="(min-width: 1000px)" srcSet="https://picsum.photos/id/5/1200/1200"/>
      <source media="(min-width: 750px)" srcSet="https://picsum.photos/id/5/1000/1000"/>
      <source media="(min-width: 500px)" srcSet="https://picsum.photos/id/5/750/750"/>
      <img src="https://picsum.photos/id/5/500/500" />
    </picture>
    </>
  )
}

export default App
