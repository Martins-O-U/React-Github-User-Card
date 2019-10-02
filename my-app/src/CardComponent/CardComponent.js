import React, {Component} from 'react';


class CardComponent extends Component{
        
    render(){
        const { card } = this.props;
        return(
            <div>
                {card.map((card) => (
                <div className='card' key={card.id}>
                    <div className='cardImg'>
                        <img src ={card.avatar_url} alt='My Face' /> 
                    </div>
                    <div className='cardInfo'>
                        <h2 className='name'>{card.name}</h2>
                        <h4 className='username'><i>{card.login}</i></h4>
                        <p><strong>Location:</strong> {card.location}</p>
                        <p><strong>Profile:</strong> <a href={card.url}>{card.url}</a></p>
                        <p><strong>GitHub Followers:</strong> <a href={card.followers_url}>{card.followers_url}</a></p>
                        <p><strong>GitHub Following:</strong> <a href={card.following_url}>{card.following_url}</a></p>
                        <p><strong>GitHub Bio:</strong> {card.bio}</p>
                    </div>
                </div>
                ))}

            </div>
        )
    }
}


export default CardComponent;
