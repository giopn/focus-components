const {SelectRadio} = FocusComponents.components.input;
const {Button} = FocusComponents.components;

const values = [
    {code: 'A', label: 'Value A'}, {code: 'B', label: 'Value B'}, {code: 'C', label: 'Value C'}
];

const SelectRadioSample = React.createClass({

    /**
    * Handle click action to get check value.
    */
    handleGetValueClick() {
        const value = this.refs.mySelectRadio.getValue();
        alert('Selected values ID: ' + value);
    },

    /**
    * Handle click action to get check value.
    */
    handleOnChange(newValue) {
        this.refs.selectRadioExample.setState({value: newValue});
        alert('Selected values ID: ' + newValue);
    },

    /**
    * Render the component.
    * @return {object} React node
    */
    render() {
        return (
            <div>
                <h3>Classic select radio</h3>
                <SelectRadio
                    value='B'
                    values={values} ref="mySelectRadio" />
                <br/>
                <Button onClick={this.handleGetValueClick} hasRipple={true} label='Selected value' color='primary' />
                <h3>OnChange event overload</h3>
                <SelectRadio
                    value='A'
                    values={values} onChange={this.handleOnChange} ref='selectRadioExample'/>
            </div>);
    }
});

module.exports = SelectRadioSample;
