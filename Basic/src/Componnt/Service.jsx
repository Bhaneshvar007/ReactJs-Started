import React from 'react'

const Service = ({IsService}) => {
    return (
        <div>
            {IsService &&
                <h1>This is a service web page</h1>
            }
        </div>
    )
}

export default Service
