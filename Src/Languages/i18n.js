import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import English from './English.json'
import Hindi from './Hindi.json'
import Telugu from './Telugu.json'
import Kannad from './Kannad.json'

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',// <--- add this line
    lng:"en",
    resources:{
        en:English,
        te:Telugu,
        kn:Kannad,
        hi:Hindi
    },
    react:{
        useSuspense:false
    }
})

export default i18next