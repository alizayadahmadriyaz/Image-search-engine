# Image Search App

This is a simple image search application that uses the Unsplash API to fetch and display images based on the user's search keyword. The app allows users to search for images and view more results by clicking the "Show More" button.

## Features

- **Search functionality:** Users can enter a keyword in the search box to find related images.
- **Pagination:** More images can be loaded by clicking the "Show More" button.
- **External links:** Each image is clickable and redirects to the full image page on Unsplash.

## Technologies Used

- HTML
- CSS (for styling, not included in the script)
- JavaScript
- Unsplash API

## How It Works

1. The user enters a search keyword in the input box (`#search_box`).
2. When the "Search" button is clicked (`#searching`), the app fetches the first 12 images related to the keyword using the Unsplash API.
3. The images are displayed on the webpage, and each image links to the corresponding full page on Unsplash.
4. The user can click the "Show More" button (`#show-more-btn`) to load 12 more images at a time.

## Files

- `index.html` - HTML structure of the search page (not provided here).
- `style.css` - Styles for the app (not provided here).
- `script.js` - JavaScript file for handling the image search and pagination.

### Key Variables

- **`keyword`**: Stores the current search keyword entered by the user.
- **`page`**: Tracks the current page for pagination.
- **`client_Access`**: Your Unsplash API access key. Replace it with your own key if needed.
- **`value`**: The number of images to load when the "Show More" button is clicked.
- **`real_value`**: Keeps track of the actual number of images displayed on the page.

### Functions

- **`search_image()`**: Fetches images based on the user's keyword and displays them. It makes an API call to Unsplash and appends the images to the `#search_result` element.
  
- **`more_image()`**: Loads more images when the "Show More" button is clicked. It fetches more images based on the previous number and appends them to the results.

### Event Listeners

- The "Search" button (`#searching`) is linked to the `search_image()` function.
- The "Show More" button (`#show-more-btn`) is linked to the `more_image()` function.

## Getting Started

1. Clone the repository or copy the code into your project.
2. Replace the `client_Access` value with your own Unsplash API access key (if needed).
3. Open the `index.html` file in a web browser to run the application.

## API Documentation

- Unsplash API: [https://unsplash.com/documentation](https://unsplash.com/documentation)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
