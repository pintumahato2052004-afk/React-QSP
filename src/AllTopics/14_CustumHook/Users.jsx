import {useApi} from "./useApi";

const Users = () => {
    let {apiData, loading}= useApi("https://dummyjson.com/Users");
    if(loading){
        return <h1 className="text-center font-extrabold">Loading...</h1>
    }
  return (
    <div>
        <h1 className="font-bold text-2xl">Users</h1>
    </div>
  )
}

export default Users;