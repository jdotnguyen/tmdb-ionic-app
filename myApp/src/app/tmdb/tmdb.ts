import { Injectable } from "@angular/core";
import { forkJoin } from "rxjs";
import { catchError } from "rxjs/internal/operators";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Constants } from './constants.config';
import { throwError } from 'rxjs';

@Injectable()
export class TMDbService {
    _baseUrlMovie = '';
    _baseUrlPerson = '';
    _baseUrlCompany = '';
    _baseUrlDiscovery = '';
    _apiKey = '';
    _errorCodes = [];
    _httpSettings = {
        responseType: 'text'
    };
    _session_key = '';
    _data = {};

    constructor(
        private _http: HttpClient
    ) {
        this._baseUrlMovie = Constants.ENDPOINT + 'movie/';
        this._baseUrlPerson = Constants.ENDPOINT + 'person/';
        this._baseUrlCompany = Constants.ENDPOINT + 'company/';
        this._baseUrlDiscovery = Constants.ENDPOINT + 'discover/';
        this._apiKey = Constants.API_KEY;
        this._errorCodes = Constants.ERRORCODES;
    }

    /**
     * GET Now Playing
     */
    getMoviesNowPlaying() {
        return this._http.get(this._baseUrlMovie + 'now_playing?api_key=' + this._apiKey)
            .pipe(map(content => {
                return content["results"];
            }));
    }

    /**
     * GET Now Playing
     */
    getMoviesWhatsHot() {
        return this._http.get(this._baseUrlMovie + 'popular?api_key=' + this._apiKey)
            .pipe(map(content => {
                return content["results"];
            }));
    }
}
