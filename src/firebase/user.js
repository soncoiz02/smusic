import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import app from './config'

const db = getFirestore(app)
const userRef = doc(db, 'users')

export const handleAddUser = async (infor) => {
    try {
        await setDoc(userRef, infor)
    } catch (error) {
        console.log('Fail to add user')
    }
}

export const getUser = async (uid) => {
    const ref = doc(db, 'users', uid)
    try {
        const docSnap = await getDoc(ref)
        if (docSnap.exists()) return docSnap.data()
    } catch (error) {
        console.log('Fail to get user')
    }
}