export class Token {
    token:string;
    user:string;
    type:string;

    constructor(token:string, user:string, type:string) {
      this.token = token;
      this.user = user;
      this.type = type;
    }
}