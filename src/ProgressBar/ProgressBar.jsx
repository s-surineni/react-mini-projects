import "./styles.css";
const ProgressBar = (props) => {
    const temp = 30;
    const { bgcolor, completed } = props;
    return (
        <div className="container">
            <span>{`${completed}%`}</span>
        </div>
    )
}

export default ProgressBar;