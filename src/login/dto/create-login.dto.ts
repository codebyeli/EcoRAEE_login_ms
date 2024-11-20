export class CreateLoginDto {
    name?: string;
    lastName?: string;
    email?: string;
    birthday?: string;
    username?: string;
    password?: string;
}

export class AccessLoginDto {
    username: string;
    password: string;
}

export class ForgotPasswordDto {
    email: string;
    username: string;
    password: string;
}