import ProfilePic from './assets/Profile_Pic.jpg'

function Card({title, children}) {
    return(
        <div className="card">
            <img className="card-image" src={ProfilePic} alt="profile picture" />
            <h2 className="card-title" >{title}</h2>
            <p className="card-paragraph">{children}</p>
        </div>
    )
}

export default Card