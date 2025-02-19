

export const ProblemGithub = {
  
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
    }
}
