import "./style.css"

export default function User({user}){

    const {
        avatar_url,
        followers,
        following,
        public_repos,
        name,
        login,
        created_at,
      } = user;

      const createdDate = new Date(created_at);


    return(
        <div className="user">
            <div className="avtar">
                <img className="pfp" src={avatar_url}/>
            </div>
            <div className="name-container">
                <a href={`https://github.com/${login}`}>{name || login}</a>
                <p>{`joined on: ${createdDate.toDateString()}`}</p>
            </div>

            <div className="profile-info">
                <div className="public-repo">
                    <p>public repos -  {public_repos}</p>
                
                </div>
                <div className="followers">
                <p>followers -{followers} </p>
                </div>
                <div>
            <p>following -{following} </p>
                    
                </div>
            </div>



        </div>
    )
}