import OpenAI from "openai";
import ChatBot from "react-chatbotify";


export const ChatbotLLM = () => {

	// La API Key de OpenAI es de Pago
    let apiKey = null;
	let modelType = "gpt-3.5-turbo";
	let hasError = false;

	// example openai conversation
	// you can replace with other LLMs such as Google Gemini
	const call_openai = async (params) => {
		try {
			const openai = new OpenAI({
				apiKey: apiKey,
				dangerouslyAllowBrowser: true 
			});

			// for streaming responses in parts (real-time), refer to real-time stream example
			const chatCompletion = await openai.chat.completions.create({
				// conversation history is not shown in this example as message length is kept to 1
				messages: [{ role: 'user', content: params.userInput }],
				model: modelType,
                store: true,
			});
            console.log(chatCompletion.choices[0]);
			await params.injectMessage(chatCompletion.choices[0].message.content);
		} catch (error) {
			console.error(error);
			await params.injectMessage("No se puede cargar el modelo, ¿su clave API es válida? recuerde el uso de la API Key de OpenAI es de pago");
			hasError = true;
		}
	}
	const flow={
		start: {
			message: "ingrese su OpenAI api key y empieza a preguntar!",
			path: "api_key",
			isSensitive: true
		},
		api_key: {
			message: (params) => {
				apiKey = params.userInput.trim();
				return "Pregúntame cualquier cosa!";
			},
			path: "loop",
		},
		loop: {
			message: async (params) => {
				await call_openai(params);
			},
			path: () => {
				if (hasError) {
					return "start"
				}
				return "loop"
			}
		}
	}
    
	return (
		<ChatBot 
            settings={{
                general: {embedded: false}, 
                chatHistory: {storageKey: "example_llm_conversation", maxEntries: 10},
				chatInput: {botDelay: 500},
				voice: {disabled: false},
				header: {title: "ChatBot LLM", avatar: "https://i.imgur.com/r2LCBDV.jpeg", buttons: {close: true}},
				chatButton: {icon: "https://i.imgur.com/r2LCBDV.jpeg", visible: true},
				tooltip: {mode: 'START', text: "Click me!"},
				footer: {visible: true, text: "ChatBot LLM" },
				notification: {disabled: true}
            }} 
            flow={flow}
        />
	);
}
