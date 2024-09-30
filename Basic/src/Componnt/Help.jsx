import React from 'react'

const Help = ({IsHelp}) => {
    return (
        <div>
            {IsHelp &&
                <h1>This is a help web page</h1>
            }
        </div>
    )
}

export default Help
