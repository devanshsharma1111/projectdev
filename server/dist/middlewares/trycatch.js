const TryCatch = (handler) => {
    return async (req, res, next) => {
        try {
            await handler(req, res, next);
        }
        catch (error) {
            let message = error?.message || "An unexpected error occurred.";
            if (typeof message === "string" && message.trim().startsWith("{")) {
                try {
                    const parsed = JSON.parse(message);
                    const details = parsed?.error?.details || [];
                    const reason = details[0]?.reason || "";
                    const apiMessage = parsed?.error?.message || "";
                    if (reason === "API_KEY_SERVICE_BLOCKED" || apiMessage.includes("API_KEY_SERVICE_BLOCKED")) {
                        message =
                            "Generative Language API is blocked or restricted for your API key. Please check Google Cloud Console (APIs & Services) for project 65084726692, ensure 'Generative Language API' is enabled, and check API Key Restrictions.";
                    }
                    else if (reason === "API_KEY_INVALID" || apiMessage.includes("API_KEY_INVALID")) {
                        message =
                            "Invalid Gemini API Key: Please get a valid API key from Google AI Studio (https://aistudio.google.com/app/apikey) and update API_KEY_GEMINI in server/.env.";
                    }
                    else if (reason === "ACCESS_TOKEN_TYPE_UNSUPPORTED" ||
                        parsed?.error?.status === "UNAUTHENTICATED" ||
                        parsed?.error?.code === 401) {
                        message =
                            "Google API Authentication Error (401): Please verify that your Gemini API key in server/.env is active and has access to Generative Language API in Google AI Studio / Google Cloud Console.";
                    }
                    else if (apiMessage) {
                        message = apiMessage;
                    }
                }
                catch {
                    // ignore JSON parse error
                }
            }
            res.status(500).json({
                message,
            });
        }
    };
};
export default TryCatch;
