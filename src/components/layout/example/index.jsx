const {Layout, MenuLeft} = FocusComponents.components;
const {dispatcher} = Focus;
const setHeader = Focus.application.setHeader;

const CartridgeContent = React.createClass({
    render() {
        return (<div>Expanded header</div>);
    }
});

const Summary = React.createClass({
    render() {
        return (<div>Summary</div>);
    }
});
const BarContentRight = React.createClass({
    render() {
        return (<div>BAR RIGHT</div>);
    }
});
const BarContentLeft = React.createClass({
    render() {
        return (<div>BAR LEFT</div>);
    }
});
const Test = React.createClass({
    render() {
        return (<div>test</div>);
    }
});
const Footer = React.createClass({
    render() {
        return (<div>&copy;KLEEGROUP 2015 - FOCUS Showcase - Layout</div>);
    }
});

//Simple function to update components in the bar.
function updateComponents(cartridgeConf) {
    const {cartridge: cartridgeComponent, summary: summaryComponent, actions: actions, barLeft: barContentLeftComponent, barRight: barContentRightComponent} = cartridgeConf;
    dispatcher.handleViewAction({
        data: {
            cartridgeComponent,
            summaryComponent,
            actions,
            barContentLeftComponent,
            barContentRightComponent,
            canDeploy: true
        },
        type: 'update'
    });
}

const cartridgeConf = {
    cartridge: {component: CartridgeContent, props: {}},
    summary: {component: Summary, props: {}},
    actions: {
        primary: [{label: 'Action 1', icon: 'alarm_on', action: () => {console.log('click !')}}, {label: 'Action 2', icon: 'build', action: () => {console.log('click !')}}],
        secondary: [{label: 'Action 3', icon: 'print', action: () => {console.log('click !')}}, {label: 'Action 4', icon: 'print', action: () => {console.log('click !')}}, {label: 'Action 5', icon: 'print', action: () => {console.log('click !')}}]
    },
    barLeft: {component: BarContentLeft, props: {}},
    barRight: {component: BarContentRight, props: {}}
};

//Add a defer in order to inject the props after the component is mounted
_.defer(() => {
    setHeader(cartridgeConf);
});

