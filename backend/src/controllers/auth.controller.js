

export const signup = (req,res) => {
    //res.send("signup route");
    const {fullName,email,password}= req.body
    try {
        if(password.lenght < 6){
            return res.status(400).json({message: "Password must be at least 6 characters"});
        }
        const user = await UserActivation.findOne({email})

        if (user) return res.status(400).json({message: "Email already exists"});

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            fullName,
            email,
            password:hashedPassword
        })

        if(newUser){
            //generate jwt token here

        }else {
            res.status(400).json({message: "Invaild user data"});
        }
        
    } catch (error) {
        
    }
};

export const login = (req,res) => {
    res.send("login route");
};

export const logout = (req,res) => {
    res.send("logout route");
};

