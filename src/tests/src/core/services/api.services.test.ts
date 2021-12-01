import axios from 'axios';
import ApiService from '../../../../core/services/api.service';

describe('test in ApiServices', ()=> {
    // starting the axios url base
    ApiService.init();

    test('checking for a configured url base', ()=> {
        const url:any = axios.defaults.baseURL;
        expect(url.split(":")[0]).toBe('https');
    });

    test('Testing ApiService.query()', async ()=>{
        const payload: Object = {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            query: 'Capitan America',
            page: '',
            include_adult: true,
            region: 'en-Us',
            year:'',
            primary_release_year: ''
        }
        const { data } = await ApiService.query({ resource: '/search/movie', params: { params: payload } });
        const { results } = await data;
        expect(results?.length).toBe(8);
    });

    test('Testing ApiService.get()', async ()=>{
        const { data } = await ApiService.get(
            { resource: '/movie', slug: `1885/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`}
        );
        const { results } = await data;
        expect(results?.length).toBe(results.length);
    });

    test('Testing ApiService.post()', async ()=> {
        const payload: Object = {
            value: 8.5
        }
        const { data } = await ApiService.post({ resource:`/movie/1885/rating?api_key=${process.env.REACT_APP_API_KEY}&guest_session_id=${process.env.REACT_APP_GUEST_SESSION_ID}`, params: payload });
        const { success } = await data;
        expect(success).toBe(true);
    });
});
