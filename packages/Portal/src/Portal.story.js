import React, { Component } from 'react';
import Portal from './Portal';
import { storiesOf } from '@storybook/react';
import { emotion } from '@leafygreen-ui/lib';
import { colors } from '@leafygreen-ui/theme';

const { css } = emotion;

const triggeredStyle = css`
  position: absolute;
  top: 10px;
  right: 20px;
  padding: 5px;
  background-color: ${colors.green[2]};
  color: ${colors.mongodb.white};
  text-align: right;
`;

class Control extends Component {
  state = { on: false };

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ on: !this.state.on })}
        >
          Toggle Portal
        </button>
        {this.state.on && (
          <Portal node={document.getElementById('root')}>
            <div className={triggeredStyle}>
              I have been portaled to the end of the DOM!
            </div>
          </Portal>
        )}
      </div>
    );
  }
}

storiesOf('Portal', module).add('Default', () => (
  <section className="storybook-container">
      <Control />
  </section>
));
