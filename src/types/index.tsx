
export interface ProductData {
    id?: number;
    name?: string,
    description?: string,
    quantity?: number;
    value?: string
}

export interface IUser {
    userName?: string;
    password?: string;
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}

export interface ErrorResponse {
    msg: string; 
}

export type ExitButtonProps = {
    onExit: () => void;
};

export type NavbarProps = {
    onCollapse: () => void;
    userName?:string;
    
};

export interface IUserData {
        id?: number;
        name?: string;
        password?: string;
        level?: number;
        phone_number?: string;
        job_title?: string;
        status?: boolean;
        created_date?: Date;
        updated_date?: Date;

}
export interface IUserProps {
    openModal: (param: string, data?: ProductData, title?: string) => void;


}