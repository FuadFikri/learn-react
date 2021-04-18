import React from 'react';

class ClassComponent extends React.Component {

    state = {
        counter: 0
    }

    increment = () => {
        this.setState(prev => {

        return {
            counter: prev.counter + 10
        }
        
    })
}

componentDidMount(){
    this.setState({counter:60})
}


// ketika ada props atau state yg update di react component
componentDidUpdate(prevProps, prevState){
    if(prevState.counter >= 100){
        alert("nilai anda mencukupi")
        this.setState({
            counter:0
        })
    }
}

     


    videoRef = React.createRef()
    render() {
        return <div>ini class component

            <div>jumlah {this.state.counter}</div>
            <button onClick={this.increment}>
                tambah
            </button>
            <br />

            <video ref={this.videoRef} src="https://www.w3schools.com/html/mov_bbb.mp4" />
            <button onClick={() => this.videoRef.current.play()}>play</button>
            <button onClick={() => this.videoRef.current.pause()}>stop</button>

        </div>
    }
}

export default ClassComponent;