const LayoutExample = React.createClass({
    render() {
        return (
            <Layout MenuLeft={MenuLeft} Footer={Footer}>
                <h3>Welcome on the layout component</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue dui ac mollis blandit. Nunc non consectetur mi. Curabitur et auctor nisl, ac dictum neque. Cras vitae varius enim. Quisque eleifend consequat dui. Ut nisi eros, ultricies nec erat eget, suscipit convallis tortor. Sed vel finibus ligula. Fusce facilisis risus sapien, ac ornare ipsum ultrices eu. Nullam pellentesque sem tempor ipsum pellentesque sodales. Nam sit amet cursus tortor. Duis condimentum mi at mi elementum scelerisque eget ac tortor. Nunc enim enim, vestibulum et volutpat rhoncus, scelerisque vel enim. Praesent quis est consectetur massa dictum euismod. Etiam ullamcorper efficitur lorem, eget vehicula justo venenatis euismod. Curabitur orci ex, sollicitudin at ante a, ultrices iaculis est. Quisque maximus tellus eget nisi bibendum, eu dapibus dui lobortis.</p>
                <p>Sed faucibus nisl vel rhoncus commodo. Vestibulum maximus nisi eu tortor molestie, quis blandit eros sodales. Duis suscipit, nisl sit amet malesuada pharetra, lacus risus aliquet augue, eget imperdiet sem eros non risus. Pellentesque imperdiet ligula eu ante condimentum, eget eleifend elit consequat. Aliquam a ex eget mi lobortis iaculis. Curabitur ut sagittis magna. Praesent quis odio augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ante id lacus gravida venenatis. Pellentesque quis odio a eros ultrices tempus non vel ex. Sed in rutrum diam. Proin vehicula, enim id elementum pharetra, purus magna tempor nisl, sed scelerisque orci lorem sit amet justo. Vestibulum eu volutpat quam. Nunc finibus rutrum iaculis. Aliquam erat volutpat. Nulla facilisi.</p>
                <p>Fusce ex sapien, ultricies sollicitudin gravida vitae, ultrices ut ex. Morbi luctus tempus nisi. Maecenas at dolor ut purus auctor mattis eget in nunc. Nunc malesuada imperdiet venenatis. Duis varius purus odio, in venenatis enim laoreet id. Quisque eu turpis vestibulum, tincidunt nisi et, scelerisque nisi. Quisque pulvinar leo vitae ante feugiat vestibulum. Duis gravida vestibulum neque, a efficitur dui pulvinar ut. Vestibulum porttitor libero a mauris commodo, at sodales nisi elementum. Maecenas eleifend tristique quam, a pretium turpis posuere vitae. Maecenas quis fringilla lectus, ut mattis tellus. Praesent blandit tortor magna, ac fringilla orci bibendum a. Vivamus id auctor felis.</p>
                <p>Nulla lobortis odio ut pharetra sagittis. Ut non finibus massa. Sed tempor tortor eu nibh efficitur feugiat. Proin congue ex ante, a ullamcorper erat sollicitudin sit amet. Vestibulum tempus turpis non justo elementum venenatis. Aenean pretium porta nisi in aliquam. Maecenas ac velit eget purus cursus laoreet vel eu nulla. Integer porta facilisis erat, at viverra nunc vulputate non. Sed neque ex, placerat at leo quis, scelerisque lacinia velit. Cras pharetra vitae nisi ac condimentum. Praesent rutrum dui sit amet lorem mattis sollicitudin.</p>
                <p>Maecenas ut pellentesque ante, tincidunt luctus enim. Fusce vulputate justo felis, vehicula vehicula augue sodales sed. Vivamus tempor tristique turpis, ac interdum eros iaculis non. Aliquam eros purus, pulvinar vehicula odio sed, sollicitudin maximus dui. Donec consectetur est eu sem fermentum varius. Nulla facilisi. Phasellus suscipit lacus at ullamcorper sagittis. Nunc congue sit amet tortor non ultricies. Ut congue tortor ac porttitor tincidunt. Nam facilisis nulla quis massa congue, sed mattis lorem tristique. Vestibulum porta placerat metus, vel mattis dui. Mauris pellentesque mauris eu volutpat tincidunt. Mauris commodo, felis eget ultricies laoreet, nulla eros mattis nisl, ut tempor mi sem tempor dolor. Maecenas vel felis ut nibh suscipit tempus a et nisi.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue dui ac mollis blandit. Nunc non consectetur mi. Curabitur et auctor nisl, ac dictum neque. Cras vitae varius enim. Quisque eleifend consequat dui. Ut nisi eros, ultricies nec erat eget, suscipit convallis tortor. Sed vel finibus ligula. Fusce facilisis risus sapien, ac ornare ipsum ultrices eu. Nullam pellentesque sem tempor ipsum pellentesque sodales. Nam sit amet cursus tortor. Duis condimentum mi at mi elementum scelerisque eget ac tortor. Nunc enim enim, vestibulum et volutpat rhoncus, scelerisque vel enim. Praesent quis est consectetur massa dictum euismod. Etiam ullamcorper efficitur lorem, eget vehicula justo venenatis euismod. Curabitur orci ex, sollicitudin at ante a, ultrices iaculis est. Quisque maximus tellus eget nisi bibendum, eu dapibus dui lobortis.</p>
                <p>Sed faucibus nisl vel rhoncus commodo. Vestibulum maximus nisi eu tortor molestie, quis blandit eros sodales. Duis suscipit, nisl sit amet malesuada pharetra, lacus risus aliquet augue, eget imperdiet sem eros non risus. Pellentesque imperdiet ligula eu ante condimentum, eget eleifend elit consequat. Aliquam a ex eget mi lobortis iaculis. Curabitur ut sagittis magna. Praesent quis odio augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ante id lacus gravida venenatis. Pellentesque quis odio a eros ultrices tempus non vel ex. Sed in rutrum diam. Proin vehicula, enim id elementum pharetra, purus magna tempor nisl, sed scelerisque orci lorem sit amet justo. Vestibulum eu volutpat quam. Nunc finibus rutrum iaculis. Aliquam erat volutpat. Nulla facilisi.</p>
                <p>Fusce ex sapien, ultricies sollicitudin gravida vitae, ultrices ut ex. Morbi luctus tempus nisi. Maecenas at dolor ut purus auctor mattis eget in nunc. Nunc malesuada imperdiet venenatis. Duis varius purus odio, in venenatis enim laoreet id. Quisque eu turpis vestibulum, tincidunt nisi et, scelerisque nisi. Quisque pulvinar leo vitae ante feugiat vestibulum. Duis gravida vestibulum neque, a efficitur dui pulvinar ut. Vestibulum porttitor libero a mauris commodo, at sodales nisi elementum. Maecenas eleifend tristique quam, a pretium turpis posuere vitae. Maecenas quis fringilla lectus, ut mattis tellus. Praesent blandit tortor magna, ac fringilla orci bibendum a. Vivamus id auctor felis.</p>
                <p>Nulla lobortis odio ut pharetra sagittis. Ut non finibus massa. Sed tempor tortor eu nibh efficitur feugiat. Proin congue ex ante, a ullamcorper erat sollicitudin sit amet. Vestibulum tempus turpis non justo elementum venenatis. Aenean pretium porta nisi in aliquam. Maecenas ac velit eget purus cursus laoreet vel eu nulla. Integer porta facilisis erat, at viverra nunc vulputate non. Sed neque ex, placerat at leo quis, scelerisque lacinia velit. Cras pharetra vitae nisi ac condimentum. Praesent rutrum dui sit amet lorem mattis sollicitudin.</p>
                <p>Maecenas ut pellentesque ante, tincidunt luctus enim. Fusce vulputate justo felis, vehicula vehicula augue sodales sed. Vivamus tempor tristique turpis, ac interdum eros iaculis non. Aliquam eros purus, pulvinar vehicula odio sed, sollicitudin maximus dui. Donec consectetur est eu sem fermentum varius. Nulla facilisi. Phasellus suscipit lacus at ullamcorper sagittis. Nunc congue sit amet tortor non ultricies. Ut congue tortor ac porttitor tincidunt. Nam facilisis nulla quis massa congue, sed mattis lorem tristique. Vestibulum porta placerat metus, vel mattis dui. Mauris pellentesque mauris eu volutpat tincidunt. Mauris commodo, felis eget ultricies laoreet, nulla eros mattis nisl, ut tempor mi sem tempor dolor. Maecenas vel felis ut nibh suscipit tempus a et nisi.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue dui ac mollis blandit. Nunc non consectetur mi. Curabitur et auctor nisl, ac dictum neque. Cras vitae varius enim. Quisque eleifend consequat dui. Ut nisi eros, ultricies nec erat eget, suscipit convallis tortor. Sed vel finibus ligula. Fusce facilisis risus sapien, ac ornare ipsum ultrices eu. Nullam pellentesque sem tempor ipsum pellentesque sodales. Nam sit amet cursus tortor. Duis condimentum mi at mi elementum scelerisque eget ac tortor. Nunc enim enim, vestibulum et volutpat rhoncus, scelerisque vel enim. Praesent quis est consectetur massa dictum euismod. Etiam ullamcorper efficitur lorem, eget vehicula justo venenatis euismod. Curabitur orci ex, sollicitudin at ante a, ultrices iaculis est. Quisque maximus tellus eget nisi bibendum, eu dapibus dui lobortis.</p>
                <p>Sed faucibus nisl vel rhoncus commodo. Vestibulum maximus nisi eu tortor molestie, quis blandit eros sodales. Duis suscipit, nisl sit amet malesuada pharetra, lacus risus aliquet augue, eget imperdiet sem eros non risus. Pellentesque imperdiet ligula eu ante condimentum, eget eleifend elit consequat. Aliquam a ex eget mi lobortis iaculis. Curabitur ut sagittis magna. Praesent quis odio augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ante id lacus gravida venenatis. Pellentesque quis odio a eros ultrices tempus non vel ex. Sed in rutrum diam. Proin vehicula, enim id elementum pharetra, purus magna tempor nisl, sed scelerisque orci lorem sit amet justo. Vestibulum eu volutpat quam. Nunc finibus rutrum iaculis. Aliquam erat volutpat. Nulla facilisi.</p>
                <p>Fusce ex sapien, ultricies sollicitudin gravida vitae, ultrices ut ex. Morbi luctus tempus nisi. Maecenas at dolor ut purus auctor mattis eget in nunc. Nunc malesuada imperdiet venenatis. Duis varius purus odio, in venenatis enim laoreet id. Quisque eu turpis vestibulum, tincidunt nisi et, scelerisque nisi. Quisque pulvinar leo vitae ante feugiat vestibulum. Duis gravida vestibulum neque, a efficitur dui pulvinar ut. Vestibulum porttitor libero a mauris commodo, at sodales nisi elementum. Maecenas eleifend tristique quam, a pretium turpis posuere vitae. Maecenas quis fringilla lectus, ut mattis tellus. Praesent blandit tortor magna, ac fringilla orci bibendum a. Vivamus id auctor felis.</p>
                <p>Nulla lobortis odio ut pharetra sagittis. Ut non finibus massa. Sed tempor tortor eu nibh efficitur feugiat. Proin congue ex ante, a ullamcorper erat sollicitudin sit amet. Vestibulum tempus turpis non justo elementum venenatis. Aenean pretium porta nisi in aliquam. Maecenas ac velit eget purus cursus laoreet vel eu nulla. Integer porta facilisis erat, at viverra nunc vulputate non. Sed neque ex, placerat at leo quis, scelerisque lacinia velit. Cras pharetra vitae nisi ac condimentum. Praesent rutrum dui sit amet lorem mattis sollicitudin.</p>
                <p>Maecenas ut pellentesque ante, tincidunt luctus enim. Fusce vulputate justo felis, vehicula vehicula augue sodales sed. Vivamus tempor tristique turpis, ac interdum eros iaculis non. Aliquam eros purus, pulvinar vehicula odio sed, sollicitudin maximus dui. Donec consectetur est eu sem fermentum varius. Nulla facilisi. Phasellus suscipit lacus at ullamcorper sagittis. Nunc congue sit amet tortor non ultricies. Ut congue tortor ac porttitor tincidunt. Nam facilisis nulla quis massa congue, sed mattis lorem tristique. Vestibulum porta placerat metus, vel mattis dui. Mauris pellentesque mauris eu volutpat tincidunt. Mauris commodo, felis eget ultricies laoreet, nulla eros mattis nisl, ut tempor mi sem tempor dolor. Maecenas vel felis ut nibh suscipit tempus a et nisi.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue dui ac mollis blandit. Nunc non consectetur mi. Curabitur et auctor nisl, ac dictum neque. Cras vitae varius enim. Quisque eleifend consequat dui. Ut nisi eros, ultricies nec erat eget, suscipit convallis tortor. Sed vel finibus ligula. Fusce facilisis risus sapien, ac ornare ipsum ultrices eu. Nullam pellentesque sem tempor ipsum pellentesque sodales. Nam sit amet cursus tortor. Duis condimentum mi at mi elementum scelerisque eget ac tortor. Nunc enim enim, vestibulum et volutpat rhoncus, scelerisque vel enim. Praesent quis est consectetur massa dictum euismod. Etiam ullamcorper efficitur lorem, eget vehicula justo venenatis euismod. Curabitur orci ex, sollicitudin at ante a, ultrices iaculis est. Quisque maximus tellus eget nisi bibendum, eu dapibus dui lobortis.</p>
                <p>Sed faucibus nisl vel rhoncus commodo. Vestibulum maximus nisi eu tortor molestie, quis blandit eros sodales. Duis suscipit, nisl sit amet malesuada pharetra, lacus risus aliquet augue, eget imperdiet sem eros non risus. Pellentesque imperdiet ligula eu ante condimentum, eget eleifend elit consequat. Aliquam a ex eget mi lobortis iaculis. Curabitur ut sagittis magna. Praesent quis odio augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ante id lacus gravida venenatis. Pellentesque quis odio a eros ultrices tempus non vel ex. Sed in rutrum diam. Proin vehicula, enim id elementum pharetra, purus magna tempor nisl, sed scelerisque orci lorem sit amet justo. Vestibulum eu volutpat quam. Nunc finibus rutrum iaculis. Aliquam erat volutpat. Nulla facilisi.</p>
                <p>Fusce ex sapien, ultricies sollicitudin gravida vitae, ultrices ut ex. Morbi luctus tempus nisi. Maecenas at dolor ut purus auctor mattis eget in nunc. Nunc malesuada imperdiet venenatis. Duis varius purus odio, in venenatis enim laoreet id. Quisque eu turpis vestibulum, tincidunt nisi et, scelerisque nisi. Quisque pulvinar leo vitae ante feugiat vestibulum. Duis gravida vestibulum neque, a efficitur dui pulvinar ut. Vestibulum porttitor libero a mauris commodo, at sodales nisi elementum. Maecenas eleifend tristique quam, a pretium turpis posuere vitae. Maecenas quis fringilla lectus, ut mattis tellus. Praesent blandit tortor magna, ac fringilla orci bibendum a. Vivamus id auctor felis.</p>
                <p>Nulla lobortis odio ut pharetra sagittis. Ut non finibus massa. Sed tempor tortor eu nibh efficitur feugiat. Proin congue ex ante, a ullamcorper erat sollicitudin sit amet. Vestibulum tempus turpis non justo elementum venenatis. Aenean pretium porta nisi in aliquam. Maecenas ac velit eget purus cursus laoreet vel eu nulla. Integer porta facilisis erat, at viverra nunc vulputate non. Sed neque ex, placerat at leo quis, scelerisque lacinia velit. Cras pharetra vitae nisi ac condimentum. Praesent rutrum dui sit amet lorem mattis sollicitudin.</p>
                <p>Maecenas ut pellentesque ante, tincidunt luctus enim. Fusce vulputate justo felis, vehicula vehicula augue sodales sed. Vivamus tempor tristique turpis, ac interdum eros iaculis non. Aliquam eros purus, pulvinar vehicula odio sed, sollicitudin maximus dui. Donec consectetur est eu sem fermentum varius. Nulla facilisi. Phasellus suscipit lacus at ullamcorper sagittis. Nunc congue sit amet tortor non ultricies. Ut congue tortor ac porttitor tincidunt. Nam facilisis nulla quis massa congue, sed mattis lorem tristique. Vestibulum porta placerat metus, vel mattis dui. Mauris pellentesque mauris eu volutpat tincidunt. Mauris commodo, felis eget ultricies laoreet, nulla eros mattis nisl, ut tempor mi sem tempor dolor. Maecenas vel felis ut nibh suscipit tempus a et nisi.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue dui ac mollis blandit. Nunc non consectetur mi. Curabitur et auctor nisl, ac dictum neque. Cras vitae varius enim. Quisque eleifend consequat dui. Ut nisi eros, ultricies nec erat eget, suscipit convallis tortor. Sed vel finibus ligula. Fusce facilisis risus sapien, ac ornare ipsum ultrices eu. Nullam pellentesque sem tempor ipsum pellentesque sodales. Nam sit amet cursus tortor. Duis condimentum mi at mi elementum scelerisque eget ac tortor. Nunc enim enim, vestibulum et volutpat rhoncus, scelerisque vel enim. Praesent quis est consectetur massa dictum euismod. Etiam ullamcorper efficitur lorem, eget vehicula justo venenatis euismod. Curabitur orci ex, sollicitudin at ante a, ultrices iaculis est. Quisque maximus tellus eget nisi bibendum, eu dapibus dui lobortis.</p>
                <p>Sed faucibus nisl vel rhoncus commodo. Vestibulum maximus nisi eu tortor molestie, quis blandit eros sodales. Duis suscipit, nisl sit amet malesuada pharetra, lacus risus aliquet augue, eget imperdiet sem eros non risus. Pellentesque imperdiet ligula eu ante condimentum, eget eleifend elit consequat. Aliquam a ex eget mi lobortis iaculis. Curabitur ut sagittis magna. Praesent quis odio augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ante id lacus gravida venenatis. Pellentesque quis odio a eros ultrices tempus non vel ex. Sed in rutrum diam. Proin vehicula, enim id elementum pharetra, purus magna tempor nisl, sed scelerisque orci lorem sit amet justo. Vestibulum eu volutpat quam. Nunc finibus rutrum iaculis. Aliquam erat volutpat. Nulla facilisi.</p>
                <p>Fusce ex sapien, ultricies sollicitudin gravida vitae, ultrices ut ex. Morbi luctus tempus nisi. Maecenas at dolor ut purus auctor mattis eget in nunc. Nunc malesuada imperdiet venenatis. Duis varius purus odio, in venenatis enim laoreet id. Quisque eu turpis vestibulum, tincidunt nisi et, scelerisque nisi. Quisque pulvinar leo vitae ante feugiat vestibulum. Duis gravida vestibulum neque, a efficitur dui pulvinar ut. Vestibulum porttitor libero a mauris commodo, at sodales nisi elementum. Maecenas eleifend tristique quam, a pretium turpis posuere vitae. Maecenas quis fringilla lectus, ut mattis tellus. Praesent blandit tortor magna, ac fringilla orci bibendum a. Vivamus id auctor felis.</p>
                <p>Nulla lobortis odio ut pharetra sagittis. Ut non finibus massa. Sed tempor tortor eu nibh efficitur feugiat. Proin congue ex ante, a ullamcorper erat sollicitudin sit amet. Vestibulum tempus turpis non justo elementum venenatis. Aenean pretium porta nisi in aliquam. Maecenas ac velit eget purus cursus laoreet vel eu nulla. Integer porta facilisis erat, at viverra nunc vulputate non. Sed neque ex, placerat at leo quis, scelerisque lacinia velit. Cras pharetra vitae nisi ac condimentum. Praesent rutrum dui sit amet lorem mattis sollicitudin.</p>
                <p>Maecenas ut pellentesque ante, tincidunt luctus enim. Fusce vulputate justo felis, vehicula vehicula augue sodales sed. Vivamus tempor tristique turpis, ac interdum eros iaculis non. Aliquam eros purus, pulvinar vehicula odio sed, sollicitudin maximus dui. Donec consectetur est eu sem fermentum varius. Nulla facilisi. Phasellus suscipit lacus at ullamcorper sagittis. Nunc congue sit amet tortor non ultricies. Ut congue tortor ac porttitor tincidunt. Nam facilisis nulla quis massa congue, sed mattis lorem tristique. Vestibulum porta placerat metus, vel mattis dui. Mauris pellentesque mauris eu volutpat tincidunt. Mauris commodo, felis eget ultricies laoreet, nulla eros mattis nisl, ut tempor mi sem tempor dolor. Maecenas vel felis ut nibh suscipit tempus a et nisi.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue dui ac mollis blandit. Nunc non consectetur mi. Curabitur et auctor nisl, ac dictum neque. Cras vitae varius enim. Quisque eleifend consequat dui. Ut nisi eros, ultricies nec erat eget, suscipit convallis tortor. Sed vel finibus ligula. Fusce facilisis risus sapien, ac ornare ipsum ultrices eu. Nullam pellentesque sem tempor ipsum pellentesque sodales. Nam sit amet cursus tortor. Duis condimentum mi at mi elementum scelerisque eget ac tortor. Nunc enim enim, vestibulum et volutpat rhoncus, scelerisque vel enim. Praesent quis est consectetur massa dictum euismod. Etiam ullamcorper efficitur lorem, eget vehicula justo venenatis euismod. Curabitur orci ex, sollicitudin at ante a, ultrices iaculis est. Quisque maximus tellus eget nisi bibendum, eu dapibus dui lobortis.</p>
                <p>Sed faucibus nisl vel rhoncus commodo. Vestibulum maximus nisi eu tortor molestie, quis blandit eros sodales. Duis suscipit, nisl sit amet malesuada pharetra, lacus risus aliquet augue, eget imperdiet sem eros non risus. Pellentesque imperdiet ligula eu ante condimentum, eget eleifend elit consequat. Aliquam a ex eget mi lobortis iaculis. Curabitur ut sagittis magna. Praesent quis odio augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ante id lacus gravida venenatis. Pellentesque quis odio a eros ultrices tempus non vel ex. Sed in rutrum diam. Proin vehicula, enim id elementum pharetra, purus magna tempor nisl, sed scelerisque orci lorem sit amet justo. Vestibulum eu volutpat quam. Nunc finibus rutrum iaculis. Aliquam erat volutpat. Nulla facilisi.</p>
                <p>Fusce ex sapien, ultricies sollicitudin gravida vitae, ultrices ut ex. Morbi luctus tempus nisi. Maecenas at dolor ut purus auctor mattis eget in nunc. Nunc malesuada imperdiet venenatis. Duis varius purus odio, in venenatis enim laoreet id. Quisque eu turpis vestibulum, tincidunt nisi et, scelerisque nisi. Quisque pulvinar leo vitae ante feugiat vestibulum. Duis gravida vestibulum neque, a efficitur dui pulvinar ut. Vestibulum porttitor libero a mauris commodo, at sodales nisi elementum. Maecenas eleifend tristique quam, a pretium turpis posuere vitae. Maecenas quis fringilla lectus, ut mattis tellus. Praesent blandit tortor magna, ac fringilla orci bibendum a. Vivamus id auctor felis.</p>
                <p>Nulla lobortis odio ut pharetra sagittis. Ut non finibus massa. Sed tempor tortor eu nibh efficitur feugiat. Proin congue ex ante, a ullamcorper erat sollicitudin sit amet. Vestibulum tempus turpis non justo elementum venenatis. Aenean pretium porta nisi in aliquam. Maecenas ac velit eget purus cursus laoreet vel eu nulla. Integer porta facilisis erat, at viverra nunc vulputate non. Sed neque ex, placerat at leo quis, scelerisque lacinia velit. Cras pharetra vitae nisi ac condimentum. Praesent rutrum dui sit amet lorem mattis sollicitudin.</p>
                <p>Maecenas ut pellentesque ante, tincidunt luctus enim. Fusce vulputate justo felis, vehicula vehicula augue sodales sed. Vivamus tempor tristique turpis, ac interdum eros iaculis non. Aliquam eros purus, pulvinar vehicula odio sed, sollicitudin maximus dui. Donec consectetur est eu sem fermentum varius. Nulla facilisi. Phasellus suscipit lacus at ullamcorper sagittis. Nunc congue sit amet tortor non ultricies. Ut congue tortor ac porttitor tincidunt. Nam facilisis nulla quis massa congue, sed mattis lorem tristique. Vestibulum porta placerat metus, vel mattis dui. Mauris pellentesque mauris eu volutpat tincidunt. Mauris commodo, felis eget ultricies laoreet, nulla eros mattis nisl, ut tempor mi sem tempor dolor. Maecenas vel felis ut nibh suscipit tempus a et nisi.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue dui ac mollis blandit. Nunc non consectetur mi. Curabitur et auctor nisl, ac dictum neque. Cras vitae varius enim. Quisque eleifend consequat dui. Ut nisi eros, ultricies nec erat eget, suscipit convallis tortor. Sed vel finibus ligula. Fusce facilisis risus sapien, ac ornare ipsum ultrices eu. Nullam pellentesque sem tempor ipsum pellentesque sodales. Nam sit amet cursus tortor. Duis condimentum mi at mi elementum scelerisque eget ac tortor. Nunc enim enim, vestibulum et volutpat rhoncus, scelerisque vel enim. Praesent quis est consectetur massa dictum euismod. Etiam ullamcorper efficitur lorem, eget vehicula justo venenatis euismod. Curabitur orci ex, sollicitudin at ante a, ultrices iaculis est. Quisque maximus tellus eget nisi bibendum, eu dapibus dui lobortis.</p>
                <p>Sed faucibus nisl vel rhoncus commodo. Vestibulum maximus nisi eu tortor molestie, quis blandit eros sodales. Duis suscipit, nisl sit amet malesuada pharetra, lacus risus aliquet augue, eget imperdiet sem eros non risus. Pellentesque imperdiet ligula eu ante condimentum, eget eleifend elit consequat. Aliquam a ex eget mi lobortis iaculis. Curabitur ut sagittis magna. Praesent quis odio augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ante id lacus gravida venenatis. Pellentesque quis odio a eros ultrices tempus non vel ex. Sed in rutrum diam. Proin vehicula, enim id elementum pharetra, purus magna tempor nisl, sed scelerisque orci lorem sit amet justo. Vestibulum eu volutpat quam. Nunc finibus rutrum iaculis. Aliquam erat volutpat. Nulla facilisi.</p>
                <p>Fusce ex sapien, ultricies sollicitudin gravida vitae, ultrices ut ex. Morbi luctus tempus nisi. Maecenas at dolor ut purus auctor mattis eget in nunc. Nunc malesuada imperdiet venenatis. Duis varius purus odio, in venenatis enim laoreet id. Quisque eu turpis vestibulum, tincidunt nisi et, scelerisque nisi. Quisque pulvinar leo vitae ante feugiat vestibulum. Duis gravida vestibulum neque, a efficitur dui pulvinar ut. Vestibulum porttitor libero a mauris commodo, at sodales nisi elementum. Maecenas eleifend tristique quam, a pretium turpis posuere vitae. Maecenas quis fringilla lectus, ut mattis tellus. Praesent blandit tortor magna, ac fringilla orci bibendum a. Vivamus id auctor felis.</p>
                <p>Nulla lobortis odio ut pharetra sagittis. Ut non finibus massa. Sed tempor tortor eu nibh efficitur feugiat. Proin congue ex ante, a ullamcorper erat sollicitudin sit amet. Vestibulum tempus turpis non justo elementum venenatis. Aenean pretium porta nisi in aliquam. Maecenas ac velit eget purus cursus laoreet vel eu nulla. Integer porta facilisis erat, at viverra nunc vulputate non. Sed neque ex, placerat at leo quis, scelerisque lacinia velit. Cras pharetra vitae nisi ac condimentum. Praesent rutrum dui sit amet lorem mattis sollicitudin.</p>
                <p>Maecenas ut pellentesque ante, tincidunt luctus enim. Fusce vulputate justo felis, vehicula vehicula augue sodales sed. Vivamus tempor tristique turpis, ac interdum eros iaculis non. Aliquam eros purus, pulvinar vehicula odio sed, sollicitudin maximus dui. Donec consectetur est eu sem fermentum varius. Nulla facilisi. Phasellus suscipit lacus at ullamcorper sagittis. Nunc congue sit amet tortor non ultricies. Ut congue tortor ac porttitor tincidunt. Nam facilisis nulla quis massa congue, sed mattis lorem tristique. Vestibulum porta placerat metus, vel mattis dui. Mauris pellentesque mauris eu volutpat tincidunt. Mauris commodo, felis eget ultricies laoreet, nulla eros mattis nisl, ut tempor mi sem tempor dolor. Maecenas vel felis ut nibh suscipit tempus a et nisi.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue dui ac mollis blandit. Nunc non consectetur mi. Curabitur et auctor nisl, ac dictum neque. Cras vitae varius enim. Quisque eleifend consequat dui. Ut nisi eros, ultricies nec erat eget, suscipit convallis tortor. Sed vel finibus ligula. Fusce facilisis risus sapien, ac ornare ipsum ultrices eu. Nullam pellentesque sem tempor ipsum pellentesque sodales. Nam sit amet cursus tortor. Duis condimentum mi at mi elementum scelerisque eget ac tortor. Nunc enim enim, vestibulum et volutpat rhoncus, scelerisque vel enim. Praesent quis est consectetur massa dictum euismod. Etiam ullamcorper efficitur lorem, eget vehicula justo venenatis euismod. Curabitur orci ex, sollicitudin at ante a, ultrices iaculis est. Quisque maximus tellus eget nisi bibendum, eu dapibus dui lobortis.</p>
                <p>Sed faucibus nisl vel rhoncus commodo. Vestibulum maximus nisi eu tortor molestie, quis blandit eros sodales. Duis suscipit, nisl sit amet malesuada pharetra, lacus risus aliquet augue, eget imperdiet sem eros non risus. Pellentesque imperdiet ligula eu ante condimentum, eget eleifend elit consequat. Aliquam a ex eget mi lobortis iaculis. Curabitur ut sagittis magna. Praesent quis odio augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ante id lacus gravida venenatis. Pellentesque quis odio a eros ultrices tempus non vel ex. Sed in rutrum diam. Proin vehicula, enim id elementum pharetra, purus magna tempor nisl, sed scelerisque orci lorem sit amet justo. Vestibulum eu volutpat quam. Nunc finibus rutrum iaculis. Aliquam erat volutpat. Nulla facilisi.</p>
                <p>Fusce ex sapien, ultricies sollicitudin gravida vitae, ultrices ut ex. Morbi luctus tempus nisi. Maecenas at dolor ut purus auctor mattis eget in nunc. Nunc malesuada imperdiet venenatis. Duis varius purus odio, in venenatis enim laoreet id. Quisque eu turpis vestibulum, tincidunt nisi et, scelerisque nisi. Quisque pulvinar leo vitae ante feugiat vestibulum. Duis gravida vestibulum neque, a efficitur dui pulvinar ut. Vestibulum porttitor libero a mauris commodo, at sodales nisi elementum. Maecenas eleifend tristique quam, a pretium turpis posuere vitae. Maecenas quis fringilla lectus, ut mattis tellus. Praesent blandit tortor magna, ac fringilla orci bibendum a. Vivamus id auctor felis.</p>
                <p>Nulla lobortis odio ut pharetra sagittis. Ut non finibus massa. Sed tempor tortor eu nibh efficitur feugiat. Proin congue ex ante, a ullamcorper erat sollicitudin sit amet. Vestibulum tempus turpis non justo elementum venenatis. Aenean pretium porta nisi in aliquam. Maecenas ac velit eget purus cursus laoreet vel eu nulla. Integer porta facilisis erat, at viverra nunc vulputate non. Sed neque ex, placerat at leo quis, scelerisque lacinia velit. Cras pharetra vitae nisi ac condimentum. Praesent rutrum dui sit amet lorem mattis sollicitudin.</p>
                <p>Maecenas ut pellentesque ante, tincidunt luctus enim. Fusce vulputate justo felis, vehicula vehicula augue sodales sed. Vivamus tempor tristique turpis, ac interdum eros iaculis non. Aliquam eros purus, pulvinar vehicula odio sed, sollicitudin maximus dui. Donec consectetur est eu sem fermentum varius. Nulla facilisi. Phasellus suscipit lacus at ullamcorper sagittis. Nunc congue sit amet tortor non ultricies. Ut congue tortor ac porttitor tincidunt. Nam facilisis nulla quis massa congue, sed mattis lorem tristique. Vestibulum porta placerat metus, vel mattis dui. Mauris pellentesque mauris eu volutpat tincidunt. Mauris commodo, felis eget ultricies laoreet, nulla eros mattis nisl, ut tempor mi sem tempor dolor. Maecenas vel felis ut nibh suscipit tempus a et nisi.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue dui ac mollis blandit. Nunc non consectetur mi. Curabitur et auctor nisl, ac dictum neque. Cras vitae varius enim. Quisque eleifend consequat dui. Ut nisi eros, ultricies nec erat eget, suscipit convallis tortor. Sed vel finibus ligula. Fusce facilisis risus sapien, ac ornare ipsum ultrices eu. Nullam pellentesque sem tempor ipsum pellentesque sodales. Nam sit amet cursus tortor. Duis condimentum mi at mi elementum scelerisque eget ac tortor. Nunc enim enim, vestibulum et volutpat rhoncus, scelerisque vel enim. Praesent quis est consectetur massa dictum euismod. Etiam ullamcorper efficitur lorem, eget vehicula justo venenatis euismod. Curabitur orci ex, sollicitudin at ante a, ultrices iaculis est. Quisque maximus tellus eget nisi bibendum, eu dapibus dui lobortis.</p>
                <p>Sed faucibus nisl vel rhoncus commodo. Vestibulum maximus nisi eu tortor molestie, quis blandit eros sodales. Duis suscipit, nisl sit amet malesuada pharetra, lacus risus aliquet augue, eget imperdiet sem eros non risus. Pellentesque imperdiet ligula eu ante condimentum, eget eleifend elit consequat. Aliquam a ex eget mi lobortis iaculis. Curabitur ut sagittis magna. Praesent quis odio augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ante id lacus gravida venenatis. Pellentesque quis odio a eros ultrices tempus non vel ex. Sed in rutrum diam. Proin vehicula, enim id elementum pharetra, purus magna tempor nisl, sed scelerisque orci lorem sit amet justo. Vestibulum eu volutpat quam. Nunc finibus rutrum iaculis. Aliquam erat volutpat. Nulla facilisi.</p>
                <p>Fusce ex sapien, ultricies sollicitudin gravida vitae, ultrices ut ex. Morbi luctus tempus nisi. Maecenas at dolor ut purus auctor mattis eget in nunc. Nunc malesuada imperdiet venenatis. Duis varius purus odio, in venenatis enim laoreet id. Quisque eu turpis vestibulum, tincidunt nisi et, scelerisque nisi. Quisque pulvinar leo vitae ante feugiat vestibulum. Duis gravida vestibulum neque, a efficitur dui pulvinar ut. Vestibulum porttitor libero a mauris commodo, at sodales nisi elementum. Maecenas eleifend tristique quam, a pretium turpis posuere vitae. Maecenas quis fringilla lectus, ut mattis tellus. Praesent blandit tortor magna, ac fringilla orci bibendum a. Vivamus id auctor felis.</p>
                <p>Nulla lobortis odio ut pharetra sagittis. Ut non finibus massa. Sed tempor tortor eu nibh efficitur feugiat. Proin congue ex ante, a ullamcorper erat sollicitudin sit amet. Vestibulum tempus turpis non justo elementum venenatis. Aenean pretium porta nisi in aliquam. Maecenas ac velit eget purus cursus laoreet vel eu nulla. Integer porta facilisis erat, at viverra nunc vulputate non. Sed neque ex, placerat at leo quis, scelerisque lacinia velit. Cras pharetra vitae nisi ac condimentum. Praesent rutrum dui sit amet lorem mattis sollicitudin.</p>
                <p>Maecenas ut pellentesque ante, tincidunt luctus enim. Fusce vulputate justo felis, vehicula vehicula augue sodales sed. Vivamus tempor tristique turpis, ac interdum eros iaculis non. Aliquam eros purus, pulvinar vehicula odio sed, sollicitudin maximus dui. Donec consectetur est eu sem fermentum varius. Nulla facilisi. Phasellus suscipit lacus at ullamcorper sagittis. Nunc congue sit amet tortor non ultricies. Ut congue tortor ac porttitor tincidunt. Nam facilisis nulla quis massa congue, sed mattis lorem tristique. Vestibulum porta placerat metus, vel mattis dui. Mauris pellentesque mauris eu volutpat tincidunt. Mauris commodo, felis eget ultricies laoreet, nulla eros mattis nisl, ut tempor mi sem tempor dolor. Maecenas vel felis ut nibh suscipit tempus a et nisi.</p>
            </Layout>
        );
    }
});

module.exports = LayoutExample;
