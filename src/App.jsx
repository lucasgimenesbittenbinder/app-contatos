import React from "react";
import "./App.scss";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";

import API from "./api";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      orderBy: "",
      sorted: "asc",
      contacts: [],
    };
  }

  componentDidMount = () => {
    this.fetchContacts();
  };

  fetchContacts = () => {
    API.then((contacts) => {
      this.setState({
        contacts,
      });
    });
  };

  handleSearch = (event) => {
    event.preventDefault();

    this.setState({
      search: event.target.value,
    });
  };

  handleOrderBy = ({ orderSelected, sorted }) => {
    this.setState({
      orderBy: orderSelected,
      sorted,
    });
  };

  filterContacts = () => {
    const { search, contacts } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  sortFilteredContacts = (filterContacts) => {
    const { orderBy, sorted } = this.state;

    const functionSorted = {
      asc: (contactA, contactB) => {
        if (contactA[orderBy] > contactB[orderBy]) {
          return 1;
        } else if (contactA[orderBy] < contactB[orderBy]) {
          return -1;
        }
        return 0;
      },
      desc: (contactA, contactB) => {
        if (contactA[orderBy] < contactB[orderBy]) {
          return 1;
        } else if (contactA[orderBy] > contactB[orderBy]) {
          return -1;
        }
        return 0;
      },
    };
    return filterContacts.sort(functionSorted[sorted]);
  };

  render() {
    let filteredContacts = this.filterContacts();
    filteredContacts = this.sortFilteredContacts(filteredContacts);
    return (
      <React.Fragment>
        <Topbar />
        <Filters
          handleSearch={this.handleSearch}
          orderBy={this.handleOrderBy}
        />
        <Contacts>
          {filteredContacts.map((contact) => {
            return <Contact data={contact} key={contact.id} />;
          })}
        </Contacts>
      </React.Fragment>
    );
  }
}

export default App;
