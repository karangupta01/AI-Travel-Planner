# ✈️ AI Travel Planner

AI Travel Planner is a smart and intuitive travel planning application built using **React.js** that leverages **Google Gemini AI** to create personalized travel itineraries based on user preferences. It integrates Google APIs, real-time location suggestions, and seamless booking features for an enhanced travel experience.

---

## 📚 Features

✅ **AI-Powered Itineraries**: Get personalized travel plans using Google Gemini AI.  
✅ **Google Places Autocomplete**: Suggests places and destinations dynamically.  
✅ **User Authentication**: Secure login with Google OAuth.  
✅ **Responsive UI**: Built with Tailwind CSS for seamless design across devices.  
✅ **Theme Support**: Light and dark mode with Next Themes.  
✅ **Real-time Notifications**: Instant feedback with Sonner notifications.  
✅ **Map Integration**: Real-time map views and directions.  

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios, Lucide React  
- **AI & API Integration:** Google Gemini AI, Google Places API, OAuth API  
- **State Management:** React Hooks  
- **UI/UX:** Radix UI for dialogs and popovers  
- **Authentication:** Google OAuth  
- **Notifications:** Sonner  

---

## 📦 Dependencies

The project uses the following dependencies:

```json
"dependencies": {
  "@google/generative-ai": "^0.24.0",
  "@radix-ui/react-dialog": "^1.1.6",
  "@radix-ui/react-popover": "^1.1.6",
  "@radix-ui/react-slot": "^1.1.2",
  "@react-oauth/google": "^0.12.1",
  "@tailwindcss/vite": "^4.0.14",
  "axios": "^1.8.4",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "firebase": "^11.5.0",
  "lucide-react": "^0.483.0",
  "next-themes": "^0.4.6",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-google-places-autocomplete": "^4.1.0",
  "react-icons": "^5.5.0",
  "react-router-dom": "^7.4.0",
  "sonner": "^2.0.1",
  "tailwind-merge": "^3.0.2",
  "tailwindcss": "^4.0.14",
  "tw-animate-css": "^1.2.4"
}
```

---

## 📂 Project Structure

```
/ai-travel-planner
├── /public
├── /src
│   ├── /assets
│   ├── /components
│   ├── /pages
│   ├── /services
│   ├── /utils
│   ├── App.js
│   ├── index.js
├── /node_modules
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/karangupta01/ai-travel-planner.git
cd ai-travel-planner
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```
REACT_APP_GOOGLE_API_KEY=<your-google-api-key>
REACT_APP_GEMINI_API_KEY=<your-gemini-api-key>
REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
REACT_APP_FIREBASE_PROJECT_ID=<your-project-id>
```

### 4. Run the Application

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📄 Usage

1. **Sign in** using Google OAuth to access the application.  
2. **Enter your preferences** for your travel destination and dates.  
3. Get an **AI-generated travel itinerary** customized for you.  
4. **View suggestions** for places to visit and add them to your itinerary.  
5. **Switch themes** between light and dark mode for a personalized experience.  

---

## 🔥 Key APIs Used

- **Google Places API**: For real-time suggestions and autocomplete.  
- **Google Gemini AI**: For generating personalized itineraries.  
- **Google OAuth API**: For secure login and user authentication.  

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork the repository and submit a pull request. For major changes, please open an issue first to discuss improvements.

---

## 🐛 Bug Reports & Feedback

If you encounter any issues or have suggestions, feel free to [open an issue](https://github.com/karangupta01/ai-travel-planner/issues).

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 📧 Contact

For any inquiries, reach out to:  
📩 Email: karangupta1017@gmail.com 
💬 LinkedIn: www.linkedin.com/in/karan-gupta-3aa117248

---

Happy Traveling! 🌍✨
