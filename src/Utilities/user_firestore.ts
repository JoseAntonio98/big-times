import { db, auth } from "../FirebaseConfig"
import { User, signOut } from "firebase/auth";
import { setDoc, doc, addDoc, collection, getDocs, query, where, deleteDoc, updateDoc } from "firebase/firestore";

export function update_data_user (user: User, _username: String, _photoURL: String)
{
    try
      {
        setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          username: _username,
          photo: _photoURL,
        });
      } catch (e) {
        console.error("Error adding user: " , e)
      }
}

export function logout ()
{
    signOut(auth)
}

export async function add_note (_userUid: String, _title: String, _description: String, _date: Date, _mood:String, _advice: String)
{
    try 
    {
        await addDoc(collection(db, 'notes'), {
            userUid: _userUid,
            title: _title,
            description: _description,
            date: _date,
            mood: _mood,
            advice: _advice
        })
        //myToast("Added correctly!!")
    }
    catch (e)
    {
        console.error("Error adding note: " , e)
    }
}

export async function get_notes(_userUid: String) {
  const dab = collection(db, 'notes')
  const queryNotes = query(dab, where('userUid', '==', _userUid))
  const data = await getDocs(queryNotes)
  return data
}

export async function update_note(_noteId: string, _title: String, _description: String, _date: Date, _mood:String, _advice: String) {
  const dataRef = doc( db, 'notes', _noteId )
  await updateDoc( dataRef, {
    title: _title,
    description: _description,
    date: _date,
    mood: _mood,
    advice: _advice
  })
}

export async function delete_note(_noteId: string) {
  await deleteDoc( doc(db, 'notes', _noteId) )
}