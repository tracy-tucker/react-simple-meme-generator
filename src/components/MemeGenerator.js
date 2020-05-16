import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  componentDidMount() {
    //fetchData goes here
  }

  render() {
    return (
      <div>
        <h1>Meme Generator</h1>
      </div>
    );
  }
}

export default MemeGenerator;
