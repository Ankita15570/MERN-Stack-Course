const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
    try {
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        return token;
    } catch (error) {
        console.error("Token generation token:", error);
       throw new Error("Token generation failed");
    }
};

const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token provided" });
        }
        const token = authHeader.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = { userId: decode.userId, };

        next();
    } catch (error) {
        console.error("Token verification error:", error);
        return res.status(401).json({ message: "Invalid or Expired token" });
    }
};

module.exports = { generateToken, verifyToken };
