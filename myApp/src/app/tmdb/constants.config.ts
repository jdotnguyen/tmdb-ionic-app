export class Constants {
    public static get ENDPOINT(): string { return "https://api.themoviedb.org/3/"; };
    public static get API_KEY(): string { return "7daac836cb57a577537d2d5ba0313dc8"; };
    public static get ERRORCODES(): Array<any> { return [400, 401, 403, 404, 500] };
}