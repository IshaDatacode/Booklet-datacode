import { useState } from 'react';

import Logo from '../../assets/images/logo-text.png'
import Image1 from '../../assets/images/image1.png'

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email:${email},Password:${password}`);
    }

    return (
        <div className="d-flex flex-md-row flex-column vh-100 ">
            <div className="login-data d-flex flex-column align-items-center justify-content-center gap-2 gap-md-4 ">
                <div><img src={Logo} className='icon' /></div>
                <div className='fs-2'>Sign In To Get Inside</div>
                <form className='p-3 w-75 ' onSubmit={handleSubmit}>
                    <div className="form-group py-3 ">
                        <label htmlFor="email" className=''>Email</label>
                        <input type="email" onChange={(e) => setEmail(pre => pre = e.target.value)} className="form-control bg-imp text-white p-2" id="email" aria-describedby="email" placeholder="" />
                    </div>
                    <div className="form-group py-3 ">
                        <label htmlFor="password" className=''>Password</label>
                        <input type="password" onChange={(e) => setPassword(pre => pre = e.target.value)} className="form-control bg-imp text-white p-2" id="password" />
                    </div>
                    <div className='text-center py-4'>
                        <button type="submit" className="btn btn-primary bg-color-blue border rounded-5 fs-25px border-0 text-center py-2 px-5 ">Sign In</button>
                    </div>
                </form>
            </div>
            <div className='login-img'>
                <img src={Image1} className='h-100 w-100' />
            </div>
        </div>
    )
}
export default Signup;