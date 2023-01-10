import bcrypt from 'bcryptjs';

const BCRYPT_SALT_ROUNDS = 12;

export class HashManager {
  public hash = async (plaintext: string): Promise<string> => {
    const rounds = Number(BCRYPT_SALT_ROUNDS);
    const salt = await bcrypt.genSalt(rounds);
    const hash = await bcrypt.hash(plaintext, salt);

    return hash
  }

  public compare = async (plaintext: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(plaintext, hash)
  }
}