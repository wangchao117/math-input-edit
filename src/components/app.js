const React = require('react');

const {View} = require('../fake-react-native-web');
const {components} = require('../index');

const {Keypad, KeypadInput} = components;

class App extends React.Component {
    state = {
        keypadElement: null,
        value: "",
    };
    componentDidMount() {
      this.state.keypadElement.activate()
    }
    render() {
        return <View>
            <div
                style={{
                    width: '100%',
                    marginTop: 10,
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 300,
                    position: 'fixed',
                    bottom: '0',
                    left: '0',
                    right: '0'
                }}
            >
                <KeypadInput
                    value={this.state.value}
                    keypadElement={this.state.keypadElement}
                    onChange={(value, cb) => this.setState({value}, cb)}
                    onFocus={() => this.state.keypadElement.activate()}
                    onBlur={() => this.state.keypadElement.dismiss()}
                />
            </div>
            <Keypad
                onElementMounted={node => {
                    if (node && !this.state.keypadElement) {
                        this.setState({keypadElement: node});
                    }
                }}
            />
        </View>;
    }
}

module.exports = App;
