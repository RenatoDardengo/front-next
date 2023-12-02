
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
        phoneNumber?: string;
        jobTitle?: string;
        status?: boolean;
        createdDate?: string;
        updatedDate?: string;

}
export interface IUserProps {
    openModal: (param: string, data?: ProductData, title?: string, fetchUsers?: () => Promise<void>) => void;


}