const validateLoginParameters = ( req, res, next) =>{
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({error: "Faltan email o password"});
    }
    next();
}

export { validateLoginParameters };