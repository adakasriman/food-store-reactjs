import Cookies from 'js-cookie';

export const authenticateUser = async (email, password) => {
    if (email === 'user@example.com' && password === 'password') {
        Cookies.set('username', email, { expires: 1 });
        return Promise.resolve();
    } else {
        return Promise.reject(new Error('Invalid email or password'));
    }
};

export const isAuthenticated = () => {
    const username = Cookies.get('username');
    console.log(!!username);
    return !!username; 
};
