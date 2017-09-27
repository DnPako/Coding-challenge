import React from 'react';
import Menu from './Menu'

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-top flex">
                    <span className="logo">Idea<span>date</span></span>
                    <div className="browse">browse</div>
                    <div className="profile">
                        <img src="./style/assets/notif.png" alt="Notification"/>
                        <img src="./style/assets/wheart.png" alt="Likes"/>
                        <img className="picture circle" src="./style/assets/profile.png" alt="profile picture"/>
                    </div>
                </div>

                <div className="header-middle flex">
                    <img className="date circle" src="./style/assets/park.jpg" alt="date picture"/>
                    <div className="title">
                        <h1>Date night restaurants</h1>
                        <h4>Best place for a date night at New York City</h4>
                        <span>6M Followers</span>
                    </div>
                    <div className="follow">
                        <button className="button">Follow</button>
                        <img src="./style/assets/param.png" alt="Parameter" className="circle"/>
                    </div>
                </div>

                <div className="header-bottom flex">
                    <div className="dropdown">
                        <div>
                            <span>POPULAR</span>
                            <img className="arrow" src="./style/assets/arrow.png" alt="arrow"/>
                        </div>
                        <ul>
                            <li className="option">NEW</li>
                            <li className="option">EDITORS CHOICE</li>
                        </ul>
                    </div>
                    
                    <Menu />
                </div>
            </header>
        )
    }
}


export default Header;
