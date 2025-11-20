// Add this script to Webflow Project Settings > Custom Code > Head Code (after TailwindCSS CDN)

tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#f8f5f2',
                    100: '#eee8e3',
                    500: '#895431', // Miller Waste Primary Brown
                    600: '#6e4327',
                    900: '#3d2516',
                }
            }
        }
    }
}

