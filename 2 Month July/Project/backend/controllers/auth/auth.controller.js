// 1. /api/auth/register         ==>POST
// 2. /api/auth/login            ==>POST
// 3. /api/auth/Forget-password  ==>POST
// 4. /api/auth/reset-password   ==>POST
// 5. /api/auth/change-password  ==>POST

const User = require("../../models/user/user.model");
const { generateToken } = require("../../utils/jwtfunctions");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "gamil",
    auth: {
        user: "anshupatil1901@gamil.com",
        pass: "bpvf zyhb lpdk xyhz"
    },
});

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await User.findOne({ email })

        if (!userData) {
            return res.status(201).json({ message: "User Not Found in DB" })
        }

        const isPasswordIsTrue = await bcrypt.compare(password, userData.password)

        if (!isPasswordIsTrue) {
            return res.status(201).json({ message: "Password is Wrong" })
        }

        const token = generateToken(userData._id)
        res.status(201).json({ message: "Login Successful", token: token })

    } catch (error) {
        console.log(error)
    }
}

const registerUser = async (req, res) => {
    try {
        const { fullName, userName, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User({ fullName, userName, email, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ user: newUser, message: "User Registered Successfully" })

    } catch (error) {
        console.log(error)
    }
}

const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body
        const userData = await User.findOne({ email })

        if (!userData) {
            return res.status(201).json({ message: "User NOt found in db" })
        }

        const Otp = Math.floor(10000 + Math.random() * 1000)

        userData.resetOtp = Otp
        userData.resetOtpExpiration = Date.now() + 10 * 60 * 1000;    

        await userData.save();

        const mailOptions = {
            from: "anshupatil1901@gamil.com",
            to: email,
            subject: "Password resent OTP",
            text: `Your OTP for password reset is: ${Otp}.It will expire in 10 minutes.`,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: "Otp send to email", Otp: Otp })

    } catch (error) {
        console.log(error)
    }
};

const verifyOtp = async (req, res) => {
    try {
        const { email, Otp } = req.body
        const userData = await User.findOne({ email })

        if (!userData) {
            return res.status(201).json({ message: "User not found in db" })
        }

        if (Otp !== userData?.resetOtp) {
            return res.status(201).json({ message: " Otp is Invalid" })
        }

        if (userData.resetOtpExpireation < Date.now()) {
            return res.status(201).json({ message: " Otp is Expired" })
        }
        const token = generateToken(userData._id)
        res.status(201).json({ message: "Otp verified Successfully", token: token })
    } catch (error) {

    }
}

const resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body
        let decode

        try {
            decode = jwt.verify(token, "JWT_SECRET");
        } catch (error) {
            return res.status(201).json({ message: "Token is not valid", error: error.message })
        }
        const userData = await User.findById(decode.id)
        if (!userData) {
            return res.status(201).json({ message: "User not found in db" })
        }

        userData.password = newPassword
        userData.save();
        return res.status(201).json({ message: "Password reset successfully" })
    } catch (error) {
        console.log(error)
    }
}

const changePassword = async (req, res) => {
    try {
        console.log("change-password API called")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    transporter,
    loginUser,
    registerUser,
    forgetPassword,
    verifyOtp,
    resetPassword,
    changePassword
}