import { IUser, IUserData } from "@/types";
import Cookie from 'js-cookie';

const BASE_URL = process.env.NEXT_PUBLIC_BASEURL;

const UserService = {
    authentication: async ({ userName, password }: IUser) => {
        const url = `${BASE_URL}/admin`;
        const headers = {
            'Content-Type': 'application/json'
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ userName, password })
            });

            const data = await response.json();
            return { data, status: response.status };
        } catch (error) {
             return { status: 500, data: null };
        }
    },

    getAllUser: async () => {
        const url = `${BASE_URL}/admin/users`;
        const token = Cookie.get('auth_token');
        const headers = {
            'Authorization': `Bearer ${token || ''}`,
            'Content-Type': 'application/json'
        };

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers
            });

            const data = await response.json();
            return { status: response.status, data };
        } catch (error) {
            console.error('Erro na requisição:', error);
            return { status: 500, data: null };
        }
    },

    verifyToken: async (token: string) => {
        const url = `${BASE_URL}/admin/verify-token`;
        const headers = {
            'Authorization': `Bearer ${token || ''}`,
            'Content-Type': 'application/json'
        };

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers
            });

            const data = await response.json();
            return { status: response.status, data };
        } catch (error) {
            console.error('Erro na requisição:', error);
            return { status: 500, data: null };
        }
    },
    storeUser: async ({ name, password, level, phone_number, job_title, created_date }:IUserData)=>{
        console.log("chegou aqui")
        const url = `${BASE_URL}/admin/create`;
        const headers = {
            'Content-Type': 'application/json'
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ name, password, level, phone_number, job_title, created_date })
            });

            const data = await response.json();
            return { data, status: response.status };
        } catch (error) {
            return { status: 500, data: null };
        }
    }
}

export default UserService;

