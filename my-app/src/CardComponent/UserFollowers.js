import React, {Component} from 'react';


class UserFollowers extends Component{
        
    render(){
        // const { card } = this.props;
        return(
            <div>
                {this.props.card.map((card) => (
                <div className='card' key={card.id}>
                    <div className='cardImg'>
                        <img src ={card.avatar_url} alt='My Face' /> 
                    </div>
                    <div className='cardInfo'>
                        <h2 className='name'>{card.name}</h2>
                        <h4 className='username'><i>{card.login}</i></h4>
                        <p><strong>Location:</strong> {card.location}</p>
                        <p><strong>Profile:</strong> {card.url}</p>
                        <p><strong>GitHub Followers:</strong> {card.followers_url}</p>
                        <p><strong>GitHub Following:</strong> {card.following_url}</p>
                        <p><strong>GitHub Bio:</strong> {card.bio}</p>
                    </div>
                </div>
                ))}

            </div>
        )
    }
}


export default UserFollowers;