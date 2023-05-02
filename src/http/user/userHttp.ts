import fetch from "../axiosHelper";

export async function getUsersHttp() {
    return await fetch(`/public/v2/users?page=1&per_page=20`, "get", null)
}