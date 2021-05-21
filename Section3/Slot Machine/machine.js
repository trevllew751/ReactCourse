class Machine extends React.Component {
    render() {
        let msg;
        const {s1, s2, s3} = this.props;
        if ((s1 === s2) && (s2 === s3)) {
            msg = <h2>You Win!</h2>
        } else {
            msg = <h2>You Lose!</h2>
        }
        return (
            <div>
                <h2>{s1} {s2} {s3}</h2>
                {msg}
            </div>
        )
    }
}