import ProfilePic from './assets/Profile_Pic.jpg'

function Card({title, desciption}) {
    return(
        <div className="card">
            <img className="card-image" src={ProfilePic} alt="profile picture" />
            <h2 className="card-title" >{title}</h2>
            <p className="card-paragraph">{desciption}</p>
        </div>
    )
}

export default Card