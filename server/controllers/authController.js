import connexion from "../db.js"
export const signup = async ( req ,res)=>{
    const {userName , email , password} = req.body; // destructure  userName , email and password form body of req

    if(!userName || !email || !password){
        return res.status(400).json({message : "Please fill all the fiels"})
    }
    else{
        try{
            // Send an sql query 
            const sql = "INSERT INTO users (name, email, password) (?, ?, ?)"
            const [result] =  await connexion.execute(sql,[userName, email, password]);
            res.status(201).json({
                message : "User created successfully",
                userId : result.insertId
            })
        }catch(error){
                if(error.code === "ER_DUP_ENTRY"){
                    return res.status(400).json({message:"Email already exists"})
                }
                console.error("Database error :" , error)
        }
    }
}