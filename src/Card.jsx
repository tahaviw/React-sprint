import ProfilePic from './assets/Profile_Pic.jpg'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={ProfilePic} alt="profile picture" />
            <h2 className="card-title" >Tahaviw</h2>
            <p className="card-paragraph">I'm a Fullstack Dev & an amateur Muaythai fighter pationated with AI</p>
        </div>
    )
}

export default Card