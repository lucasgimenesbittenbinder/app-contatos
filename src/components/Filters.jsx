import React from "react";
import "./Filters.scss";

class Filters extends React.Component {
  constructor() {
    super();
    this.state = {
      orderSelected: "",
      sorted: "asc",
    };
  }

  hadleOrderBy(order) {
    const { orderBy } = this.props;
    const { orderSelected, sorted } = this.state;
    let state = {
      orderSelected: order,
      sorted: "asc",
    };

    if (order === orderSelected) {
      if (sorted === "asc") {
        state = {
          orderSelected: order,
          sorted: "desc",
        };
      } else {
        state = {
          orderSelected: "",
          sorted: "asc",
        };
      }
    }
    this.setState(state);
    orderBy(state);
  }

  render() {
    const { handleSearch } = this.props;
    const { orderSelected, sorted } = this.state;
    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              onChange={handleSearch}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <button
            className={`filters__item ${
              orderSelected === "name" ? "is-selected" : ""
            }`}
            onClick={() => this.hadleOrderBy("name")}
          >
            Nome{" "}
            <i
              className={`fas fa-sort-down ${sorted === "asc" ? "up" : "down"}`}
            />
          </button>

          <button
            className={`filters__item ${
              orderSelected === "country" ? "is-selected" : ""
            }`}
            onClick={() => this.hadleOrderBy("country")}
          >
            País{" "}
            <i
              className={`fas fa-sort-down ${sorted === "asc" ? "up" : "down"}`}
            />
          </button>

          <button
            className={`filters__item ${
              orderSelected === "company" ? "is-selected" : ""
            }`}
            onClick={() => this.hadleOrderBy("company")}
          >
            Empresa{" "}
            <i
              className={`fas fa-sort-down ${sorted === "asc" ? "up" : "down"}`}
            />
          </button>

          <button
            className={`filters__item ${
              orderSelected === "department" ? "is-selected" : ""
            }`}
            onClick={() => this.hadleOrderBy("department")}
          >
            Departamento{" "}
            <i
              className={`fas fa-sort-down ${sorted === "asc" ? "up" : "down"}`}
            />
          </button>

          <button
            className={`filters__item ${
              orderSelected === "admissionDate" ? "is-selected" : ""
            }`}
            onClick={() => this.hadleOrderBy("admissionDate")}
          >
            Data de admissão{" "}
            <i
              className={`fas fa-sort-down ${sorted === "asc" ? "up" : "down"}`}
            />
          </button>
        </section>
      </div>
    );
  }
}

export default Filters;
