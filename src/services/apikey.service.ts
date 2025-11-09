import { BASE_URL, PATH_KEY } from "@/config";
// import { updateEnvKey } from "@/utils/env.utils";
import axios from "axios";

export async function requestNewApiKey(): Promise<string> {
    console.log('requestNewApiKey: ')
    const { data } = await axios.get(`${BASE_URL}/${PATH_KEY}?scope=gold`);
    console.log('data: ', data)
    const apiKey = data?.results;
    if (!apiKey) throw new Error("Không lấy được API key");

    // updateEnvKey("NEXT_PUBLIC_API_KEY", apiKey);

    console.log(`[${new Date().toISOString()}] ✅ Lấy lại API key mới`);
    return apiKey;
}