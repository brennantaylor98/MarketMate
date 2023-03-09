import React from "react";
import "./mainC.css"


const Electronics = () => {
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
            <h2 className="title" id="categoryTitle">Electronics</h2>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">iPad Pro 512 GB</h2>
                        <p className="postPrice">Price: 1250</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">iMac Studio</h2>
                        <p className="postPrice">Price: 2700</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Apple Airpods Max</h2>
                        <p className="postPrice">Price: 450</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Electronics;