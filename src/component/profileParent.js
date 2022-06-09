import React , {useState}  from 'react';
import Profile from './profile';
import Pic from '../component/photos.jpg';
function ProfileParent() {
    const data = {
        name: 'MOTAZ',
        description: 'I am learning',
        image : Pic 
    }
    const [card, setCard] = useState (false);
    const toggleCard = () => {
        setCard(!card)
    }



    return (
        <div>
            <button onClick={toggleCard}> {card ? "hide me" : "show me" } </button>
            { card ? <Profile x= {data} /> : <h1> Nothink to show </h1> }
        </div>
    );
};

export default ProfileParent
