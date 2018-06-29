export class ImageModel {
    constructor(
        public imageId?: number,
        public imageName?: string,
        public pashminaId?: number,
        public publicId?: number   
    ) {
        this.imageId = imageId;
        this.imageName = imageName;
        this.pashminaId = pashminaId;
        this.publicId = publicId;
    }
}

