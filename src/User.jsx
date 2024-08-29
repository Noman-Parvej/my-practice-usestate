export default function User({post}){
    const {name,username,email}=post;

    return (
        <div className="box">
            <h3>Name :{name} </h3>
            <h3>Username :{username} </h3>
            <h3>Email :{email} </h3>
        </div>
    )
}