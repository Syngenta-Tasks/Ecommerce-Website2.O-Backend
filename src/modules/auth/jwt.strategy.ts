import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service';

export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'asdftyqwerty@!#784f',
    });
  }
  async validate(payload: any){
    return{
      id: payload.sub,
      name: payload.name,
      roles: payload.roles,
    }
  }


}