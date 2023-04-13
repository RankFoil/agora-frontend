const plugin = require('tailwindcss/plugin');

module.exports=plugin(function({addComponents, theme}){
    addComponents({
        ".icon": {
            backgroundRepeat: 'no repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            "&_agora": { //& es para concatenar, es decir, = icon_agora
                backgroundImage: theme('bacgroundImage.agora'),
            },
            "&_agora_auth": { 
                backgroundImage: theme('bacgroundImage.agora_auth'),
            },
            "&_agora_icon": { 
                backgroundImage: theme('bacgroundImage.agora_icon'),
            },
            "&_inbox_stack": { 
                backgroundImage: theme('bacgroundImage.inbox_stack'),
            },
            "&_shopping_bag": { 
                backgroundImage: theme('bacgroundImage.shopping_bag'),
            },
            "&_shopping_bag_dark": { 
                backgroundImage: theme('bacgroundImage.shopping_bag_dark'),
            },
            "&_user": { 
                backgroundImage: theme('bacgroundImage.user'),
            },

        }
    })

})
