

const Home = () => {

    return (
        <div className="container">
            <h1>Home</h1>
            <hr/>

            <form>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City:</label>
                    <input type="text"
                           className="form-control"
                           id="city"
                           name="city"
                    />
                </div>
            </form>
        </div>
    );
}

export default Home;