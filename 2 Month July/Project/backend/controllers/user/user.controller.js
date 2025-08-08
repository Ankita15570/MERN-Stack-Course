// 1./api/user/birthday           ===> POST
// 2./api/user/profile/:userId    ===> GET
// 3./api/user/profile/:userId    ===> PUT
// 4./api/user/profile/:userId    ===> DELETE

const User = require("../../models/user/user.model")

const getUserProfile =async (req , res) =>{
    try {
        console.log(req.user.userId, "User-Id")
        const userData = await User.findById(req.user.userId);
    
         res.status(201).json({ message: " get user  Successfully" ,userData })
    } catch (error) {
        
    }
}
 
const updateuserprofile = async(req , res) =>{
    try {
         const userId = req.user.userId;
         const {fullName, userName ,mobileNo} = req.body;
         const updateuser = await User.findByIdAndUpdate( userId ,{
            fullName, 
            userName ,
            mobileNo
         },
         {
            new:true
         }
        );
        res.status(201).json({message:"User Updated" ,
            userData:updateuser
        })
    } catch (error) {
        console.log(error.message)
        res.json({message:error.message})
    }
}

const deleteUserProfile =async (req , res) =>{
    try {
        const userId = req.user.userId;
        const deleteuser = await User.findByIdAndDelete(userId)

        res.status(201).json({
            message:"delete UserProfile Successfully",

        })
    } catch (error) {
         console.log(error.message)
        res.json({message:error.message})
    }
}

module.exports = {
    getUserProfile,
    updateuserprofile,
    deleteUserProfile 
}