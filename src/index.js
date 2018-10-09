import { Builder } from 'selenium-webdriver';
import {writeFileSync} from 'fs';

export default {
    // Multiple browsers support
    isMultiBrowser: true,


    // Required - must be implemented
    // Browser control

    /**
     * Open the browser with the given parameters
     * @param id id of
     */
    async openBrowser(id, pageUrl, browserName) {
        if (!browserName) throw new Error('Unsupported browser!');

        const browserNameString = browserName.match(/([^@:]+)/);
        let version = browserName.match(/@([^:]+)/);
        let platform = browserName.match(/:(.+)/);

        version = version ? version[1] : undefined; // eslint-disable-line no-undefined
        platform = platform ? platform[1] : undefined; // eslint-disable-line no-undefined
        const browser = await new Builder().forBrowser(browserNameString[1], version, platform).usingServer(this.seleniumServer).build();

        browser.get(pageUrl);
        this.openedBrowsers[id] = browser;

        browser.manage().timeouts().implicitlyWait(80000);
    },

    async closeBrowser(id) {
        this.openedBrowsers[id].quit();
    },


    // Optional - implement methods you need, remove other methods
    // Initialization
    async init() {
        this.seleniumServer = process.env.SELENIUM_SERVER ? process.env.SELENIUM_SERVER : 'http://localhost:4444/wd/hub';
    },

    async dispose() {
        return;
    },


    // Browser names handling
    async getBrowserList() {
        throw new Error('Not implemented!');
    },

    async isValidBrowserName(/* browserName */) {
        return true;
    },


    // Extra methods
    async resizeWindow(/* id, width, height, currentWidth, currentHeight */) {
        this.reportWarning('The window resize functionality is not supported by the "sbx" browser provider.');
    },

    async takeScreenshot(/* id, screenshotPath, pageWidth, pageHeight */) {
        this.reportWarning('The screenshot functionality is not supported by the "sbx" browser provider.');
    }
};
