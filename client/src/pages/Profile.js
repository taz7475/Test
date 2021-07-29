import { logout } from '../redux/actions/authActions'
import {  useDispatch } from 'react-redux'


const Profile = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(logout())}>logout</button>
    )
}

export default Profile
