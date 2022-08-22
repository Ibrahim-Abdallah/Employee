export class Auth {
    message: string = '';
    isAuthenticated: boolean = false;
    username: string = '';
    email: string = '';
    roles: string[] = [];
    token: string = '';
    expiresOn: Date = new Date;
}