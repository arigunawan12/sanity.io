import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
     projectId:"fs2d27zd",
     dataset:"production",
     title:"My Personal Website",
     apiVersion:"2023-03-06",
    basePath:"/admin",
    plugins:[deskTool()],
    schema : {types :schemas}
})

export default config;