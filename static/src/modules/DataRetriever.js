export class DataRetriever {
    constructor() {
        this.movies = null;
    }
    async load() {
        const url = 'src/data.json';
        if(!this.movies) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                this.movies = data.movies;
            } catch (error) {
                console.log(error);
            }
        }
        console.log(this.movies);
        return this.movies;
    }
}