import * as argon2 from "argon2";

class AuthUtils {
  public async comparePasswords({
    hashedPassword,
    plainPassword,
  }: {
    hashedPassword: string;
    plainPassword: string;
  }): Promise<boolean> {
    const isVerified = await argon2.verify(hashedPassword, plainPassword);
    return isVerified;
  }
}

export default new AuthUtils();
