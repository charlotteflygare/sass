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
          </div>


          <div className="container">
            <div className="tab-menu">
                  <div className="tab-menu-fly">
                    <p>Flyg</p>
                  </div>
                  <div className="tab-menu-flyhotel">
                    <p>Flyg & hotell</p>
                  </div>
                  <div className="tab-menu-rental">
                    <p>Hyrbil</p>
                  </div>
                  <div className="tab-menu-hotel">
                    <p>Hotell</p>
                  </div>
                </div>

              <div className="destinationContainer">

                <div className="flyContainer tab active" id="tab1">
                  <h4>Flyg från</h4>
                      <div className="flyBorder">
                        <form>
                          <label>
                          <input type="text" name="name" placeholder="Vart flyger du ifrån?"/>
                          </label>
                        </form>
                      </div>
                      <div className="link">
                        <a>Stockholm-Arlanda ?</a>
                    </div>
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



    )
  }

}

export default App
