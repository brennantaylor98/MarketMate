import React from "react";
import { useNavigate } from "react-router-dom";
import "./mainC.css"


const Vehicles = () => {

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
            <h2 className="title" id="categoryTitle">Vehicles</h2>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">2022 Ford F-350</h2>
                        <p className="postPrice">Price: 90,000</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">2023 BMW M3</h2>
                        <p className="postPrice">Price: 85,000</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">2015 Dodge Ram 2500</h2>
                        <p className="postPrice">Price: 37,500</p>
                    </div>
                    <div>
                        <button onClick={clickHandler} className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Vehicles;