

export const ProblemSteam = {
  
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
