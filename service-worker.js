// service worker

// Firefox doesn't need service worker code for basic sidebar functionality
// The sidebar is configured in the manifest.json file
// You can add any other service worker functionality you need below
console.log('Firefox sidebar extension service worker loaded')

// Listen for browser action clicks
browser.action.onClicked.addListener((tab) => {
	// Open the sidebar
	browser.sidebarAction.open()
})