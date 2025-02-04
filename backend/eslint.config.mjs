import antfu from '@antfu/eslint-config'

export default antfu(
    {
        stylistic: {
            indent: 4,
            quotes: 'single',
        },
        typescript: true,
        rules: {
            'n/prefer-global/process': 0,
        },
    },

)
