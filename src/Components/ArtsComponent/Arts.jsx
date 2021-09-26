import React from 'react';
import { artsData } from '../../Arts/artsSettings';
import { Card } from '../../CommonComponents/Cards/Card';

const Arts = () => {
    return ( 
        <div> 
        <h3>Obras de Arte de algunos pintores famosos</h3>
        <br />
        {
            artsData.map (artItem => (
                <Card 
                key={artItem.id}
                title="Arte Profesional" 
                subtitle={artItem.painter} 
                image={artItem.image} 
                />
                    
            ))
        }
        </div>
    )
}

export default Arts;