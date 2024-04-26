import {useState} from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {userState} from "../States/userState";


export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const setUserState = useSetRecoilState(userState);
    const userStateData = useRecoilValue(userState);

    const handleSubmit = () => {
        const isLogged = email === 'admin' && password === '123456';
        if(isLogged)
            setUserState({'isLogged': isLogged, 'email': email});
    }

    const handleLogout = () => setUserState({});

    return (
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card">
                <div className="card-header">
                    <h4>LOGIN</h4>
                </div>

                <p>{userStateData.isLogged ? 'logged ' + userStateData.email : 'not logged'}</p>

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

                            <button onClick={handleSubmit} type="button"
                                    className="btn btn-primary form-control my-2">Login
                            </button>
                        </form>
                        : <button onClick={handleLogout} type="button"
                                  className="btn btn-primary form-control my-2">Logout</button>
                    }
                </div>

                <div className="card-footer text-danger">

                </div>
            </div>
        </div>
    )
};