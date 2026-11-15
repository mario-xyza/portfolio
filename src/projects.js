export const projects = [
    {
        id: 'vehiculo-autonomo-llm',
        media: [
            { type: 'file', src: '/projects/deepracer/nav_test.mp4', poster: '/projects/deepracer/nav_poster.png', alt: { es: 'Demo del robot', en: 'Robot demo' }, }
        ],
        tag: { es: 'Robótica · IA', en: 'Robotics · AI' },
        stack: ['ROS', 'Python', 'C++', 'AWS DeepRacer', 'Qwen LLM'],
        meta: {
            es: 'Proyecto académico · Sept. 2026 - Actualidad',
            en: 'Academic project · Sept. 2026 - Present',
        },
        title: {
            es: 'Navegación autónoma con AWS DeepRacer',
            en: 'Autonomous navigation with AWS DeepRacer',
        },
        description: {
            es: 'Navegación autónoma para un auto AWS DeepRacer pensada para que se mueva solo por el campus universitario. Con ROS, Python y C++, y equipado con un LiDAR Intel RealSense L515, el auto mapea su entorno: por ahora un salón, y después el resto del edificio y sus alrededores. A partir de ese mapa podrá planear rutas y navegar entre destinos. La siguiente etapa es manejarlo con lenguaje natural: un bot de Telegram enviará los mensajes a un LLM (Qwen), que los traducirá en destinos concretos del mapa. Proyecto académico en desarrollo, trabajado en equipo.',
            en: 'Autonomous navigation for an AWS DeepRacer car designed to move around a university campus on its own. Using ROS, Python and C++, and equipped with an Intel RealSense L515 LiDAR, the car maps its surroundings: a classroom for now, then the rest of the building and its surroundings. From that map it will plan routes and navigate between destinations. The next stage is natural language control: a Telegram bot will send messages to an LLM (Qwen), which will translate them into concrete destinations on the map. An ongoing academic project, built as a team.',
        },
    },
    {
        id: 'wro-future-engineers',
        media: [
            { type: 'video', id: '468RyVULAOA', alt: { es: 'Robot completando el reto abierto', en: 'Robot completing the Open Challenge' } },
            { type: 'video', id: 'EnNW7pR3liw', alt: { es: 'Robot completando el reto de obstáculos', en: 'Robot completing the Obstacle Challenge' } },
            { type: 'file', src: '/projects/wro/move_test.mp4', poster: '/projects/wro/move_poster.png', alt: { es: 'Demo del robot', en: 'Robot demo' }, }
        ],
        url: 'https://github.com/saorijasso/WRO-FE-DeluluBots',
        tag: { es: 'Robótica', en: 'Robotics' },
        stack: ['Python', 'OpenCV', 'NumPy', 'C++', 'Git'],
        meta: {
            es: 'WRO Future Engineers · Nacional, Tijuana · 2026',
            en: 'WRO Future Engineers · National, Tijuana · 2026',
        },
        title: {
            es: 'Vehículo autónomo para WRO Future Engineers',
            en: 'Autonomous vehicle for WRO Future Engineers',
        },
        description: {
            es: 'Vehículo autónomo con el que competimos en la final nacional de WRO Future Engineers, en Tijuana. Recorre una pista usando visión por computadora: una Raspberry Pi 5 con Python y OpenCV detecta paredes, líneas y obstáculos, y una ESP32 en C++ ejecuta el rumbo que se le indica. El robot sigue las paredes, cuenta las vueltas a partir de las líneas de color del piso y esquiva pilares rojos y verdes, pasando por el lado que le corresponde a cada color. Programamos una herramienta para calibrar los colores según la iluminación de cada lugar.',
            en: 'Autonomous vehicle we took to the WRO Future Engineers national final in Tijuana. It drives around a track using computer vision: a Raspberry Pi 5 running Python and OpenCV detects walls, lines and obstacles, and an ESP32 in C++ carries out the heading it is given. The robot follows the walls, counts laps from the colored lines on the floor and dodges red and green pillars, passing on the side assigned to each color. We built a tool to calibrate colors for each venue\'s lighting.',
        },
    },
];