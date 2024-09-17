import { Component } from "react";

export class Toolbar extends Component {
  render() {
    const { filters, selected, onSelectFilter } = this.props;

    return (
      <div className="toolbar">
        {filters.map((item) => (
          <button
            onClick={() => onSelectFilter({selected})}
            key={item}
            className={item === selected ? "active" : ""}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
}
