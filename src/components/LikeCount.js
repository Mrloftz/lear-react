import React from 'react'

class LikeCount extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handlerClick = this.handlerClick.bind(this)
    }
    handlerClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handlerClick} >Vote Count</button>
            </div>
        )
    }
}
export default LikeCount