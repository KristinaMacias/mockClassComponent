import React from "react";

class ClassComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            list: []
        };
    }

    //method to get data from the API and print it to the console
    componentDidMount() {
        fetch("https://6298beb2f2decf5bb74a9edb.mockapi.io/comments")
            .then(response => response.json())
            .then(data => {
                console.log("data from fetch", data);
                this.setState({ list: data });
            });
    }

    //method to handle change
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    //post method to add a comment
    handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://6298beb2f2decf5bb74a9edb.mockapi.io/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                comment: this.state.comment
            })
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ list: [...this.state.list, data] });
            });
    }




    render() {
        console.log(this.state.list)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" onChange={this.handleChange} />
                    <label htmlFor="comment">Comment</label>
                    <input id="comment" name="comment" type="text" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )

    }
}

export default ClassComponent;