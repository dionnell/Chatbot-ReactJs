import { useState } from "react";
import ChatBot from "react-chatbotify";



export const BasicChatbot = () => {
	
  const [form, setForm] = useState({});
	const formStyle = {
		marginTop: 10,
		marginLeft: 20,
		border: "1px solid #491d8d",
		padding: 10,
		borderRadius: 5,
		maxWidth: 300
	}

	const flow={
		start: {
			message: "Hello there! What is your name?",
			function: (params) => setForm({...form, name: params.userInput}),
			path: "ask_age"
		},
		ask_age: {
			message: (params) => `Nice to meet you ${params.userInput}, what is your age?`,
			function: (params) => setForm({...form, age: params.userInput}),
			path: async (params) => {
				if (isNaN(Number(params.userInput))) {
					await params.injectMessage("Age needs to be a number!");
					return;
				}
				return "ask_gender";
			}
		},
		ask_gender:{
			message: "What is your gender?",
			options: ["Male", "Female"],
			chatDisabled: true,
			function: (params) => setForm({...form, gender: params.userInput}),
			path: "ask_pet"
		},
		ask_pet: {
			message: "Do you own any pets?",
			options: ["Yes", "No"],
			chatDisabled: true,
			function: (params) => setForm({...form, pet_ownership: params.userInput}),
			path: async (params) => {
				if (params.userInput === "Yes") {
					return "ask_choice";
				} else {
					return "ask_work_days";
				}
			}
		},
		ask_choice: {
			message: "What pets do you have? Select at least 1 and at most 4 pets",
			checkboxes: {items: ["Dog", "Cat", "Rabbit", "Hamster", "Bird"], min: 1, max: 4},
			chatDisabled: true,
			function: (params) => setForm({...form, pet_choices: params.userInput}),
			path: "ask_work_days"
		},
		ask_work_days: {
			message: "How many days can you work per week?",
			function: (params) => setForm({...form, num_work_days: params.userInput}),
			path: async (params) => {
				if (isNaN(Number(params.userInput)) || (Number(params.userInput) < 1 || Number(params.userInput) > 7)) {
					await params.injectMessage("Number of work day(s) need to be a number and less than 7 days old!");
					return;
				}
				return "Check_info";
			}
		},
		Check_info: {
			message: async(params) => {
				if (form.pet_ownership === "Yes") { 
					  await params.injectMessage(`You are ${form.name}, a ${form.gender} of ${form.age} years old, you have pet ${form.pet_choices} and work ${form.num_work_days} days a week`) 
					  params.goToPath("Check_info_2");
					}
				else {
					 await params.injectMessage(`You are ${form.name}, a ${form.gender} of ${form.age} years old, you don't have any pets and you work ${form.num_work_days} days a week`)
					 params.goToPath("Check_info_2");
					}
			},
			path: "Check_info_2"
		},
		Check_info_2: {
			message: "Is the information correct?",
			options: ["Yes", "No"],
			chatDisabled: true,
			path: async (params) => {
				if (params.userInput === "Yes") {
					return "end";
				} else {
					return "start";
				}
			}
		},
		end: {
			message: "Thank you for your interest, we will get back to you shortly!",
			options: ["New Application"],
			chatDisabled: true,
			path: "start"
		},
	}
	return (
		<ChatBot settings={{
							general: {embedded: false}, 
                        	chatHistory: {storageKey: "example_complex_form", maxEntries: 10},
							notification: {disabled: true},
							tooltip: {mode: 'START', text: "Click me!"},
							header: {title: "ChatBot Form"},
							footer: {visible: true, text: "ChatBot LLM" },
							chatInput: {botDelay: 500},
							
						}} 
            flow={flow}
    />
	);
};

