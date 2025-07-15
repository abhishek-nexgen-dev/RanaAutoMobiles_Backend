import jwt, { Jwt, JwtPayload, SignOptions } from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import { envConstant } from '../constant/env.constant';

class JwtUtils {
  
 
  static generateToken(payload: object, expiresIn: string): string {
    const signOptions: SignOptions = {
      algorithm: 'RS256',
      expiresIn: expiresIn as any, // Default expiration time
    };

    return jwt.sign(payload, envConstant.privateKey as any, signOptions);
  }

  static verifyToken(token: string): JwtPayload {
    return jwt.verify(token, envConstant.publicKey as any, {
      algorithms: ['RS256'],
    }) as JwtPayload;
  }

  static decodeToken(token: string): JwtPayload | null {
    try {
      return jwt.decode(token) as JwtPayload;
    } catch (error: any) {
      console.error('Token decoding failed:', error.message);
      return null;
    }
  }
}

export default JwtUtils;
