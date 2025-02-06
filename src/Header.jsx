import {React} from 'react'

function Header() {

    const handleLogoBtn = () => {
        window.location.reload()
    }

    return(
        <div className="head">

            <h4 className="logo" onClick={handleLogoBtn}>CQ</h4>

            <div className="button-holder">

                <button className="head-btn" onClick={handleLogoBtn}>Home</button>
                <button className="head-btn" onClick={handleLogoBtn}>Search</button>
                <button className="head-btn" onClick={() => {alert("Under Construction :)")}}>Genre</button>
                <button className="head-btn" onClick={() => {alert("Under Construction :)")}}>About</button>

            </div>

        </div>
    )
}

export default Header