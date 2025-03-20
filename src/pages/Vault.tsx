import { useBasic, useQuery } from '@basictech/react'
import NavBar from '../components/NavBar';

const Vault = () => {
    const { user, db } = useBasic();

    console.log(user?.id);
    const credentials = useQuery(() => db.collection('credentials').getAll());
    console.log(credentials);

    // Possible bug here? This doesn't seem to return true immediately wich is triggering a redirect even when logged in 
    // if (!isSignedIn){ 
    //     window.location.replace('/');
    // }
    
    return (
        <div>
            <NavBar />

            {credentials.map((credential: any) => (
                <div className='card p-3 m-5 bg-base-200 w-250 mx-auto'>
                <div className='card-title'>
                    <h2>{credential.id}</h2>
                </div>
                <div className='card-body'>
                    test
                </div>
            </div>
            ))}
        </div>
      )

}

export default Vault