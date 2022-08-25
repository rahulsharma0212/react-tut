import React,{Component} from 'react';
/** it will work in production only */
class ErrorBoundary extends Component{
    state = {
        hasError :false,
        errorMessage: ''
    }

    componentDidCatch =(errror, info) =>{
        this.setState({hasError:true,errorMessage:errror});
    }

    render() {
        if(this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;