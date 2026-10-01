import type { Experience, Project, SkillGroup } from "@/shared/types";

export const projects: Project[] = [
  {
    slug: "3d-slam-point-lio",
    title: { en: "3D SLAM for an agricultural robot", fr: "SLAM 3D pour un robot agricole" },
    category: { en: "Final-year engineering project", fr: "Projet de fin d’études" },
    organization: "Novel-Ti",
    period: { en: "Feb–Jun 2026", fr: "Fév.–juin 2026" },
    image: "/images/projects/point-lio-slam.webp",
    imageAlt: {
      en: "Concept illustration of a mobile robot mapping a poultry-house aisle with LiDAR",
      fr: "Illustration conceptuelle d’un robot mobile cartographiant un couloir d’élevage avec un LiDAR",
    },
    summary: {
      en: "An indoor 3D mapping pipeline for Pluma, built around Point-LIO and LiDAR–IMU fusion on ROS 2.",
      fr: "Une chaîne de cartographie intérieure 3D pour Pluma, fondée sur Point-LIO et la fusion LiDAR–IMU sous ROS 2.",
    },
    context: {
      en: "Pluma is a mobile agricultural robot intended for poultry-house environments. The project focused on producing a usable indoor 3D map from LiDAR and inertial data.",
      fr: "Pluma est un robot agricole mobile destiné aux bâtiments d’élevage avicole. Le projet visait à produire une carte intérieure 3D exploitable à partir des données LiDAR et inertielles.",
    },
    approach: [
      { en: "Integrated the Unitree 4D LiDAR L2 and its IMU with an NVIDIA Jetson Xavier NX running ROS 2.", fr: "Intégré le Unitree 4D LiDAR L2 et son IMU à une NVIDIA Jetson Xavier NX sous ROS 2." },
      { en: "Configured Point-LIO, gravity-vector initialization and timestamp handling, then tuned accuracy and filtering parameters.", fr: "Configuré Point-LIO, l’initialisation du vecteur de gravité et les horodatages, puis ajusté les paramètres de précision et de filtrage." },
      { en: "Recorded and replayed sensor data with rosbag2, inspected results in RViz2, and adjusted point-cloud reconstruction parameters.", fr: "Enregistré et rejoué les données avec rosbag2, inspecté les résultats dans RViz2 et ajusté les paramètres de reconstruction du nuage de points." },
    ],
    outcome: {
      en: "Validated a working 3D map in PCD format in a real environment.",
      fr: "Validé une carte 3D fonctionnelle au format PCD en environnement réel.",
    },
    technologies: ["ROS 2", "Point-LIO", "LiDAR–IMU", "Jetson Xavier NX", "RViz2", "rosbag2"],
    featured: true,
  },
  {
    slug: "gesture-controlled-robot-arm",
    title: { en: "Gesture-controlled robotic arm", fr: "Bras robotisé commandé par gestes" },
    category: { en: "Robotics & AI internship", fr: "Stage en robotique et IA" },
    organization: "CRNS",
    period: { en: "Jun–Jul 2025", fr: "Juin–juil. 2025" },
    image: "/images/projects/gesture-robot-arm.webp",
    imageAlt: {
      en: "Concept illustration of hand-landmark tracking controlling a simulated robotic arm",
      fr: "Illustration conceptuelle du suivi des points de la main commandant un bras robotisé simulé",
    },
    summary: {
      en: "A gesture-to-joint-command workflow combining 3D perception, an MLP and ROS 2 control tools.",
      fr: "Une chaîne reliant les gestes aux commandes articulaires, combinant perception 3D, MLP et outils ROS 2.",
    },
    context: {
      en: "The internship explored a natural control interface for a Lynxmotion AL5D arm, mapping captured human movement to robot joint commands.",
      fr: "Le stage a porté sur une interface de commande gestuelle pour un bras Lynxmotion AL5D, reliant les mouvements humains capturés aux commandes articulaires du robot.",
    },
    approach: [
      { en: "Captured human movement with Kinect v1 and MediaPipe, extracting 3D arm and hand landmarks.", fr: "Capturé les mouvements avec Kinect v1 et MediaPipe afin d’extraire les repères 3D du bras et de la main." },
      { en: "Integrated an MLP to map detected gestures to joint commands in ROS 2 Humble.", fr: "Intégré un MLP pour associer les gestes détectés aux commandes articulaires sous ROS 2 Humble." },
      { en: "Modeled and validated the control chain with URDF/Xacro, ros2_control, RViz2 and Gazebo Ignition 6.", fr: "Modélisé et validé la chaîne de commande avec URDF/Xacro, ros2_control, RViz2 et Gazebo Ignition 6." },
    ],
    outcome: {
      en: "Validated the gesture-control pipeline in simulation using the ROS 2 control stack.",
      fr: "Validé la chaîne de commande gestuelle en simulation avec la pile de contrôle ROS 2.",
    },
    technologies: ["ROS 2 Humble", "MediaPipe", "MLP", "Kinect v1", "ros2_control", "Gazebo"],
    featured: true,
  },
  {
    slug: "autonomous-robot-q-learning",
    title: { en: "Autonomous mobile robot with Q-learning", fr: "Robot mobile autonome avec Q-learning" },
    category: { en: "End-of-year project", fr: "Projet de fin d’année" },
    organization: "ENET’Com",
    period: { en: "Jan–Apr 2025", fr: "Janv.–avr. 2025" },
    image: "/images/projects/q-learning-robot.webp",
    imageAlt: {
      en: "Concept illustration of a small mobile robot following a visual path with a learning-based controller",
      fr: "Illustration conceptuelle d’un petit robot mobile suivant une trajectoire avec une commande par apprentissage",
    },
    summary: {
      en: "A path-following prototype that brings Q-learning, ROS 2 and embedded hardware together.",
      fr: "Un prototype de suivi de trajectoire réunissant Q-learning, ROS 2 et matériel embarqué.",
    },
    context: {
      en: "The project explored autonomous path following by combining a Q-learning decision loop with a mobile robot platform.",
      fr: "Le projet a exploré le suivi autonome de trajectoire en associant une boucle de décision Q-learning à une plateforme robotique mobile.",
    },
    approach: [
      { en: "Built a Python ROS 2 package and nodes for communication, decision-making and Q-learning integration.", fr: "Développé un package Python ROS 2 et ses nœuds pour la communication, la prise de décision et l’intégration du Q-learning." },
      { en: "Deployed the navigation logic on an NVIDIA Jetson Nano for real-time autonomous decisions.", fr: "Déployé la logique de navigation sur une NVIDIA Jetson Nano pour la prise de décision autonome en temps réel." },
      { en: "Integrated the Jetson Nano, ESP32, L298N motor driver, DC motors and a camera for visual path following.", fr: "Intégré la Jetson Nano, l’ESP32, le driver moteur L298N, des moteurs DC et une caméra pour le suivi visuel de trajectoire." },
    ],
    outcome: {
      en: "Delivered an embedded mobile-robot prototype with a ROS 2 decision loop and visual path following.",
      fr: "Réalisé un prototype de robot mobile embarqué avec une boucle de décision ROS 2 et un suivi visuel de trajectoire.",
    },
    technologies: ["Q-learning", "ROS 2", "Jetson Nano", "ESP32", "Python", "Computer vision"],
    featured: true,
  },
  {
    slug: "qr-code-computer-vision",
    title: { en: "QR-code acquisition on Raspberry Pi", fr: "Acquisition de QR codes sur Raspberry Pi" },
    category: { en: "Embedded systems & computer vision internship", fr: "Stage en systèmes embarqués et vision" },
    organization: "TELNET Holding",
    period: { en: "Jul 2024", fr: "Juil. 2024" },
    image: "/images/projects/qr-vision.webp",
    imageAlt: {
      en: "Concept illustration of a Raspberry Pi camera detecting a QR code and passing data to a service",
      fr: "Illustration conceptuelle d’une caméra Raspberry Pi détectant un QR code et transmettant les données à un service",
    },
    summary: {
      en: "A Raspberry Pi service for QR capture and decoding, with a Flask HTTP interface and YAML configuration.",
      fr: "Un service Raspberry Pi de capture et décodage de QR codes, avec une interface HTTP Flask et une configuration YAML.",
    },
    context: {
      en: "Developed a QR-code acquisition microservice on Raspberry Pi 4 for processing resume-related data.",
      fr: "Développé un microservice d’acquisition de QR codes sur Raspberry Pi 4 pour traiter des données associées aux CV.",
    },
    approach: [
      { en: "Implemented a Python capture and decoding pipeline with OpenCV and pyzbar.", fr: "Mis en place une chaîne Python de capture et de décodage avec OpenCV et pyzbar." },
      { en: "Built a Flask web service with HTTP GET/POST exchanges and JSON transfer through Requests.", fr: "Créé un service web Flask avec des échanges HTTP GET/POST et le transfert JSON via Requests." },
      { en: "Moved runtime settings to YAML, automated service startup and used SSH for remote administration.", fr: "Externalisé les paramètres dans YAML, automatisé le démarrage du service et utilisé SSH pour l’administration à distance." },
    ],
    outcome: {
      en: "Packaged QR capture, decoding and data exchange as a configurable service on Raspberry Pi 4.",
      fr: "Regroupé la capture, le décodage des QR codes et l’échange de données dans un service configurable sur Raspberry Pi 4.",
    },
    technologies: ["Raspberry Pi 4", "Python", "OpenCV", "pyzbar", "Flask", "HTTP / JSON"],
    featured: false,
  },
  {
    slug: "smartfleet-dropx",
    title: { en: "SmartFleet / DropX", fr: "SmartFleet / DropX" },
    category: { en: "IEEE RAS & VTS Challenge", fr: "Challenge IEEE RAS & VTS" },
    organization: "IEEE RAS & VTS",
    image: "/images/projects/smartfleet.webp",
    imageAlt: {
      en: "Concept illustration of autonomous delivery robots coordinating routes across a city",
      fr: "Illustration conceptuelle de robots de livraison autonomes coordonnant leurs itinéraires en ville",
    },
    summary: {
      en: "A decentralized fleet-coordination simulation using DCCBBA task allocation, A* routing and V2V constraints.",
      fr: "Une simulation de coordination décentralisée de flotte utilisant l’allocation DCCBBA, les itinéraires A* et des contraintes V2V.",
    },
    context: {
      en: "Designed an autonomous delivery-fleet coordination system for vehicles operating with V2V communication constraints.",
      fr: "Conçu un système de coordination d’une flotte de livraison autonome avec des contraintes de communication V2V.",
    },
    approach: [
      { en: "Implemented DCCBBA for decentralized task allocation and A* for route planning.", fr: "Implémenté DCCBBA pour l’allocation décentralisée des tâches et A* pour la planification des itinéraires." },
      { en: "Built a SUMO simulation around ROS 2 and DDS with a 5G-inspired V2V communication model.", fr: "Développé une simulation SUMO autour de ROS 2 et DDS, avec un modèle de communication V2V inspiré de la 5G." },
      { en: "Included dynamic mission reallocation and vehicle-constraint handling in the simulation.", fr: "Intégré la réallocation dynamique des missions et la gestion des contraintes des véhicules dans la simulation." },
    ],
    outcome: {
      en: "Modeled decentralized coordination and communication constraints in a SUMO-based multi-agent simulation.",
      fr: "Modélisé la coordination décentralisée et les contraintes de communication dans une simulation multi-agents sous SUMO.",
    },
    technologies: ["Multi-agent systems", "DCCBBA", "A*", "ROS 2 / DDS", "SUMO", "V2V"],
    featured: false,
  },
  {
    slug: "malta-robotics-competition",
    title: { en: "International Robotics Competition", fr: "Compétition internationale de robotique" },
    category: { en: "Malta · STEM Activities Program Award", fr: "Malte · STEM Activities Program Award" },
    image: "/images/projects/malta-competition.webp",
    imageAlt: {
      en: "Concept illustration of a teleoperated competition robot with a second-place medal",
      fr: "Illustration conceptuelle d’un robot téléopéré en compétition avec une médaille de deuxième place",
    },
    summary: {
      en: "Represented Tunisia with a teleoperated robot and earned second place in the STEM Activities Program Award.",
      fr: "Représenté la Tunisie avec un robot téléopéré et obtenu la deuxième place du STEM Activities Program Award.",
    },
    context: {
      en: "A mission-based robotics competition in Malta, where a teleoperated robot represented Tunisia.",
      fr: "Une compétition de robotique par missions à Malte, où un robot téléopéré représentait la Tunisie.",
    },
    approach: [
      { en: "Designed a teleoperated robot for mission-based tasks.", fr: "Conçu un robot téléopéré pour réaliser des missions." },
      { en: "Represented Tunisia in the international competition.", fr: "Représenté la Tunisie lors de la compétition internationale." },
    ],
    outcome: {
      en: "Second place in the STEM Activities Program Award.",
      fr: "Deuxième place au STEM Activities Program Award.",
    },
    technologies: ["Robotics", "Teleoperation", "Competition engineering"],
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    role: { en: "Final-year project — 3D SLAM & embedded robotics", fr: "Projet de fin d’études — SLAM 3D et robotique embarquée" },
    organization: "Novel-Ti",
    location: { en: "Sfax, Tunisia", fr: "Sfax, Tunisie" },
    period: { en: "Feb–Jun 2026", fr: "Fév.–juin 2026" },
    description: { en: "3D indoor mapping for Pluma, an agricultural mobile robot for poultry-house environments.", fr: "Cartographie intérieure 3D pour Pluma, un robot agricole mobile destiné aux bâtiments d’élevage avicole." },
    contributions: [
      { en: "Integrated Unitree 4D LiDAR L2 and IMU with NVIDIA Jetson Xavier NX and ROS 2.", fr: "Intégré le Unitree 4D LiDAR L2 et son IMU à une NVIDIA Jetson Xavier NX sous ROS 2." },
      { en: "Configured Point-LIO and tuned point-cloud reconstruction; validated a PCD map in a real environment.", fr: "Configuré Point-LIO et ajusté la reconstruction du nuage de points; validé une carte PCD en environnement réel." },
    ],
    technologies: ["Point-LIO", "LiDAR–IMU", "ROS 2", "Jetson Xavier NX"],
    kind: { en: "Engineering project", fr: "Projet d’ingénierie" },
  },
  {
    role: { en: "Robotics & AI intern", fr: "Stagiaire en robotique et IA" },
    organization: "CRNS",
    location: { en: "Sfax, Tunisia", fr: "Sfax, Tunisie" },
    period: { en: "Jun–Jul 2025", fr: "Juin–juil. 2025" },
    description: { en: "Gesture-based control of a Lynxmotion AL5D robotic arm using 3D perception and supervised learning.", fr: "Commande gestuelle d’un bras robotisé Lynxmotion AL5D par perception 3D et apprentissage supervisé." },
    contributions: [
      { en: "Captured movement with Kinect v1 and MediaPipe; mapped gestures to joint commands with an MLP.", fr: "Capturé les mouvements avec Kinect v1 et MediaPipe; associé les gestes aux commandes articulaires avec un MLP." },
      { en: "Validated the ROS 2 control chain with URDF/Xacro, RViz2 and Gazebo Ignition 6.", fr: "Validé la chaîne de commande ROS 2 avec URDF/Xacro, RViz2 et Gazebo Ignition 6." },
    ],
    technologies: ["ROS 2 Humble", "MediaPipe", "MLP", "Gazebo"],
    kind: { en: "Internship", fr: "Stage" },
  },
  {
    role: { en: "End-of-year project — autonomous mobile robot", fr: "Projet de fin d’année — robot mobile autonome" },
    organization: "ENET’Com",
    location: { en: "Sfax, Tunisia", fr: "Sfax, Tunisie" },
    period: { en: "Jan–Apr 2025", fr: "Janv.–avr. 2025" },
    description: { en: "Path following with Q-learning on an embedded mobile-robot platform.", fr: "Suivi de trajectoire par Q-learning sur une plateforme robotique mobile embarquée." },
    contributions: [
      { en: "Developed Python ROS 2 nodes for communication and Q-learning decision-making.", fr: "Développé des nœuds Python ROS 2 pour la communication et la prise de décision Q-learning." },
      { en: "Integrated Jetson Nano, ESP32, L298N, DC motors and a camera for visual path following.", fr: "Intégré Jetson Nano, ESP32, L298N, moteurs DC et caméra pour le suivi visuel de trajectoire." },
    ],
    technologies: ["Q-learning", "ROS 2", "Jetson Nano", "ESP32"],
    kind: { en: "Academic project", fr: "Projet académique" },
  },
  {
    role: { en: "Embedded systems & computer vision intern", fr: "Stagiaire en systèmes embarqués et vision par ordinateur" },
    organization: "TELNET Holding",
    location: { en: "Sfax, Tunisia", fr: "Sfax, Tunisie" },
    period: { en: "Jul 2024", fr: "Juil. 2024" },
    description: { en: "QR-code capture and decoding microservice on Raspberry Pi 4.", fr: "Microservice de capture et de décodage de QR codes sur Raspberry Pi 4." },
    contributions: [
      { en: "Built a Python/OpenCV/pyzbar pipeline and a Flask service for HTTP and JSON exchange.", fr: "Créé une chaîne Python/OpenCV/pyzbar et un service Flask pour les échanges HTTP et JSON." },
      { en: "Externalized configuration to YAML and automated startup with remote SSH administration.", fr: "Externalisé la configuration en YAML et automatisé le démarrage avec une administration distante par SSH." },
    ],
    technologies: ["Raspberry Pi 4", "OpenCV", "Flask", "Python"],
    kind: { en: "Internship", fr: "Stage" },
  },
];

