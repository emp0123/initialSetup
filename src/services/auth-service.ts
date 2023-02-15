import { BadCredentialException } from '../exceptions/bad-credential-exception';
import { execute } from '../config/database/queryWrapperMysql';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

type QueryResult = {
  username: string;
  email: string;
  password: string;
  userId: number;
  _id: number;
};

export const authService = {
  login: async (email: string, password: string) => {
    let query: string = `SELECT * FROM users WHERE email=?`;
    const result: any = await execute(query, [email]);
    if (!result.length) {
      throw new BadCredentialException();
    }
    let checkPassQuery: string = `SELECT * FROM users WHERE password=?`;
    const passResult: any = await execute(query, [password]);
    if (!result.length) {
      throw new BadCredentialException();
    }

    const user: any = result[0];
    const hashedPassword: string = user.password;
    let token: string;

    //TODO- Compare with hashed password                    
    let resultd: boolean = await bcrypt.compare(password, hashedPassword)
    if (!resultd) {
      console.log(resultd); //false 
      throw new BadCredentialException();
    }
    // //JWT Token
    token = jwt.sign({ id: user._id, userId: user.userId, name: user.email }, "secret_key", { expiresIn: '365d', algorithm: 'HS256' });
    return {
      success: true, massage: "login Successful",
      refresh_token: user._id,
      access_token: token,
      id: user._id,
      email: user.email,
    };
  },
};
