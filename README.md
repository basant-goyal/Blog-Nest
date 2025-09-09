# BlogNest - A Modern Full-Stack Blogging Platform

BlogNest is a dynamic and feature-rich blogging application built with a modern tech stack. It provides a seamless and secure platform for users to create, manage, and share their thoughts with the world. The application leverages **React.js** for a reactive user interface, **Appwrite** as a powerful backend-as-a-service, and **Redux Toolkit** for robust state management.

---

## ✨ Key Features

- **User Authentication:** Secure user registration, login, and session management powered by Appwrite Auth.
- **Full CRUD Functionality:** Authenticated users can Create, Read, Update, and Delete their own blog posts.
- **Rich Text Editor:** An intuitive **TinyMCE** editor for creating beautifully formatted blog posts with ease.
- **Image Uploads:** Users can upload a featured image for each blog post, with storage managed by Appwrite.
- **Post Status Control:** Ability to set posts as 'active' or 'inactive', controlling their public visibility.
- **Responsive Design:** A clean and modern UI built with **Tailwind CSS**, ensuring a great user experience on any device.
- **Client-Side Routing:** Seamless navigation between pages like "All Posts," "My Posts," and "Add Post" using **React Router DOM**.
- **Protected Routes:** Certain routes are protected, accessible only to authenticated users.
- **Centralized State Management:** Efficient and predictable state control across the application using **Redux Toolkit**.

---

## 🛠️ Tech Stack

- **Frontend:**
  - [React.js](https://reactjs.org/)
  - [Redux Toolkit](https://redux-toolkit.js.org/)
  - [React Router DOM](https://reactrouter.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
- **Backend (BaaS):**
  - [Appwrite](https://appwrite.io/) (Authentication, Database, Storage)
- **Form Management:**
  - [React Hook Form](https://react-hook-form.com/)
- **Text Editor:**
  - [TinyMCE](https://www.tiny.cloud/)

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- An [Appwrite](https://appwrite.io/) account for backend services.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/BlogNest.git](https://github.com/your-username/BlogNest.git)
    cd BlogNest
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up your Appwrite backend:**
    - Log in to your Appwrite console and create a new project.
    - Create a new Web App and add its details (hostname, etc.).
    - In **Auth**, enable the Email/Password provider.
    - In **Databases**, create a new database.
    - Inside the database, create a collection for your posts with the required attributes (e.g., `title`, `content`, `featuredImage`, `status`, `userId`).
    - In **Storage**, create a new bucket for storing featured images.
    - Note down your **Project ID**, **API Endpoint URL**, **Database ID**, **Collection ID**, and **Bucket ID**.

4.  **Create a `.env` file:**
    - Create a `.env` file in the root directory of the project.
    - Add the following environment variables with your Appwrite project credentials:

    ```env
    VITE_APPWRITE_URL="YOUR_APPWRITE_ENDPOINT_URL"
    VITE_APPWRITE_PROJECT_ID="YOUR_APPWRITE_PROJECT_ID"
    VITE_APPWRITE_DATABASE_ID="YOUR_APPWRITE_DATABASE_ID"
    VITE_APPWRITE_COLLECTION_ID="YOUR_APPWRITE_COLLECTION_ID"
    VITE_APPWRITE_BUCKET_ID="YOUR_APPWRITE_BUCKET_ID"
    ```

5.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application should now be running on `http://localhost:5173`.

---

## 📸 Screenshots

| All Posts Page | Add Post Page |
| :---: | :---: |
| ![All Posts Page](https://placehold.co/600x400/1e293b/ffffff?text=All+Posts+Screenshot&font=sans) | ![Add Post Page](https://placehold.co/600x400/1e293b/ffffff?text=Add+Post+Screenshot&font=sans) |

---

## 📬 Contact

Basant Goyal - [GitHub](https://github.com/basant-goyal) - [LinkedIn](https://www.linkedin.com/in/basant-goyal-57015728a/)

Project Link: [https://github.com/basant-goyal/BlogNest](https://github.com/basant-goyal/BlogNest)
