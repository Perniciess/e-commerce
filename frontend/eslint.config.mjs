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
    react: true,
    lessOpinionated: true,

    rules: { 'n/prefer-global/process': 0,          'tailwindcss/classnames-order': 'warn',      'tailwindcss/enforces-negative-arbitrary-values': 'warn',      'tailwindcss/enforces-shorthand': 'warn',      'tailwindcss/migration-from-tailwind-2': 'warn',      'tailwindcss/no-arbitrary-value': 'off',      'tailwindcss/no-custom-classname': 'warn',      'tailwindcss/no-contradicting-classname': 'error'},     // ... другие правила tailwindcss, которые вы хотите настроить     }
    plugins: {
        tailwindcss: tailwindcssPlugin, // Добавляем плагин в общий конфиг
    }
})
