import { useRef } from "react"

function AddUser({addName,addMail,addUser}){

    let name  = useRef();
    let mail = useRef();
    function del (){
        name.current.value = ''
        mail.current.value = ''
    }
    return(
    <>
        <h1>React CRUD Application</h1>
        <h2>Add User</h2>
        <form>
            <input ref={name} type="text"  placeholder='Name' onChange={e=>addName(e)}/>
            <input ref={mail} type="email" placeholder='Email' onChange={e=>addMail(e)}/>
            <button  onClick={(e) => { addUser(e); del(); }}>Add</button>
        </form>
        <br/>
        <br/>
    </>
    )
}
export default AddUser