import { useBasic } from '@basictech/react';
import { useState } from 'react'

const AddItemForm = () => {
    const [domainName, setDomainName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notes, setNotes] = useState('');

    const { user, db } = useBasic();

    function saveEntry(){
        db.collection('credentials').add({
            user_id: user?.id,
            domain_name: domainName,
            username: username,
            password: password,
            notes: notes
        });
        setDomainName('');
        setUsername('');
        setPassword('');
        setNotes('');
    }

  return (
    <div className='card card-border p-3 m-5 bg-base-200 w-250 mx-auto'>
        <div className='card-title pl-2'>
            <h2>Add a New Item</h2>
        </div>
        <div className='card-body'>
            <input type='text' className="input w-full mb-3" placeholder='Domain Name' value={domainName} onChange={(e) => { setDomainName(e.target.value)}} />
            <input type='text' className="input w-full mb-3" placeholder='Username' value={username} onChange={(e) => { setUsername(e.target.value)}} />
            <input type='password' className="input w-full mb-3" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value)}} />
            <textarea className="input w-full mb-3 h-25 pl-3 pt-4" placeholder='Note' value={notes} onChange={(e) => { setNotes(e.target.value)}} ></textarea>
            <button className='btn  btn-primary w-full md:w-25 mx-auto md:mr-0 md:ml-auto' onClick={saveEntry} >Save</button>
        </div>
    </div>
  )
}

export default AddItemForm