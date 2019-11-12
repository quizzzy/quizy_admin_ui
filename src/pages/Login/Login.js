import React, { useState } from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
    Container,
    IconButton,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    Button,
    FormControl
} from "@material-ui/core";
import Bar from "../../components/Bar";

const Login = ({ fetchLogin, loginSuccess }) => {
    const useStyles = makeStyles(theme => ({
        form: {
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            margin: "0 auto"
        },
        input: {
            width: "100%!important",
            margin: "0 0 10px 0"
        },
        submit: {
            width: "100%!important",
            height: "56px"
        },
        margin: {
            margin: theme.spacing(1)
        },
        withoutLabel: {
            marginTop: theme.spacing(3)
        },
        textField: {
            width: 200
        },
        title: {
            textAlign: "center"
        }
    }));

    const classes = useStyles();

    const history = useHistory();

    const [loginData, setLoginData] = useState({
        login: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = event => {
        console.log("change", event.target.value);
        const { value, name } = event.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const onSubmit = event => {
        event.preventDefault();
        fetchLogin(loginData);
    };

    if (loginSuccess) {
        history.push("/profiles");
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <>
            <Bar />
            <Container fixed={true} maxWidth="lg" spacing={1}>
                <form className={clsx(classes.form)} onSubmit={onSubmit}>
                    <h1 className={classes.title}>Please login</h1>
                    <FormControl
                        className={clsx(classes.textField, classes.input)}
                        variant="outlined"
                    >
                        <InputLabel htmlFor="outlined-adornment-login">
                            Login
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-login"
                            name="login"
                            value={loginData.login}
                            onChange={handleInputChange}
                            placeholder="Enter login"
                            labelWidth={50}
                            required
                        />
                    </FormControl>
                    <FormControl
                        className={clsx(classes.textField, classes.input)}
                        variant="outlined"
                    >
                        <InputLabel htmlFor="outlined-adornment-password">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={loginData.password}
                            onChange={handleInputChange}
                            placeholder="Enter password"
                            required
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    <Button
                        variant="contained"
                        type="submit"
                        size="large"
                        color="primary"
                        className={clsx(classes.submit)}
                    >
                        Submit
                    </Button>
                </form>
            </Container>
        </>
    );
};

export default Login;