export const skillGroups: SkillGroup[] = [
  { name: { en: "Programming", fr: "Programmation" }, skills: ["Python", "C++"] },
  { name: { en: "Robotics & middleware", fr: "Robotique et middleware" }, skills: ["ROS 2 (Humble, Dashing)", "ros2_control", "URDF / Xacro", "RViz2", "Gazebo Ignition", "rosbag2"] },
  { name: { en: "SLAM, navigation & multi-agent systems", fr: "SLAM, navigation et systèmes multi-agents" }, skills: ["Point-LIO", "3D SLAM", "LiDAR–IMU fusion", "LiDAR-inertial odometry", "EKF", "A*", "CBBA / DCCBBA"] },
  { name: { en: "AI & perception", fr: "IA et perception" }, skills: ["Machine Learning", "Reinforcement Learning", "Q-learning", "MLP", "Computer Vision", "OpenCV", "MediaPipe", "pyzbar"] },
  { name: { en: "Embedded systems & sensors", fr: "Systèmes embarqués et capteurs" }, skills: ["NVIDIA Jetson Xavier NX", "NVIDIA Jetson Nano", "Raspberry Pi 4", "ESP32", "Arduino", "Unitree 4D LiDAR L2", "Kinect v1"] },
  { name: { en: "Communication, simulation & systems", fr: "Communication, simulation et systèmes" }, skills: ["DDS", "V2V / V2X", "HTTP / REST", "JSON", "YAML", "Flask", "SUMO", "Linux", "SSH"] },
];

