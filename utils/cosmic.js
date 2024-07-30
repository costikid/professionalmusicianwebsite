import { createBucketClient } from "@cosmicjs/sdk";
const cosmic = createBucketClient({
    bucketSlug: process.env.BUCKET_SLUG || "",
    readKey: process.env.BUCKET_READ_KEY || "",
});

export default cosmic; //function to use when cosmic js cms is needed 