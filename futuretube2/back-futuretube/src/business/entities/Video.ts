export default class Video {
    constructor(
        private id: string,
        private userId: string,
        private url: string,
        private title: string,
        private description: string
    ) { }

    getId = () => this.id
    getUserId = () => this.userId
    getUrl = () => this.url
    getTitle = () => this.title
    getDescription = () => this.description
}