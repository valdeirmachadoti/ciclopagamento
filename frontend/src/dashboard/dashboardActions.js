import axios from "axios";

const BASE_URL = 'http://localhost:3003/api';

export default function getSummary() {
    
    const request = axios.get(`${BASE_URL}/ciclopagamentos/summary`)
    return {
        type: 'OBTER_SUMMARY',
        payload: request
    }
}
