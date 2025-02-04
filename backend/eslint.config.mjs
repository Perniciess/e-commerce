import antfu from '@antfu/eslint-config'
import tailwindcssPlugin from 'eslint-plugin-tailwindcss' // Импортируем плагин


export default antfu({
    stylistic: {
        indent: 4,
        quotes: 'single',
    },

    typescript: {
        tsconfigPath: 'tsconfig.json',
    },
    
    lessOpinionated: true,
})
