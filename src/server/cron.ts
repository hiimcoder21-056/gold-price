import { requestNewApiKey } from "@/services/apikey.service";
import cron from "node-cron";

cron.schedule("0 23 */14 * *", async () => {
    console.log("🔁 Refreshing VNAppMob API key...");
    await requestNewApiKey();
});
