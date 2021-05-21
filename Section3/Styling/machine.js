class Machine extends React.Component {
    render() {
        let msg;
        const {s1, s2, s3} = this.props;
        const styles = {fontSize: "50px", backgroundColor: "red"};
        if ((s1 === s2) && (s2 === s3)) {
            msg = <h2>You Win!</h2>
        } else {
            msg = <h2>You Lose!</h2>
        }
        return (
            <div className={"Machine"}>
                <h2 style={styles}>{s1} {s2} {s3}</h2>
                <p style={{backgroundColor: "orange", color:"green"}}>{msg}</p>
            </div>
        )
    }
}