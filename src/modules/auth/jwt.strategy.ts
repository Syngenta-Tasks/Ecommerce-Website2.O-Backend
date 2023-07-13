import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy){
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'asdftyqwerty@!#784f',
    });
  }
  async validate(payload: any){
    return{
      id: payload.sub,
      name: payload.name,
      tenant: 'amitav',
    }
  }
}
