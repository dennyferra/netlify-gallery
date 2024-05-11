const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern':
                    "linear-gradient(to bottom, theme('colors.neutral.950 / 10%'), theme('colors.neutral.950 / 80%')), url('/images/noise.png')"
            },
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    daisyui: {
        themes: [
            {
                cupcake: {
                    ...require('daisyui/src/theming/themes')['cupcake'],
                    primary: '#aaacd2',
                    'primary-content': '#171717',
                    secondary: '#016968',
                    info: '#aaacd2',
                    'info-content': '#171717'
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
