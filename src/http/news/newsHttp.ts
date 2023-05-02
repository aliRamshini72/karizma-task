import fetch from "../axiosHelper";

export async function getNewsHttp() {
    return await fetch(`/public/v2/posts?page=1&per_page=20`, "get", null)
}