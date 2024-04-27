import {useState} from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {userState} from "../States/userState";
import Navigation from "../Templates/Snippets/Navigation";


export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const setUserState = useSetRecoilState(userState);
    const userStateData = useRecoilValue(userState);

    const handleSubmit = () => {
        const isLogged = email === 'admin' && password === '123456';
        if (isLogged)
            setUserState({'isLogged': isLogged, 'email': email});
    }

    const handleLogout = () => setUserState({});

    return (
        <>
            <Navigation/>
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto" style={{marginBottom: "300px"}} >
                <div className="card">
                    <div className="card-header">
                        <h4>LOGIN</h4>
                    </div>

                    <div className="card-body">
                        {!userStateData.isLogged
                            ?
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
                            : <button onClick={handleLogout} type="button" className="btn btn-primary form-control my-2">Logout</button>
                        }
                    </div>

                    <div className="card-footer">
                        <h5>email: admin</h5>
                        <h5>pass: 123456</h5>
                    </div>
                </div>
            </div>
        </>
    )
};