import InputDate from '../';
import {Component} from 'react';
import moment from 'moment';

global.componentHandler = {
    upgradeElement: sinon.stub(),
    downgradeElements: sinon.stub()
};

describe('The input date', () => {
    describe('when mounted with a valid value', () => {
        const now = new Date().toISOString();
        let reactComponent, domNode, inputNode;
        const onChangeSpy = sinon.spy();
        before(() => {
            reactComponent = TestUtils.renderIntoDocument(<InputDate onChange={onChangeSpy} value={now} />);
            domNode = ReactDOM.findDOMNode(reactComponent);
        });
        it('should render a node with data-focus attribute', () => {
            expect(reactComponent).to.exist;
            expect(reactComponent).to.be.an('object');
            expect(domNode.tagName).to.equal('DIV');
            expect(domNode.getAttribute('data-focus')).to.equal('input-date');
        });
        it('should hold the provided initial value', () => {
            expect(moment(reactComponent.getValue()).isSame(now, 'day')).to.be.true;
        });

        it('should display the provided date in the dropdown', () => {
            expect(moment(reactComponent.state.dropDownDate.toISOString()).isSame(now, 'day')).to.be.true;
        });
    });


    describe('when mounted with a disabled props', () => {
        const now = new Date().toISOString();
        let reactComponent, inputNode;
        const onChangeSpy = sinon.spy();
        before(() => {
            reactComponent = TestUtils.renderIntoDocument(<InputDate onChange={onChangeSpy} value={now} disabled={true} />);
            inputNode = ReactDOM.findDOMNode(reactComponent.refs.input.refs.htmlInput);
        });
        it('should render a node with disabled attribute', () => {
            expect(inputNode.hasAttribute('disabled')).to.be.true;
        });
    });

    describe('when mounted with a null value', () => {
        let renderedTest;
        const onChangeSpy = sinon.spy();
        before(() => {
            renderedTest = TestUtils.renderIntoDocument(<InputDate onChange={onChangeSpy} value={null} />);
        });

        it('should give a null value', () => {
            expect(renderedTest.getValue()).to.be.null;
        });

        it('should display today\'s date in the dropdown', () => {
            expect(moment().isSame(renderedTest.state.dropDownDate, 'day')).to.be.true;
        });

        it('should not display anything in the input', () => {
            expect(ReactDOM.findDOMNode(renderedTest.refs.input.refs.htmlInput).value).to.equal('');
        });

    });

    describe('when mounted with an invalid value', () => {
        let renderedTest;
        const onChangeSpy = sinon.spy();
        const invalidDateString = 'invalid date';
        before(() => {
            renderedTest = TestUtils.renderIntoDocument(<InputDate onChange={onChangeSpy} value={invalidDateString} />);
        });

        it('should display the invalid value in the input', () => {
            expect(ReactDOM.findDOMNode(renderedTest.refs.input.refs.htmlInput).value).to.equal(invalidDateString);
        });

        it('should give a null value', () => {
            expect(renderedTest.getValue()).to.be.null;
        });

        it('should display today\'s date in the dropdown', () => {
            expect(moment().isSame(renderedTest.state.dropDownDate, 'day')).to.be.true;
        });
    });

    describe('when the value given as a prop changes', () => {
        const now = new Date().toISOString();
        const past = new Date('01/10/1995').toISOString();
        let renderedTest;
        const onChangeSpy = sinon.spy();
        class TestComponent extends Component {
            constructor() {
                super();
                this.state = {
                    value: now
                };
            }

            render() {
                return <InputDate onChange={onChangeSpy} ref='date' value={this.state.value} />;
            }
        }

        before(done => {
            renderedTest = TestUtils.renderIntoDocument(<TestComponent />);
            renderedTest.setState({value: past}, done);
        });

        it('should change its internal value', () => {
            expect(moment(renderedTest.refs.date.getValue()).isSame(moment(past), 'day')).to.be.true;
        });
    });

    describe('when the user clears the input', () => {
        const now = new Date().toISOString();
        let renderedTest;
        const onChangeSpy = sinon.spy();
        before(() => {
            renderedTest = TestUtils.renderIntoDocument(<InputDate onChange={onChangeSpy} value={now} />);
            const input = ReactDOM.findDOMNode(renderedTest.refs.input.refs.htmlInput);
            TestUtils.Simulate.change(input, {target: {value: ''}});
        });
        it('should give a null value', () => {
            expect(renderedTest.getValue()).to.be.null;
        });
    });

    describe('when the user enters a valid input', () => {
        const validDateString = '02/03/2010';
        let renderedTest;
        class TestComponent extends Component {
            constructor() {
                super();
                this.state = {
                    value: null
                };
            }

            onDateChange = (value) => {
                this.setState({value});
            };

            render() {
                return <InputDate onChange={this.onDateChange} ref='date' value={this.state.value} />;
            }
        }
        before(() => {
            renderedTest = TestUtils.renderIntoDocument(<TestComponent />);
            const input = ReactDOM.findDOMNode(renderedTest.refs.date.refs.input.refs.htmlInput);
            TestUtils.Simulate.change(input, {target: {value: validDateString}});
            //TestUtils.Simulate.click(document);
        });
        it('should give the provided value', () => {
            expect(moment(renderedTest.refs.date.getValue()).isSame(moment(validDateString, 'MM/DD/YYYY').toISOString())).to.be.true;
        });
    });

    describe('when the user enters an invalid input', () => {
        const invalidDateString = 'Lol invalid';
        let renderedTest;
        class TestComponent extends Component {
            constructor() {
                super();
                this.state = {
                    value: null
                };
            }

            onDateChange = (value) => {
                this.setState({value});
            };

            render() {
                return <InputDate onChange={this.onDateChange} ref='date' value={this.state.value} />;
            }
        }
        before(() => {
            renderedTest = TestUtils.renderIntoDocument(<TestComponent />);
            const input = ReactDOM.findDOMNode(renderedTest.refs.date.refs.input.refs.htmlInput);
            TestUtils.Simulate.change(input, {target: {value: invalidDateString}});
        });
        it('should give a null value', () => {
            expect(renderedTest.refs.date.getValue()).to.be.null;
        });
        it('but still let the invalid value in the input', () => {
            expect(ReactDOM.findDOMNode(renderedTest.refs.date.refs.input.refs.htmlInput).value).to.equal(invalidDateString);
        });
    });
    describe.skip('when blurred with a valid date', () => {
        const validDate = (moment('10/10/2015')).toISOString();
        const onChangeSpy = sinon.spy();
        class TestComponent extends Component {
            render() {
                return <InputDate onChange={onChangeSpy} ref='date' value={validDate} />;
            }
        }
        let renderedTest;
        before(() => {
            renderedTest = TestUtils.renderIntoDocument(<TestComponent />);
            const input = ReactDOM.findDOMNode(renderedTest.refs.date.refs.input.refs.htmlInput);
            TestUtils.Simulate.blur(input);
        });
        it('should call the onChange prop with the corresponding ISOString', () => {
            expect(onChangeSpy).to.have.been.calledWith(validDate);
        });
    });
    describe('when a date is chosen in the date picker', () => {
        const validDate = (moment('10/10/2015')).toISOString();
        const onChangeSpy = sinon.spy();
        let renderedTest;
        before(done => {
            const onChange = cb => {
                return data => {
                    onChangeSpy(data);
                    cb();
                }
            };
            class TestComponent extends Component {
                render() {
                    return <InputDate onChange={onChange(done)} ref='date' value={validDate} />;
                }
            }
            renderedTest = TestUtils.renderIntoDocument(<TestComponent />);
            const input = ReactDOM.findDOMNode(renderedTest.refs.date.refs.input.refs.htmlInput);
            TestUtils.Simulate.focus(input);
            const firstDay = ReactDOM.findDOMNode(TestUtils.scryRenderedDOMComponentsWithClass(renderedTest, 'dp-day')[0]);
            TestUtils.Simulate.click(firstDay);
        });
        it('should call the onChange prop with the corresponding ISOString', () => {
            expect(onChangeSpy).to.have.been.calledWith((moment('09/27/2015')).toISOString());
        });
    });
});
