class Hello extends React.Component {
    static defaultProps = {     // Must be called defaultProps
        from: "Saitama",
        bangs: 1
    }
    render() {
        const bangs = "!".repeat(this.props.bangs)
        return (
            <div>
                <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
            </div>

        )
    }
}