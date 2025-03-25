import { GoogleGenerativeAI } from "@google/generative-ai";

  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas for 3 days for couple with a cheap budget , give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placename, Place Details, Place Image Url, geo coordinates, ticket Pricing. Time travel each of the location for 3 days with each day plan with best time to visit in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"tripDetails\": {\n    \"destination\": \"Las Vegas\",\n    \"duration\": \"3 days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\"\n  },\n  \"hotels\": [\n    {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"60-100 USD/night (variable)\", \n      \"hotelImageUrl\": \"https://www.excalibur.com/content/dam/excalibur/property/hero/excalibur-las-vegas-exterior-hero.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0993,\n        \"longitude\": -115.1762\n      },\n      \"rating\": \"3.5 stars\",\n      \"description\": \"Medieval-themed hotel with affordable rooms, multiple dining options, and a casino.\"\n    },\n    {\n      \"hotelName\": \"Luxor Hotel & Casino\",\n      \"hotelAddress\": \"3900 S Las Vegas Blvd, Las Vegas, NV 89119\",\n      \"price\": \"70-120 USD/night (variable)\",\n      \"hotelImageUrl\": \"https://www.luxor.com/content/dam/luxor/property/hero/luxor-las-vegas-exterior-hero.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0954,\n        \"longitude\": -115.1762\n      },\n      \"rating\": \"3.5 stars\",\n      \"description\": \"Egyptian-themed hotel with affordable rooms, various attractions, including a casino and a theater.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"50-90 USD/night (variable)\",\n      \"hotelImageUrl\": \"https://www.circuscircus.com/content/dam/cc/property/hero/circus-circus-las-vegas-exterior-hero.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1215,\n        \"longitude\": -115.1693\n      },\n      \"rating\": \"3 stars\",\n      \"description\": \"Family-friendly hotel with an Adventuredome theme park, affordable rooms, and a casino.\"\n    }\n   ], \n  \"itinerary\": {\n    \"day1\": {\n      \"bestTimeToVisit\": \"Afternoon/Evening\",\n      \"plan\": [\n        {\n          \"placeName\": \"Welcome to Fabulous Las Vegas Sign\",\n          \"placeDetails\": \"Iconic welcome sign\",\n          \"placeImageUrl\": \"https://www.lasvegashowto.com/wp-content/uploads/2015/04/welcome-to-fabulous-las-vegas-sign-facts.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.0815,\n            \"longitude\": -115.1744\n          },\n          \"ticketPricing\": \"Free\"\n        },\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Pedestrian mall with light shows and live music\",\n          \"placeImageUrl\": \"https://www.vegasexperience.com/wp-content/uploads/2017/06/FremontStreetExperience.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1699,\n            \"longitude\": -115.1406\n          },\n          \"ticketPricing\": \"Free (some shows/attractions may have fees)\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"bestTimeToVisit\": \"Daytime\",\n      \"plan\": [\n        {\n          \"placeName\": \"The High Roller Observation Wheel\",\n          \"placeDetails\": \"Giant Ferris wheel with panoramic city views\",\n          \"placeImageUrl\": \"https://www.caesars.com/content/dam/linq/Shows-Entertainment/High-Roller/High-Roller-Observation-Wheel-Las-Vegas-P2.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1178,\n            \"longitude\": -115.1715\n          },\n          \"ticketPricing\": \"25-35 USD\"\n        },\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"Stunning floral displays that change seasonally\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/bellagio/Hotel/Amenities/Conservatory-Botanical-Garden/bellagio-conservatory-botanical-garden-spring-hero.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1135,\n             \"longitude\": -115.1764\n          },\n          \"ticketPricing\": \"Free\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"bestTimeToVisit\": \"Anytime\",\n      \"plan\": [\n        {\n          \"placeName\": \"Seven Magic Mountains\",\n          \"placeDetails\": \"Colorful public art installation south of the Strip\",\n          \"placeImageUrl\": \"https://www.clarkcountynv.gov/sites/default/files/inline-images/7MM_north_view.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 35.9981,\n            \"longitude\": -115.1153\n          },\n          \"ticketPricing\": \"Free (parking fee may apply)\"\n        },\n        {\n          \"placeName\": \"Arts District\",\n          \"placeDetails\": \"Trendy area with art galleries, murals, and cafes\",\n          \"placeImageUrl\": \"https://static.wixstatic.com/media/222725_a1b039b145f74e84a42f6556c9b06135~mv2.jpg/v1/fill/w_818,h_570,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1stFriMay2022PhotoCredit_BryanReyes.jpg\",\n           \"geoCoordinates\": {\n            \"latitude\": 36.1719,\n            \"longitude\": -115.1419\n          },\n          \"ticketPricing\": \"Free (fees for individual galleries/events)\"\n        }\n      ]\n    }\n  }\n}\n```"},
          ],
        },
      ],
    });
