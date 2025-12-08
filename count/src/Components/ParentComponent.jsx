import React from "react"

class ParentComponent extends React.Component {
  render() {
    const { ComponentProp } = this.props; 
    return (
      <div>
        <h1>Parent Component</h1>
        <ComponentProp /> {}
      </div>
    );
  }
}

export default ParentComponent;