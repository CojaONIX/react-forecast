

export const Login = () => {

    const handleSubmit = (e) => {
        console.log('handleSubmit');
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
                            <input type="text"
                                   id="email"
                                   className="form-control mt-2"
                                   autoFocus
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password">Password <span className="text-danger">*</span></label>
                            <input type="text"
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