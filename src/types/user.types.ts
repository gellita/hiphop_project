export default interface IUser {
    id?: never | null,
    username: string,
    email: string,
    password: string,
    roles?: Array<string>
}