import { Component } from "react";
import { Toolbar } from "../Toolbar/Toolbar";
import { ProjectList } from "../ProjectList/ProjectList";

export class Portfolio extends Component {
  state = {
    filters: ["All", "Websites", "Flayers", "Business Cards"],
    selected: "All",
    progects: this.props.projectList,
    filtredProgects: [],
  };

  onSelectFilter(filter) {
    const { progects } = this.state;

    if (filter === "All") {
      this.setState({ filtredProgects: progects });
    } else {
      const resultOfFiler = progects.filter((item) => item.category === filter);
      this.setState({ selected: filter, filtredProgects: resultOfFiler });
    }
  }

  render() {
    const { filters, selected, filtredProgects, progects } = this.state;

    return (
      <>
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={filtredProgects} />
      </>
    );
  }
}