export const education = [
  {
    degree: { en: "Engineering Degree in Electronic Communication Systems", fr: "Diplôme d’ingénieur en Génie des Systèmes Électroniques de Communication" },
    institution: "ENET’Com",
    location: { en: "Sfax, Tunisia", fr: "Sfax, Tunisie" },
    period: "2023–2026",
    detail: { en: "Specialization: Connected Systems", fr: "Option : Systèmes connectés" },
  },
  {
    degree: { en: "Preparatory Cycle for Engineering Studies", fr: "Cycle préparatoire aux études d’ingénieur" },
    institution: "Faculty of Sciences of Sfax (FSS)",
    location: { en: "Sfax, Tunisia", fr: "Sfax, Tunisie" },
    period: "2021–2023",
    detail: { en: "Passed the National Entrance Examination for Engineering Schools", fr: "Admis au concours national d’entrée aux écoles d’ingénieurs" },
  },
];

export const recognitions = [
  {
    title: { en: "Scientific publication", fr: "Publication scientifique" },
    description: { en: "Scientific article available on IEEE Xplore.", fr: "Article scientifique publié sur IEEE Xplore." },
    mark: "IEEE Xplore",
  },
  {
    title: { en: "3rd National Prize", fr: "3ᵉ prix national" },
    description: { en: "TSYP 13 Robotics Challenge · IEEE", fr: "Challenge de robotique TSYP 13 · IEEE" },
    mark: "03",
  },
  {
    title: { en: "2nd National Prize", fr: "2ᵉ prix national" },
    description: { en: "Tunisia 2056 Challenge · TSYP 12", fr: "Challenge Tunisia 2056 · TSYP 12" },
    mark: "02",
  },
  {
    title: { en: "2nd place in Malta", fr: "2ᵉ place à Malte" },
    description: { en: "STEM Activities Program Award · international robotics competition", fr: "STEM Activities Program Award · compétition internationale de robotique" },
    mark: "MT",
  },
];

export const leadership = [
  { en: "Media Lead — TSYP 12", fr: "Responsable média — TSYP 12" },
  { en: "Competition Lead — TRSYP 2.0 Organizing Committee", fr: "Responsable compétition — comité d’organisation TRSYP 2.0" },
];

export const profile = {
  name: "Heni Mezni",
  role: { en: "Robotics & Embedded Systems Engineer", fr: "Ingénieur en robotique et systèmes embarqués" },
  email: "henimezni01@gmail.com",
  linkedin: "https://www.linkedin.com/in/heni-mezni-/",
  location: { en: "Sfax, Tunisia", fr: "Sfax, Tunisie" },
  photo: "/images/profile/heni-mezni.webp",
};
