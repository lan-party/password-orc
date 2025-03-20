import { useBasic } from '@basictech/react'

const NavBar = () => {
  const { signin, signout, isSignedIn, user } = useBasic();
  
  return (
    <div className="navbar bg-base-100 shadow-sm m-0 mb-6">
        <div className="flex-1">
            <a className="text-xl float-left" href="/"><img src='/orc.png' className='w-15 mx-auto' /></a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                {!isSignedIn ? (
                    <li><button onClick={signin}>Sign In</button></li>
                ) : (
                    <li>
                        <details className='text-right z-2'>
                            <summary>{user?.name}</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a href="/vault">Password Vault</a></li>
                                <li><a href="/settings">Settings</a></li>
                                <li><a href="/#" onClick={signout}>Sign Out</a></li>
                            </ul>
                        </details>
                    </li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default NavBar