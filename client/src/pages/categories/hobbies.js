import React from "react";
import "./mainC.css"


const Hobbies = () => {
    const clickHandler = (event) => {
        event.preventDefault()
    
        const title = event.target.parentElement.previousElementSibling.children[0].textContent
        const price = event.target.parentElement.previousElementSibling.children[1].textContent
    
        localStorage.setItem('title', title)
        localStorage.setItem('price', price)
    
    
        event.target.style.backgroundColor = "red" 
        
    
        window.location.replace('/me')
    }


    return (
        <div className="container" id="categoryCont">
            <h2 className="title" id="categoryTitle">Hobbies</h2>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Beach Volleyball</h2>
                        <p className="postPrice">Price: 45</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Tennis Racket</h2>
                        <p className="postPrice">Price: 85</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">FPV Racing Drone</h2>
                        <p className="postPrice">Price: 1150</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hobbies;