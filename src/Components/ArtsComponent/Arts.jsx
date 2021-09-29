import React from 'react';
import { artsData } from '../../Arts/artsSettings';
import { Card } from '../../CommonComponents/Cards/Card';

const Arts = () => {
    return ( 
        <div> 
       {
            artsData.map (artItem => (
                <Card 
                key={artItem.id}
                title="Artistas Famosos" 
                subtitle={artItem.painter} 
                image={artItem.image} 
                />
                    
            ))
        }
        </div>
    )
}

export default Arts;