# Zoomera  

Zoomera is a cutting-edge web application designed for seamless real-time communication and collaboration. It provides users with features like video conferencing, chat, and file sharing, making it ideal for remote work, e-learning, and virtual meetups.  

## Features  

- **User Authentication:** Secure login and registration using email or third-party providers (OAuth).  
- **Real-Time Communication:** Live video, audio, and chat capabilities with low latency.  
- **File Sharing:** Upload and share files directly in meetings.  
- **Responsive Design:** Optimized for devices of all sizes, from desktops to smartphones.  
- **Scalable Architecture:** Built to support multiple users and concurrent meetings.  
- **Interactive UI:** User-friendly interface for a seamless experience.  

## How It Works  

1. **User Authentication:**  
   Users can sign up or log in securely. Authentication is handled using JSON Web Tokens (JWT).  

2. **Join/Create Meetings:**  
   - Users can create meetings with unique IDs or join existing ones by entering a meeting code.  
   - Host controls for managing participants.  

3. **Real-Time Interaction:**  
   - Video and audio streams are managed via WebRTC.  
   - Chat functionality is powered by WebSockets for instant messaging.  

4. **File Sharing:**  
   - Integrated file upload system allows sharing of documents and media in real-time.  

5. **Responsive Design:**  
   - Frontend design ensures compatibility across browsers and devices, maintaining usability on all platforms.  

## Technologies Used  

### Frontend  
- **HTML5, CSS3**  
- **JavaScript**  
- **React.js** for building dynamic user interfaces.  
- **Bootstrap** for responsive design.  

### Backend  
- **Node.js** and **Express.js** for server-side logic.  
- **Socket.IO** for real-time communication.  

### Database  
- **MongoDB** for user and meeting data storage.  

### Deployment  
- **Frontend:** Hosted on Vercel.  
- **Backend:** Hosted on Render.  

### Other Technologies  
- **WebRTC:** For real-time video and audio streaming.  
- **AWS S3:** For storing and serving uploaded files.  

## Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/zoomera.git
