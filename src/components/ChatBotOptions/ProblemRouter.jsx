

export const ProblemRouter = {
  
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
    }
}
