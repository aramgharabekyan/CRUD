

function User ({user,del}){


    return(
        <>
            {user.map( (el) => 
            <div className="user" key={el.id}>
                <span >{`${el.name}`}</span>&nbsp;&nbsp;
                <span>{`${el.email}` }</span>&nbsp;&nbsp;
                <button onClick={()=>del(el.id)}>DEl</button>
            </div>)}
        </>
    )
}

export default User