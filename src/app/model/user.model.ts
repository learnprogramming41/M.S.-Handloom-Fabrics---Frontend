export class UserModel {
    constructor(
        public userId?: number,
        public fullName?: string,
        public email?: string,
        public contact?: string,
        public address?: string,
        public username?: string,
        public password?: string,
        public createdAt?: Date,
        public enabled?: boolean,
        public userType?: string
    ) {
        this.userId = userId,
            this.fullName = fullName,
            this.email = email,
            this.contact = contact,
            this.address = address,
            this.username = username,
            this.password = password,
            this.createdAt = createdAt,
            this.enabled = enabled,
            this.userType = userType
    }
}

