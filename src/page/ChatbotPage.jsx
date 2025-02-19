import { useState } from 'react';
import { BasicChatbot, ChatbotLLM, ChatBotOptions } from '../components';
import { FaRobot } from "react-icons/fa";


export const ChatbotPage = () => {

  const [Chatbot, setChatbot] = useState('Form')

  return (
    <>
      <div  className="container">
            <p className="cloud-text cloud-title mx-auto ">ChatBot <FaRobot className='text-[120px] w-[130px] mx-auto' /> </p>
      </div>

      <div className='grid grid-cols-6 gap-4 m-5 max-w-[800px] mx-auto'>
        <div className='col-span-4 col-start-2'>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipos de Chatbot</label>
          <select 
            value={Chatbot} 
            onChange={e => setChatbot(e.target.value)}
            className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
            <option value="Form">Chatbot Form </option>
            <option value="FAQ">Chatbot FAQ </option>
            <option value="LLM">Chatbot LLM </option>
          </select>
        </div>
      </div> 

      <div className='grid grid-cols-1 justify-center justify-items-center'> 
      {
          (Chatbot === 'Form') ? <>
                                    <span className='grid grid-cols-1 text-center font-bold text-base max-w-[500px]'>
                                      *Este es un Chatbot Form, sirve para guardar datos del usuario o registrar reportes
                                    </span>
                                    <BasicChatbot/>
                                  </>
          : (Chatbot === 'FAQ') ? <>
                                    <span className='grid grid-cols-1 text-center font-bold text-base max-w-[500px]'>
                                      *Este es un Chatbot FAQ, sirve para resolver dudas frecuentes del usuario
                                    </span>
                                    <ChatBotOptions/>
                                  </>
          : <>
              <span className='grid grid-cols-1 text-center font-bold text-base max-w-[500px]'>
                *Este es un Chatbot LLM, es un chat inteligante con OpenAi, considerar que la API Key de OpenAI es de Pago 
              </span>
              <ChatbotLLM/>
            </>
        }
      </div>
      
    </>
  )
}
