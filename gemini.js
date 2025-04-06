import { GoogleGenAI } from "@google/genai";
import { get } from "http";

const ai = new GoogleGenAI({ apiKey: "AIzaSyAx_SFrDQJItOQV2NKwqKz-Rxz7yLL_p5A" });


async function getZipcode(preferences, zipcode) {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: "Find the best " + preferences + " at this city: " + zipcode,
        });
        
        console.log(response.text); // Ensure this logs the resolved response
    } catch (error) {
        console.error("Error generating content:", error);
    }
}




const testa = "gyms";
const testb = "Oceanside, CA";
getZipcode(testa, testb);