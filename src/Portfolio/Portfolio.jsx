import { Component } from "react";
import { Toolbar } from "../Toolbar/Toolbar";
import { ProjectList } from "../ProjectList/ProjectList";

export class Portfolio extends Component {
  state = {
    filters: ["All", "Websites", "Flayers", "Business Cards"],
    selected: "All",
    projects: this.props.projectList,
    filteredProjects: this.props.projectList,
  };

  onSelectFilter = (filter) => {
    const { projects } = this.state;

    if (filter === "All") {
      this.setState({ selected: filter, filteredProjects: projects });
    } else if (filter !== "All") {
      const resultOfFiler = projects.filter((item) => item.category === filter);
      this.setState({ selected: filter, filteredProjects: resultOfFiler });
    }
  };

  render() {
    const { filters, selected, filteredProjects } = this.state;

    return (
      <div className="container">
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={this.onSelectFilter}
        />
        <div className="gallery">
          <ProjectList projects={filteredProjects} />
        </div>
      </div>
    );
  }
}
