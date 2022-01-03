import * as React from "react"

const ProfileCard = ({ name, title, personImage }) => {
    return (
        <div className="person-wrapper">
            <div className="person"><a href="our-team/member-item.html">
                <img src="../img/eckels-jim.jpg" alt="Name" />
                <p className="name">Jim Eckels</p>
                <p className="title">Managing Partner</p>
            </a></div>
        </div>
    )
}

export default ProfileCard