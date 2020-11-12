import React, { Component } from 'react';
import axios from 'axios';

const RootContext = React.createContext();

class RootProvider extends Component {
  state = {
    user: { },
    trends: [ ],
    selectedTrend: { },
  };

  componentDidMount() {
    this.getUser();
    this.getTrends();
  }

  getUser = () => {
    const url = window.location.hostname;
    axios.get(`http://${url}:1337/api/user`).then(({ data }) => {
      this.setState(() => {
        return {
          user: {
            name: data.name,
            username: data.screen_name,
            profileImage: data.profile_image_url,
          }
        };
      });
    });
  }

  getTrends = () => {
    const url = window.location.hostname;
    axios.get(`http://${url}:1337/api/trends`).then(({ data }) => {
      this.setState(() => {
        return { trends: data };
      });
    });
  }

  getTrend = (name) => {
    const trend = this.state.trends.find(item => item.name === name);
    return trend;
  };

  handleSelectedTrend = (name) => {
    const trend = this.getTrend(name);
    this.setState(() => {
      return { selectedTrend: trend };
    });
  };

  render() {
    return (
      <RootContext.Provider value={{
        ...this.state,
        handleSelectedTrend: this.handleSelectedTrend,
      }}>
        { this.props.children }
      </RootContext.Provider>
    );
  }
}

const RootConsumer = RootContext.Consumer;

export { RootProvider, RootConsumer };