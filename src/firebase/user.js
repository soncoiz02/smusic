import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import app from './config'

const db = getFirestore(app)

export const handleAddUser = async (data) => {
    const userRef = doc(db, 'users', data.uid)
    try {
        await setDoc(userRef, data)
    } catch (error) {
        console.log('Fail to add user')
    }
}

export const getUser = async (uid) => {
    const userRef = doc(db, 'users', uid)
    try {
        const docSnap = await getDoc(userRef)
        if (docSnap.exists()) return docSnap.data()
    } catch (error) {
        console.log('Fail to get user')
    }
}