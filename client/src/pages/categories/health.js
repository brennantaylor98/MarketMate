import React from "react";
import { useNavigate } from "react-router-dom";
import "./mainC.css"


const Health = () => {
    
    let navigate = useNavigate()
    
    const clickHandler = (event) => {
        event.preventDefault()
    
        const title = event.target.parentElement.previousElementSibling.children[0].textContent
        const price = event.target.parentElement.previousElementSibling.children[1].textContent
    
        localStorage.setItem('title', title)
        localStorage.setItem('price', price)
    
    
        event.target.style.backgroundColor = "red" 
        
    
        let path = `/me`; 
        navigate(path);
    }

    return (
        <div className="container" id="categoryCont">
            <h2 className="title" id="categoryTitle">Health</h2>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Vitamin C</h2>
                        <p className="postPrice">Price: 35</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Eucalyptus Oils</h2>
                        <p className="postPrice">Price: 5</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Icy Hot</h2>
                        <p className="postPrice">Price: 12</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Health;