import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const noop = () => null;

export interface Props {
  onSubmit: Function;
}

interface State {
  text: string;
}

const Wrapper = styled.div``;

export class TextField extends React.Component<Props, State> {
  static propTypes = {
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    onSubmit: noop
  };

  mount: boolean;

  constructor(props: Props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  componentDidMount() {
    this.mount = true;
  }

  componentWillUnmount() {
    this.mount = false;
  }

  submitCurrentText = (): void => {
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>): void => this.setState({ text: e.target.value });

  onSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => this.submitCurrentText();

  onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      this.submitCurrentText();
    }
  }

  render() {
    return (
      <Wrapper>
        <input type="text" value={this.state.text} onChange={this.onChange} onKeyUp={this.onKeyUp} />
        <button type="submit" onClick={this.onSubmit}>
          Change Name
        </button>
      </Wrapper>
    );
  }
}
