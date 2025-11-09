import { BASE_URL, PATH_KEY } from "@/config";
// import { updateEnvKey } from "@/utils/env.utils";
import axios from "axios";

export async function requestNewApiKey(): Promise<string> {
    const { data } = await axios.get(`${BASE_URL}/${PATH_KEY}?scope=gold`);
    const apiKey = data?.results;
    if (!apiKey) throw new Error("Không lấy được API key");

    // updateEnvKey("REACT_APP_API_KEY", apiKey);
    return apiKey;
}