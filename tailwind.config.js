/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        screens: {
            // 'mobile': {'max': '743.9px'},
            // 'tablet': {min: '744px'},
            // 'sm-only': {'min': '743.98px', 'max': '1023.98px'},
            'sm-max': '743px',
            'sm': '744px',
            'lg': '1024px',
            '2xl': '1512px',
            'xl': '1280px',
            '3xl': '1728px',
            '4xl': '1920px',

            //Mobile
            'mobile': {'max': '743.9px'},
            'tablet': {min: '744px'},
            'sm-only': {'min': '743.98px', 'max': '1023.98px'},
            //Tablet
            'tablet-s': '744px',
            'tablet-s-only': {min: '744px', max: '1023.98px'},
            'table-l': '1024px',
            'tablet-l-only': {min: '1024px', max: '1279.98px'},
            //Desktop
            'desktop-s': '1280px',
            'desktop-m': '1512px',
            'desktop-l': '1728px',
            'desktop': '1920px',
        },
        colors: {
            'brand': {
                'green': {
                    '200': '#009D3D',
                    '1000': '#12B151',
                }
            },
            'grey': {
                '0': '#fff',
                '30': '#FBFBFB',
                '60': '#F3F3F3',
                '90': '#EAEAEA',
                '120': '#E2E2E2',
                '300': '#AFAFAF',
                '420': '#8C8C8C',
                '600': '#5A5A5A',
                '740': '#2F2F2F',
                '800': '#1E1E1E',
                '900': '#0D0D0D',
                '1000': '#000',
            },
            'blue': {
                '20': '#E5F3FF',
                '120': '#005DD7',
            },
            'orange': '#FC6100'
        },
        spacing: {
            '0': '0px',
            '4': '4px',
            '2': '2px',
            '6': '6px',
            '8': '8px',
            '12': '12px',
            '16': '16px',
            '18': '18px',
            '20': '20px',
            '24': '24px',
            '30': '30px',
            '32': '32px',
            '36': '36px',
            '40': '40px',
            '64': '64px',
            '80': '80px',
            '100': '100px',
            '122': '122px',
            'full': '100%',
        },
        fontSize: {
            'CaptionLRegular': ['11px', {
                fontWeight: '400',
                lineHeight: '14px',
            }],
            'CaptionXLRegular': ['12px', {
                fontWeight: '400',
                lineHeight: '16px',
            }],
            'textRegular': ['14px', {
                fontWeight: '400',
                lineHeight: '20px',
            }],
            'textBold': ['14px', {
                fontWeight: '700',
                lineHeight: '20px',
            }],
            'textRegular-14_16': ['14px', {
                fontWeight: '400',
                lineHeight: '16px',
            }],
            'textRegular-14_24': ['14px', {
                fontWeight: '400',
                lineHeight: '24px',
            }],
            'textRegular-16_24': ['16px', {
                fontWeight: '400',
                lineHeight: '24px',
            }],
            'textSemiBold': ['14px', {
                fontWeight: '600',
                lineHeight: '20px',
            }],
            'SubtitleSemiBold': ['18px', {
                fontWeight: '600',
                lineHeight: '24px',
            }],
            'SubtitleBold': ['18px', {
                fontWeight: '700',
                lineHeight: '24px',
            }],
            'SubtitleRegular': ['18px', {
                fontWeight: '400',
                lineHeight: '24px',
            }],
            'headingRegular': ['16px', {
                fontWeight: '400',
                lineHeight: '20px',
            }],
            'headingSemiBold': ['16px', {
                fontWeight: '600',
                lineHeight: '20px',
            }],
            'headingBold': ['16px', {
                fontWeight: '700',
                lineHeight: '20px',
            }],
            'title5Bold': ['20px', {
                fontWeight: '700',
                lineHeight: '24px',
            }],
            'title5Regular_28': ['20px', {
                fontWeight: '400',
                lineHeight: '28px',
            }],
            'title5Regular_24': ['20px', {
                fontWeight: '400',
                lineHeight: '24px',
            }],
            'title4Bold': ['24px', {
                fontWeight: '700',
                lineHeight: '28px',
            }],
            'title4Regular': ['24px', {
                fontWeight: '400',
                lineHeight: '28px',
            }],
            'title3Bold': ['32px', {
                fontWeight: '700',
                lineHeight: '40px',
            }],
            'title1Bold': ['40px', {
                fontWeight: '700',
                lineHeight: '48px',
            }],
            'title_40_140': ['40px', {
                fontWeight: '700',
                lineHeight: '140%',
            }],
            'title_54_140': ['54px', {
                fontWeight: '700',
                lineHeight: '140%',
            }],
            'metricSemiBold': ['14px', {
                fontWeight: '600',
                lineHeight: '16px',
            }],
            'heroBold': ['72px', {
                fontWeight: '700',
                lineHeight: '130%',
            }],
            'mobileHeroBold': ['36px', {
                fontWeight: '700',
                lineHeight: '140%',
            }],
            'heroDescriptionRegular': ['24px', {
                fontWeight: '400',
                lineHeight: '140%',
            }],
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        borderRadius: {
            'none': '0',
            '8': '8px',
            '16': '16px',
            '24': '24px',
            '28': '28px',
            '32': '32px',
            '40': '40px',
            'full': '100%'
        },
        borderWidth: {
            DEFAULT: '1px',
            '0': '0',
            '2': '2px',
        }
    },
    plugins: [],
}

