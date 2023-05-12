const validate = (userData, setErrors, errors) => {
    if(!userData.name)
        setErrors({...errors, email: "Por favor completa este campo"})
    else if (userData.email.length > 35) 
        setErrors({...errors, email: "No puede superar los 35 carácteres"})
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
        setErrors({...errors, email: "Email inválido"})
    } else {
        setErrors({...errors, email: ""})
    };


    if (userData.password.length < 6 || userData.password.length > 10) {
        setErrors({...errors, password: "entre 6 y 10 carácteres"})
    }
    else if (!/\d/.test(userData.password)) {
        setErrors({...errors, password: "al menos un número"})
    }
    else{
        setErrors({...errors, password: ""})
    };
    
};

 export default validate;

 