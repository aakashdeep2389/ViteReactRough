import React from 'react'

const CustomHOC = (component) => {
    const NewComponent = () => {
        return (
             <Component>
                {component}
            </Component>
        )
    }
    return (
        <NewComponent/>
    )
}

export default CustomHOC