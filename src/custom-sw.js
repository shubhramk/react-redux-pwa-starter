// See https://developers.google.com/web/tools/workbox/guides/configure-workbox

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event =>
	event.waitUntil(self.clients.claim())
);

// app-shell
workbox.routing.registerRoute('/', workbox.strategies.cacheFirst());

const queue = new workbox.backgroundSync.Queue('sync-cop', {
	onSync: async ({ queue }) => {
		let entry;
		while ((entry = await queue.shiftRequest())) {
			try {
				await fetch(entry.request);
				console.log('success', entry.request);
			} catch (error) {
				console.error('failed for request', entry.request, error);
				await queue.unshiftRequest(entry);
				return;
			}
		}
		console.log('Replay complete!');
	},
	maxRetentionTime: 60 * 24,
});
workbox.routing.registerRoute(
	'https://jsonplaceholder.typicode.com/posts',
	args => {
		const promiseChain = fetch(args.event.request.clone())
			.then(data => {
				console.log('success');
			})
			.catch(err => {
				console.log('error');
				queue.pushRequest({ request: args.event.request });
			});
		args.event.waitUntil(promiseChain);
	},
	'POST'
);

// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
workbox.precaching.precacheAndRoute(self.__precacheManifest);
