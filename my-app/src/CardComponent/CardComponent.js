import React, {Component} from 'react';


class CardComponent extends Component{
    constructor(props){
        super(props);
        console.log(props)
        
    }
    render(){
        return(
            <div className='card'>
                <div className='cardImg'>
                    <img src ={this.props.card.avatar_url} alt='My Face' /> 
                </div>
                <div>
                    <h1 className='name'>{this.props.card.name}</h1>
                    <h4 className='username'>{this.props.card.login}</h4>
                    <p>Location: {this.props.card.location}</p>
                    <p>Profile: {this.props.card.url}</p>
                    <p>GitHub Followers: {this.props.card.followers_url}</p>
                    <p>GitHub Following: {this.props.card.following_url}</p>
                    <p>GitHub Bio: {this.props.card.bio}</p>
                </div>

            </div>
        )
    }
}


export default CardComponent;
