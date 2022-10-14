import { Component } from "react";
import Header from "../components/Header";
import "../Main.css";

class Main extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div>
            <div className="img"></div>
            <h2>음악, <br></br>함께할 누군가가 필요할 때</h2>
        </div>
      </div>
    );
  }
}

export default Main;
