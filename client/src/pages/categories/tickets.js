import React from "react";
import "./mainC.css"


const Tickets = () => {


    return (
        <div className="container" id="categoryCont">
            <h2 className="title" id="categoryTitle">Tickets</h2>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Logan Paul vs KSI</h2>
                        <p className="postPrice">Price: 120</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Seahawks vs Giants</h2>
                        <p className="postPrice">Price: 83</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Clippers vs Warriors</h2>
                        <p className="postPrice">Price: 67</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Tickets;