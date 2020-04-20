"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Video {
    constructor(id, userId, url, title, description) {
        this.id = id;
        this.userId = userId;
        this.url = url;
        this.title = title;
        this.description = description;
        this.getId = () => this.id;
        this.getUserId = () => this.userId;
        this.getUrl = () => this.url;
        this.getTitle = () => this.title;
        this.getDescription = () => this.description;
    }
}
exports.default = Video;
