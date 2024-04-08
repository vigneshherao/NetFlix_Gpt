import OpenAI from 'openai';
import { gptApi } from './constant';

const openAI = new OpenAI({
    apiKey: gptApi,dangerouslyAllowBrowser: true 
  });
  



  export default openAI;