import React from 'react';

class Images extends React.Component{

    render() {
        return (
            <img src={process.env.PUBLIC_URL + '/images/web/pngs/1a.png'} alt="nope"/>
        )
    }

}

export default Images;
