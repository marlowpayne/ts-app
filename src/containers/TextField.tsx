import React from 'react';
import PropTypes from 'prop-types';

const noop = () => null;

export interface Props {
  onSubmit: Function;
}

interface State {
  text: string;
}

export class TextField extends React.Component<Props, State> {
  mount: boolean;

  propTypes = {
    onSubmit: PropTypes.func
  };

  defaultProps = {
    onSubmit: noop
  };

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

  onChange = (e: React.ChangeEvent<HTMLInputElement>): void => this.setState({ text: e.target.value });

  onSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.onChange} />
        <button type="submit" onClick={this.onSubmit}>
          Change Name
        </button>
      </div>
    );
  }
}
