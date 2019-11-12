import React, { Component } from "react";

const styles = {
  container: {
    display: "flex"
  },
  box: {
    flex: "0 1 33%",
    textAlign: "center",
    borderRight: "1px solid #ccc",
    label: {
      fontWeight: 600
    }
  },
  ticketBox: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "2px"
  }
};

class Home extends Component {
  state = {
    loading: false,
    ticketTitle: ""
  };

  render() {
    let { ticketTitle, loading, allTickets } = this.state;
    return (
      <div>
        <input type="text" style={{ borderRadius: "3px" }} />
        <button>Add</button>
        <br />
        <br />
        <div style={styles.container}>
          <div style={styles.box}>
            <label style={styles.box.label}>IN-PROGRESS</label>
            {/** show Todo tickets below */}
          </div>

          <div style={styles.box}>
            <label style={styles.box.label}>DONE</label>
            {/** show Done tickets below */}
          </div>
          <div style={styles.box}>
            <label style={styles.box.label}>CLOSE</label>
            {/** show Close tickets below */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
