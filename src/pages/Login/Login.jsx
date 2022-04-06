import React, { useEffect } from 'react'
import app from '../../firebase/config'
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { getUser, handleAddUser } from '../../firebase/user'
import { doc } from 'firebase/firestore'
import { setIsLogin, setUserInfor } from '../../redux/action/user'
import { useNavigate } from 'react-router-dom'
const auth = getAuth(app)

const ggProvider = new GoogleAuthProvider()
const fbProvider = new FacebookAuthProvider()

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const checkUser = async (uid) => {
        const user = await getUser(uid)
        return user ? true : false
    }

    const handleLoginWithGg = async () => {
        const { user } = await signInWithPopup(auth, ggProvider)
        const userData = {
            uid: user.uid,
            name: user.displayName,
            avt: user.photoURL,
            likedSongs: []
        }

        if (await checkUser(user.uid) === false) {
            await handleAddUser(userData)
        }
    }

    const handleLoginWithFb = async () => {
        const { user } = await signInWithPopup(auth, fbProvider)
        const userData = {
            uid: user.uid,
            name: user.displayName,
            avt: user.photoURL,
            likedSongs: []
        }

        if (await checkUser(user.uid) === false) {
            await handleAddUser(userData)
        }
    }

    useEffect(() => {
        const authChange = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userData = await getUser(user.uid)
                dispatch(setUserInfor(userData))
                dispatch(setIsLogin(true))
                navigate('/')
            }
        })

        return authChange
    }, [])

    return (
        <div className='login'>
            <div className="cover">
                <h2>Choose your login method</h2>
                <div className='method'>
                    <div className="btn gg" onClick={handleLoginWithGg}>
                        Login with Google
                    </div>
                    <div className="btn fb" onClick={handleLoginWithFb}>
                        Login with Facebook
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login