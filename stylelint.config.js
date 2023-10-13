module.exports = {
	extends: ['stylelint-config-recommended'],
	rules: {
		'declaration-block-trailing-semicolon': null,
		'no-descending-specificity': null,
		'font-family-no-missing-generic-family-keyword': true,
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'apply',
					'layer',
					'variants',
					'responsive',
					'screen',
					'use',
				],
			},
		],
		'indentation': ['tab', {
			baseIndentLevel: 1,
		}],
	},
}
