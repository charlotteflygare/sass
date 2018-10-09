import React from "react"
import "./app.scss"
class App extends React.Component {

  render() {
    return (
      <div>
        <div className="header">
          <img src="logo.svg" />
        </div>
        <div className="heroImage">
          <img src="./hero.jpg" />

            <div className="container">
              <div className="destinationContainer">
                <div className="flyContainer">
                <h4>Flyg från</h4>
                  <div className="flyBorder">
                    <form>
                    <label>
                    <input type="text" name="name" placeholder="Vart flyger du ifrån?"/>
                    </label>
                  </form>
                  </div>

                  <div className="link">
                    <a>Stockholm-Arlanda ?</a></div>
                </div>

             <div className="flyContainer">
             <h4>Flyg till</h4>
             <div className="flyBorder">

               <form>
                 <label>
                 <input type="text" name="name" placeholder="Var flyger du till?"/>
                 </label>
               </form>
               </div>

             </div>


             </div>

            <div className="buttonContainer">
              <span>
              <button><p>Sök och beställ</p></button>
              </span>

            </div>

            </div>


        </div>
      </div>
    )
  }

}

export default App
