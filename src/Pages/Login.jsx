import {useState} from "react";


export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const isLogged = email === 'admin' && password === '123456';
        console.log(email, password, isLogged);
    }

    return (
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card">
                <div className="card-header">
                    <h4>LOGIN</h4>
                </div>

                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email">Email <span className="text-danger">*</span></label>
                            <input onInput={e => setEmail(e.currentTarget.value)}
                                   type="text"
                                   id="email"
                                   className="form-control mt-2"
                                   autoFocus
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password">Password <span className="text-danger">*</span></label>
                            <input onInput={e => setPassword(e.currentTarget.value)}
                                   type="text"
                                   id="password"
                                   className="form-control mt-2"
                            />
                        </div>

                        <button onClick={handleSubmit} type="button" className="btn btn-primary form-control my-2">Login</button>
                    </form>
                </div>

                <div className="card-footer text-danger">

                </div>
            </div>
        </div>
    )
};