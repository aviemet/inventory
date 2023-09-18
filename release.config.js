module.exports = {
	release: {
		branches: [
			'+([0-9])?(.{+([0-9]),x}).x',
			'release',
			'next',
			'next-major',
			{ name: 'beta', prerelease: true },
			{ name: 'alpha', prerelease: true },
		],
	},
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		'@semantic-release/github',
		['@semantic-release/git', {
			'message': 'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}',
		}],
	],
	mangle: false,
	headerIds: false,
}
