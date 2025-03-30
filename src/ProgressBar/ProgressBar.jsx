import "./styles.css";
const ProgressBar = (props) => {
    const temp = 30;
    const { bgcolor, completed } = props;
    const progressStyles = {
        width: `${completed}%`
    };
    return (
        <div className="container">
            <div className="completed-bar"
            style={progressStyles}>
                <span className="completed-label">{`${completed}%`}</span></div>
        </div>
    )
}

export default ProgressBar;