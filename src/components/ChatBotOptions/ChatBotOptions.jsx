import ChatBot from "react-chatbotify";


export const ChatBotOptions = () => {
	
	const helpOptions = ["Router", "Github", "Steam"];
	const flow = {
		start: {
			message: "Hola, Soy Tan Jin! ",
			transition: {duration: 1000},
			path: "show_options"
		},
		show_options: {
			message: "Como puedo ayudarte hoy?" + " cual es su problematica?",
			chatDisabled: true,
			options: helpOptions,
			path: "process_options"
		},
		prompt_again: {
			message: "¿Necesitas alguna otra ayuda?",
			options: helpOptions,
			chatDisabled: true,
			path: "process_options"
		},
		unknown_input: {
			message: "Sorry, I do not understand your message 😢! If you require further assistance, you may click on " +
				"the Github option and open an issue there or visit our discord.",
			options: helpOptions,
			chatDisabled: true,
			path: "process_options"
		},
		process_options: {
			transition: {duration: 400},
			path: async (params) => {
				let link = "";
				await params.injectMessage("¡No te muevas! ¡enseguida te ayudaremos!");
				switch (params.userInput) {
				case "Router":
					return "Router";
					break;
				case "Github":
					return "Github";
					break;
				case "Steam":
					return "Steam";
					break;
				default:
					return "unknown_input";
				}
			},
		},
		Router: {
			message: "Los problemas con el router son muy comunes, te puedo ayudar con eso!",
			transition: {duration: 1000},
			path: "solution_router"
		},
		solution_router: {
			message: "Para solucionar problemas con el router, puede revisar las siguientes soluciones",
			transition: {duration: 800},
			path: "Basic_solution_router_1",
		},
		Basic_solution_router_1: {
			message: "1. Asegúrate de que todos los cables estén correctamente conectados." + 
					"Verifica si los cables de alimentación y Ethernet están conectados de manera segura tanto en el router como en el dispositivo que estás utilizando.",
			transition: {duration: 800},
			path: "Basic_solution_router_2",
		},
		Basic_solution_router_2: {
			message: "2. Reinicia el router. Desconecta el cable de alimentación del router, espera unos segundos y luego vuelve a conectarlo. " + 
					"Esto puede solucionar problemas menores y restablecer la conexión.",
			transition: {duration: 800},
			path: "Basic_solution_router_3",
		},
		Basic_solution_router_3: {
			message: "3. Verifica las luces indicadoras del router. Observa las luces correspondientes en el router para ver si hay alguna anomalía. " + 
					"Consulta el manual del router para comprender el significado de cada luz y cómo solucionar los problemas que indiquen.",
			transition: {duration: 800},
			path: "pregunta_Router",
		},
		pregunta_Router: {
			message: "¿Tienes alguna otra pregunta sobre la solucion al problema del router?",
			options: ["Si", "No"],
			chatDisabled: true,
			path: async (params) => {
				if (params.userInput === "Si") {
					return "link_router";
				} else {
					return "prompt_again";
				}
			}
		},
		link_router: {
			message: "Para mas informacion puede revisar la siguiente pagina: ",
			options: ["Solucion a Problemas Router"],
			chatDisabled: true,
			path: async (params) => {
				let url = "";
				switch (params.userInput) {
				case "Solucion a Problemas Router":
					url = "https://tecnobits.com/problemas-con-el-router-sigue-estos-pasos-para-solucionarlos/";
					break;
				default:
					return "unknown_input";	
				}
				setTimeout(() => {
					window.open(url, '_blank');
				}, 500)
				return "prompt_again";
			}
		},
		
		Github: {
			message: "Los problemas con Github son muy comunes, te puedo ayudar con eso!",
			transition: {duration: 1000},
			path: "solution_Github"
		},
		solution_Github: {
			message: "Para solucionar problemas con Github, puede revisar las siguientes soluciones",
			transition: {duration: 800},
			path: "Basic_solution_Github_1",
		},
		Basic_solution_Github_1: {
			message: "1. Asegúrate de que tu red esté configurada para permitir las direcciones IP de GitHub",
			transition: {duration: 800},
			path: "Basic_solution_Github_2",
		},
		Basic_solution_Github_2: {
			message: "2. Si tienes problemas de conectividad con la red de tu empresa u organización, consulta con tu administrador de red para saber si se le aplican reglas a la red para bloquear determinados tráficos" + 
					"ya existen reglas configuradas, consulta con tu administrador de red para permitir el tráfico hacia GitHub.",
			transition: {duration: 800},
			path: "Basic_solution_Github_3",
		},
		Basic_solution_Github_3: {
			message: "3. Si tienes conexiones lentas en determinados momentos del día, pero no en otros, las velocidades lentas normalmente se deben a la congestión de red. " + 
					"Ya que GitHub no puede resolver congestiones de red, debes escalar el problema a tu proveedor de servicio de internet.",
			transition: {duration: 800},
			path: "pregunta_Github",
		},
		pregunta_Github: {
			message: "¿Tienes alguna otra pregunta sobre la solucion al problema de Github?",
			options: ["Si", "No"],
			chatDisabled: true,
			path: async (params) => {
				if (params.userInput === "Si") {
					return "link_Github";
				} else {
					return "prompt_again";
				}
			}
		},
		link_Github: {
			message: "Para mas informacion puede revisar la siguiente pagina: ",
			options: ["Solucion a Problemas Github"],
			chatDisabled: true,
			path: async (params) => {
				let url = "";
				switch (params.userInput) {
				case "Solucion a Problemas Github":
					url = "https://docs.github.com/es/get-started/using-github/troubleshooting-connectivity-problems";
					break;
				default:
					return "unknown_input";	
				}
				setTimeout(() => {
					window.open(url, '_blank');
				}, 500)
				return "prompt_again";
			}
		},

		Steam: {
			message: "Los problemas con el Steam son muy comunes, te puedo ayudar con eso!",
			transition: {duration: 1000},
			path: "solution_Steam"
		},
		solution_Steam: {
			message: "Para solucionar problemas con Steam, puede revisar las siguientes soluciones",
			transition: {duration: 800},
			path: "Basic_solution_Steam_1",
		},
		Basic_solution_Steam_1: {
			message: "1. Recomendamos desconectar del equipo todos los dispositivos de entrada no esenciales para eliminar la posibilidad de que estén interfiriendo.",
			transition: {duration: 800},
			path: "Basic_solution_Steam_2",
		},
		Basic_solution_Steam_2: {
			message: "2. Asegúrate de que el sistema operativo y todos los controladores de hardware estén actualizados.",
			transition: {duration: 800},
			path: "Basic_solution_Steam_3",
		},
		Basic_solution_Steam_3: {
			message: "3. Se recomienda recurrir a un especialista para asegurarse de que el software antivirus no esté interfiriendo con Steam. " + 
					"Es posible que incluso tengas que desactivarlo temporalmente para probar. Puede que también sea necesario añadir excepciones para Steam en la configuración de tu antivirus.",
			transition: {duration: 800},
			path: "pregunta_Steam",
		},
		pregunta_Steam: {
			message: "¿Tienes alguna otra pregunta sobre la solucion al problema del Steam?",
			options: ["Si", "No"],
			path: async (params) => {
				if (params.userInput === "Si") {
					return "link_Steam";
				} else {
					return "prompt_again";
				}
			}
		},
		link_Steam: {
			message: "Para mas informacion puede revisar la siguiente pagina: ",
			options: ["Solucion a Problemas Steam"],
			path: async (params) => {
				let url = "";
				switch (params.userInput) {
				case "Solucion a Problemas Steam":
					url = "https://help.steampowered.com/es/faqs/view/29A6-F529-F956-6292";
					break;
				default:
					return "unknown_input";	
				}
				setTimeout(() => {
					window.open(url, '_blank');
				}, 500)
				return "prompt_again";
			}
		}
	}
	return (
		<ChatBot 
			settings={{general: {embedded: false}, 
					chatHistory: {storageKey: "example_faq_bot"},
					chatInput: {botDelay: 500},
					voice: {disabled: true},
					header: {title: "ChatBot de Ayuda", avatar: "https://i.imgur.com/r2LCBDV.jpeg", buttons: {close: true}},
					chatButton: {icon: "https://i.imgur.com/r2LCBDV.jpeg", visible: true},
					tooltip: {mode: 'CLOSE', text: "Click me!"},
					footer: {visible: true, text: "ChatBot de Ayuda" },
					
			}} 
			flow={flow}
		/>
	);
};

