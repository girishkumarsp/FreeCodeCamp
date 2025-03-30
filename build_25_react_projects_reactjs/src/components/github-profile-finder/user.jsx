export default function User({ user }) {
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
  return (
    <div className="user">
      <div className="image-contianer">
        <img src={avatar_url} className="avatar" alt="userImg" />
      </div>
      <div className="name-container">
        <a href={`http://github.com/${login}`}>{name || login}</a>
        <p>
          User joined on
          {`${createdDate.getDate()} ${createdDate.toLocaleDateString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}
