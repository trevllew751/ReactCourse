function getNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNumber();
        let msg;
        if (num === 7) {
            msg =
                <div>
                    <h2>Lucky 7!</h2>
                </div>
        } else {
            msg =
                <div>
                    <h2>Unlucky!</h2>
                </div>
        }
        return (
            <div>
                <h1>Your number is... {num}</h1>
                {msg}
            </div>
        )
    }
}