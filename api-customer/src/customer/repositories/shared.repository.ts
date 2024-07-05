import { Injectable } from '@nestjs/common';
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { envs } from 'src/config';
import { promisify } from 'util';

const iv = randomBytes(16);

@Injectable()
export class SharedRepository {
    private readonly Key: string;
    constructor() {
      this.Key = envs.key;
    }

    public async EncrypAsync(textToEncrypt: string): Promise<string> {
        const password = this.Key;
    
        // The key length is dependent on the algorithm.
        // In this case for aes256, it is 32 bytes.
        const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
        const cipher = createCipheriv('aes-256-ctr', key, iv);
    
        const encryptedText = Buffer.concat([
          cipher.update(textToEncrypt),
          cipher.final(),
        ]);
        return encryptedText.toString('base64');
      }
    
      public async DecryptAsync(encryptedText: string) {
        const password = this.Key;
        const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
        const decipher = createDecipheriv('aes-256-ctr', key, iv);
        const buff = new Buffer(encryptedText, 'base64');
        const decryptedText = Buffer.concat([
          decipher.update(buff),
          decipher.final(),
        ]);
    
        return decryptedText;
      }
}