import { Component } from "react";

export class Toolbar extends Component {
  render() {
    const { filters, selected, onSelectFilter } = this.props;
    console.log(selected);

    return (
      <div className="toolbar">
        {filters.map((item) => (
          <button
            onClick={() => onSelectFilter(item)}
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
