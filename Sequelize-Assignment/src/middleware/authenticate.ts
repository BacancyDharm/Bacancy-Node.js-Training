import jwt from "jsonwebtoken";

const authenticate = (req: any, res: any, next: any) => {
    const token = req.headers.authorization?.split(" ")[0];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, "secret");
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

export default authenticate;