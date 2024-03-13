# 📱 React Native Photo Gallery App

This is a comprehensive guide to build a [React Native](https://reactnative.dev/) Application using the [Expo Framework](https://docs.expo.dev/). Basically it's a Photo Gallery Application with infinite scroll that interacts with the [Picsum API](https://picsum.photos/) to obtain images.

## 📸 Screenshots

<img src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?q=80&w=1016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="300">

## 🔥 Key takeaways

- Interact with and API.
- Use the FlatList Component (React Native Core Component).
- How to use useReducer (Update State).
- How to run the project in an IOS / Android Simulator.

## 💻 Project Structure

```bash
PhotoGallery
├── api
│   └── picsum.js
├── components
│   └── PhotoGrid.js
├── reducers
│   └── photos.js
└── App.js
```

### ⚙️ Configuration

In order to build this project you need to set up your development environment. You will need to install the following:

1. **Node.js**: Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run Javascript code in the server-side. React Native relies on Node.js and npm to install dependencies and manage packages.
2. **Xcode**: Xcode enables you to develop, test and distribute apps for all Apple platforms.
3. **Android Studio**: Official Integrated Development environment for Android app development.
4. **Expo Framework**: Expo is an open-source platform for making universal native applications that run on Android, IOS and the Web. The Expo framework it doesn't need to be installed you just need to run this command in your terminal.

   ```bash
   npx create-expo-app my-app
   ```

_You are going to use Xcode and Android Studio just to run the simulator for the app._

### 🍎 IOS Simulator

### 🤖 Android Simulator

## ✅ Getting Started

First we need to create the method that interacts with the Picsum API to fetch the images. The method needs to be asynchronous and receive a `page` parameter to reuse the same method when requesting more images.

🗂️ **api/picsum.js**

```javascript
const API_URL = "https://picsum.photos/v2/list";

export const getImages = async (page = 1) => {
  try {
    const data = await fetch(`${API_URL}?page=${page}`);
    const photos = await data.json();
    return photos;
  } catch (error) {
    console.log(error);
  }
};

export const formatImage = (id, size) => {
  return `https://picsum.photos/id/${id}/${size}`;
};
```

📸 **Image format**

```bash
[
    {
        "id": "0",
        "author": "Alejandro Escamilla",
        "width": 5616,
        "height": 3744,
        "url": "https://unsplash.com/...",
        "download_url": "https://picsum.photos/..."
    }
]
```

The second method is used to format the images based on the device screen-size. The main idea is the following, we fetch the images with the `getImages` method and then use the id's to get a specific version of every image. The `API_URL` is the based url to get a list of images from the Picsum API and the second url is used to get an image with a specific size.

_Check the [Picsum API](https://picsum.photos/) website to see more methods_
