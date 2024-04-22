const SharePopup = ({ url, title, onClose }) => {
  const shareOnSocialMedia = (socialMedia) => {
    let shareUrl = "";
    switch (socialMedia) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`;
        break;
      // Add cases for other social media platforms
      default:
        break;
    }
    window.open(shareUrl, "_blank", "width=600,height=400");
    onClose();
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    onClose();
  };
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="h-6 w-6 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Share
                </h3>
                <div className="mt-2">
                  <button
                    onClick={copyToClipboard}
                    className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    <svg
                      className="h-4 w-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M5 15l4-4a3 5 0 0 1 3 0l4 4"></path>
                    </svg>
                    Copy Link
                  </button>
                  <button
                    onClick={() => shareOnSocialMedia("facebook")}
                    className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-facebook hover:bg-facebook-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    <svg
                      className="h-4 w-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.13 6.25H13.5c-.41 0-.75.34-.75.75v2.26h1.25c-.05.63-.23 1.29-.51 1.92h-.74v6.28h-2.28v-6.28h-1.36v-1.87h1.36v-1c0-1.42.82-2.47 2.05-2.47h1.46V8.5h-.01l.01-.01c0-.05-.04-.1-.1-.1z" />
                    </svg>
                    Facebook
                  </button>
                  <button
                    onClick={() => shareOnSocialMedia("twitter")}
                    className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-twitter hover:bg-twitter-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    <svg
                      className="h-4 w-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.92 4.58c-.88.38-1.83.63-2.83.75 1.01-.61 1.78-1.57 2.15-2.72-.95.56-2 1-3.12 1.22-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.78.13 1.15-4.09-.21-7.72-2.16-10.15-5.15-.42.72-.66 1.56-.66 2.46 0 1.7.86 3.2 2.16 4.08-.8-.03-1.55-.25-2.2-.62v.06c0 2.37 1.69 4.34 3.93 4.78-.41.12-.85.18-1.3.18-.32 0-.63-.03-.94-.09.64 2.05 2.5 3.54 4.7 3.58-1.72 1.35-3.86 2.15-6.19 2.15-.4 0-.79-.02-1.18-.07 2.21 1.45 4.83 2.3 7.64 2.3 9.16 0 14.17-7.59 14.17-14.16 0-.21 0-.42-.02-.63.97-.7 1.81-1.58 2.47-2.58z" />
                    </svg>
                    Twitter
                  </button>
                  {/* Add buttons for other social media platforms */}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-900 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
