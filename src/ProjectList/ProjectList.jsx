import { Component } from "react";

export class ProjectList extends Component {
  render() {
    
    const projects = this.props.projects;
    let index = 0;

    return projects.map((item) => (
      <div className="item" key={index++}>
        <img src={item.img} alt="" />
      </div>
    ));
  }
}
