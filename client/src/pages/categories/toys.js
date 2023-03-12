import React from "react";
import { useNavigate } from "react-router-dom";
import "./mainC.css"


const Toys = () => {
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
            <h2 className="title" id="categoryTitle">Toys</h2>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Pokemon</h2>
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
                        <h2 className="postTitle">Kendama</h2>
                        <p className="postPrice">Price: 27</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Cocomelon Doll</h2>
                        <p className="postPrice">Price: 7</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Toys;