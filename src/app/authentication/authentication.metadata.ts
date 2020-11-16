interface LoginResponseData {
    status: boolean;
    message?: string;
    token: any;
}

interface ResponseDataRegister {
    status: boolean;
    message: string;
    data?: object;
}
