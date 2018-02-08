import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Icon } from 'semantic-ui-react';

import './App.css';
import MemberList from './components/MemberList';
import Graph from './components/Graph';

class App extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { visible } = this.state;

    return (
      <div className="app">
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            width="thin"
            visible={visible}
            icon="labeled"
            vertical
            inverted
          >
            <Menu.Item name="home">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item name="gamepad">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item name="camera">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Graph />
              <MemberList members={[{ image: 'cacat' }]} />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
