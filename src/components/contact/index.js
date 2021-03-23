import React from "react";

import "./contact.scss";

export default class IndexPage extends React.Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
    }
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    }
    render() {
        return (
            <div className="contact">
                <div className="container">
                    <h2 className="contact__title">Contact me</h2>
                    <form>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            placeholder="Your name"
                        />
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            name="subject"
                            value={this.state.subject}
                            onChange={this.handleInputChange}
                            placeholder="Subject"
                        />
                        <textarea
                            name="message"
                            value={this.state.message}
                            onChange={this.handleInputChange}
                            placeholder="Message"
                        >
                        </textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}