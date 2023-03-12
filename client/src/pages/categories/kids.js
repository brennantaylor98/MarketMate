import React from "react";
import { useNavigate } from "react-router-dom";
import "./mainC.css"


const Kids = () => {
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
            <h2 className="title" id="categoryTitle">Kids</h2>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Bycicle</h2>
                        <p className="postPrice">Price: 55</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Scooter</h2>
                        <p className="postPrice">Price: 28</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Nintendo Wii</h2>
                        <p className="postPrice">Price: 350</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Kids;