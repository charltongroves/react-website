import React, {Component} from 'react';
import ArtStore from "../stores/ArtStore"
import ImageCarousel from '../components/ImageCarousel'
import '../../css/art.css';
class Art extends Component {
  constructor(props) {
    super(props);
    this.state = {
      art: ArtStore.getAllArt()
    }
  }
  render() {
    const styles = {
      h1: {
        color: "#fff",
        fontWeight: 300
      },
      h2: {
        color: "#fff",
        fontWeight: 300
      },
      textCont: {
        flex: "0 0 100rem",
        textAlign: "center",
        maxWidth: "600px",
        margin: "2rem auto 0 auto",
        padding: "0 1rem",
        clear: "both"
      }
    }
    return (
      <div className="easeIn">
        <div style={styles.textCont}>
          <h1 style={styles.h1}>
            I make art sometimes
          </h1>
          <h3 style={styles.h2}>
            I like making cool drawings and paintings. 
            It's purely just a hobby, but it has helped me gain an appreciation for design 
            and figuring out what looks 'good' and 'bad'
          </h3>
          <p style={styles.h2}>
            Take a look at some of my recent works below
          </p>
        </div>

        <ImageCarousel photos={this.state.art}/>
      </div>
    );
  }
}

export default Art;