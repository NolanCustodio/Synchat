import * as bcrypt from 'bcrypt';
import dotenv from 'dotenv'; dotenv.config();

 async function hashPassword(password: string): Promise<string>{
    const saltRounds: number = Number(process.env.SALT_ROUNDS);
    const rtnPass = await bcrypt.hash(password, saltRounds)
    return rtnPass;
}

export default hashPassword;