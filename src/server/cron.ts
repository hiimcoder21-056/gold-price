import { requestNewApiKey } from "@/services/apikey.service";
import cron from "node-cron";

cron.schedule("0 23 */14 * *", async () => {
    await requestNewApiKey();
});
