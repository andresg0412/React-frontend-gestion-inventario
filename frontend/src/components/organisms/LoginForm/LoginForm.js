import FormGroup from "@/components/molecules/FormGroup/FormGroup";
import Button from "@/components/atoms/Button/Button";
import Titulo1 from "@/components/atoms/Text/Titulo1";
import { useState } from "react";
import styles from "./LoginForm.module.css";
function LoginForm({
    handleSubmit,
    error
}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = () => {
        console.log(username, password);
        handleSubmit(username, password);
    }

    return (
        <>
            <div className={styles.containerLoginForm}>
                <Titulo1>Login</Titulo1>
                <FormGroup
                    id="username"
                    type="text"
                    placeholder="Username"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <FormGroup
                    id="password"
                    type="password"
                    placeholder="Password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleClick}>Login</Button>
                {error && <p className="text-red-500">{error}</p>}
            </div>

        </>
    )
}

export default LoginForm;