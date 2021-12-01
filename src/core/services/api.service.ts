import axios from "axios";
require('dotenv').config();
interface Request {
    resource: string,
    params?: object,
    slug?: string
}

/**
 * Service to call HTTP request via Axios
 */
const ApiService = {
    init: (): void => {
        axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
    },
    /**
     * Set the default HTTP request headers
     */
    setHeader:(): void => {
        axios.defaults.headers.common["Authorization"] = `Token {JwtService.getTokenExample()}`;
    },
    /**
     * Send the GET HTTP request with params
     * @param request
     */
    query: (request: Request): Promise <any> => {
        const { resource, params } = request;
        return axios.get(resource, params).catch(error => {
            throw new Error(`ApiService ${error} - ${resource} ${params}`);
        });
    },

    /**
     * Send the GET HTTP request
     * @returns {*}
     * @param request
     */
    get: (request: Request): Promise <any> => {
        const {resource, slug} = request;
        return axios.get(`${resource}/${slug}`).catch(error => {
            throw new Error(`ApiService ${error} - ${resource}/${slug}`);
        });
    },

    /**
     * Set the POST HTTP request
     * @returns {*}
     * @param request
     */
    post: (request: Request): Promise <any> => {
        const { resource, params } = request;
        return axios.post(`${resource}`, params).catch(error => {
            throw new Error(`ApiService ${error} - ${resource}`);
        });
    },

    /**
     * Send the UPDATE HTTP request
     * @returns {IDBRequest<IDBValidKey> | Promise<void>}
     * @param request
     */
    update: (request: Request): Promise <any> => {
        const { resource, slug ,params } = request;
        return axios.put(`${resource}/${slug}`, params).catch(error => {
            throw new Error(`ApiService ${error} - ${resource}`);
        });
    },

    /**
     * Send the PUT HTTP request
     * @returns {*}
     * @param request
     */
    put: (request: Request): Promise <any> => {
        const { resource, params } = request;
        return axios.put(`${resource}`, params).catch(error => {
            throw new Error(`ApiService ${error} - ${resource}`);
        });
    },

    /**
     * Send the DELETE HTTP request
     * @returns {*}
     * @param request
     */
    delete: (request: Request): Promise <any> => {
        const { resource } = request;
        return axios.delete(resource).catch(error => {
            throw new Error(`[ApiService ${error} - ${resource}`);
        });
    }
}

export default ApiService;
