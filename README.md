# Product Management App

A simple product management application built with React. This app allows to view, add, edit, and delete products while filtering them by categories.

## ⚙️ Installation

Follow the steps below to get the project running on your local machine:

### Clone the repository:
```bash
git clone https://github.com/nikkvijay/Product-Management-App.git
```

```bash
cd MyStore
```

Install dependencies
```bash
  npm install
```

Start the development server:
```bash
  npm run dev
```

Open your browser and visit:
```bash
  http://localhost:5173
```

## 📜Usage/Examples

```javascript
1.Homepage: Displays all products. You can filter products by category using the navigation sidebar.
2.Product Details: Click on any product to view detailed information. Options to edit or delete the product are available on this page.
3.Add New Product: Use the "Add new product" button in the sidebar to add a new product.
4.Edit Product: Navigate to the product details page and click "Edit" to modify the product details.
5.Delete Product: Navigate to the product details page and click "Delete" to remove the product.

```


## 🌟 Features

- Display a list of products with details.
- Filter products by categories.
- Add, edit, and delete products.
- Responsive design for better user experience.
- Products persist using `localStorage`.



## 📂 Folder Structure

````plaintext
├── public/            # Public assets like index.html and static images
├── src/
│   ├── components/    # React components (Home, Details, Nav, etc.)
│   ├── utils/         # Utility files (axios instance, context)
│   ├── App.js         # Main application file
│   ├── index.js       # Entry point for the app
│   ├── styles.css     # Global styles
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
