import { StaticImageData } from "next/image";

export interface userDataI {
    id: number,
    name: string,
    profilePhoto?: string | StaticImageData,
    email: string,
    password: string,
    dateRegestration: string,
    userName: string
}