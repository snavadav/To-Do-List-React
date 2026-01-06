export const ContainerLogin = () => {
    return (
        <div className="container-login">
            <div className="container-login-input">
                <h2>Inicia sesion</h2>
                <label>Username</label>
                <input type="text" placeholder="Nombre de usuario" />
                <label>Password</label>
                <input type="text" placeholder="Password" />
                <button className="button-login" type="submit">Login</button>
            </div>
        </div>
    )
}
