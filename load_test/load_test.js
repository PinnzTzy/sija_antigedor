import http from 'k6/http';
import {sleep} from 'k6';

export const options ={
    iterations:10,
    VUs:10,
};


export default function(){
    http.get('https://komdigi.go.id/');

    sleep(1);
}