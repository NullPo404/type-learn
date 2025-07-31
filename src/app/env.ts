if(!process.env.CAT_API_KEY) {
    throw new Error("CAT_API_KEY is not defined in the environment variables.");
}

export const CAT_API_KEY = process.env.CAT_API_KEY;