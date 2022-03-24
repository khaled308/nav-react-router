import React from 'react'

function Home() {
    const pageStyle = {
        background : "url('img/img-1.jpg')",
        color : '#fff',
        fontWeight : 'bold',
        fontSize : '30px'
    }
    return (
        <div className='page' style={pageStyle}>Home</div>
    )
}

export default Home