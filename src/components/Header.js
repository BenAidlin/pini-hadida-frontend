const Header = (props) => {
    return (
        <div>
            <h2 style={hstyle}>
                hello {props.title}
            </h2>
        </div>
    );
}

// if props will not be passed it will use the object below as props
Header.defaultProps = {
    title: 'default title'
}
// you can add inline styles as objects here:
const hstyle = {
    color: 'darkred',
    backgroundColor: 'green'
};

export default Header;