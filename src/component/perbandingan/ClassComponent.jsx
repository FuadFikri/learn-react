import React from 'react';

class ClassComponent extends React.Component {

state = {
    counter:0
}

increment = () => {
    this.setState(prev =>{

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



    render() {
        return <div>ini class component

            <div>jumlah {this.state.counter}</div>
            <button onClick={this.increment}>
                tambah
            </button>
        </div>
    }
}

export default ClassComponent;