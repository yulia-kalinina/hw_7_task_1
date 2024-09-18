import { Component } from "react";

export class ProjectList extends Component {
  render() {
    
    const projects = this.props.projects;

    return projects.map((item, index) => (
        <div className="projects-img" key={index}>
          <img src={item.img} alt="" />
        </div>
      ));
  }
}
