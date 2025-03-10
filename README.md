# Adyen Test Cards Firefox extension

Ported from the already created chrome extension. Instead of opening in the side bar this opens in the side panel.

![Browser extension image](browser-extension.gif)

## Adyen Test Cards

Adyen provides [test card numbers](https://docs.adyen.com/development-resources/testing/test-card-numbers) to test the Checkout integration with different payment methods and flows.

This Chrome extension brings those test card numbers directly into your browser where you can:
* copy the card number to the clipboard
* prefill the Adyen Web Drop-in with the selected card details and perform the testing quickly and easily.

### Installation

The installation will warn that the extension can read and write data on all websites:

![Chrome Web Store message](chrome-store-popup.png)

> **Note**
This is necessary as we do not know where your integration is hosted. The Adyen Test Cards extension only copies (using Javascript) the selected card details into the Credit Card fields. No other data or fields are read or changed. All of the code is Open-Source and there is no telemetry in this extension.
>

#### Installing from source

1. Go to the Extensions page by entering `about:addons` in a new tab.
2. Enable Developer Mode.
3. Download the zip from the downloads
3. Click the "Install Add-on From File..." button and select the extension zip.

You can also create the zip from the files here yourself.

### Usage

Open the extension and choose a card number.

## Contributing

We commit all our new features directly into our GitHub repository. Feel free to request or suggest new features or code changes yourself as well!

Find out more in our [contributing](https://github.com/adyen-examples/.github/blob/main/CONTRIBUTING.md) guidelines.

### Build & PR

To contribute:
* create a new GitHub issue (please specify if it is a feature, improvement or bug fix)
* create a local branch
* develop and test your changes locally ("Load unpacked" from your source)
* run the E2E tests locally
  ```
  cd e2e
  npx playwright test
  ```
* submit a PR

**Note**: the list of cards, giftcards, etc.. are saved (as JSON) on local storage. If the JSON format changes then the existing users might be affected (breaking change?). 

## Maintainers

### Build & publish

In order to publish a new release:
* develop and test features and changes
* update `manifest.json` (update version and other applicable attributes ie update description, modify permissions, etc..)
* create a new release: the `package-extension.yml` workflow will package the extension in a zip file and add it to the assets of the new release
* upload zip file to Chrome Web Store

## License

MIT license. For more information, see the **LICENSE** file.
